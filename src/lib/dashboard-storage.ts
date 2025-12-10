import { supabase } from './supabase';
import { casebookQuestions, getCategories } from '@/data/casebook';
import {
  RefReadinessScores,
  DailySummary,
  HeroStripData,
  CategoryMastery,
  CategoryMasteryGrid,
  ConceptCoverage,
  GameIQPillarData,
  PressurePerformance,
  DecisionSpeed,
  ComposureCurvePoint,
  ClutchPerformance,
  DecisionExecutionPillarData,
  ConsistencyMetrics,
  TrainingLoad,
  ModeBreakdown,
  FocusQuality,
  CommitmentPillarData,
  StrengthWeakness,
  StrengthsWeaknessesData,
  FocusPlan,
  FocusPlanGoal,
  FocusPlanAction,
  DashboardData,
  AnswerRecord,
  GameMode,
  Difficulty,
  ConfidenceLevel,
  getReadinessLabel,
  WeekViewData,
  DayViewData,
  SeasonViewData,
  MonthlyTrend,
  CategoryImprovement,
} from '@/data/dashboard-types';

// ============================================
// ANSWER RECORDING
// ============================================

export async function recordAnswerWithTracking(record: AnswerRecord): Promise<void> {
  const { error } = await supabase.rpc('record_answer_with_tracking', {
    p_visitor_id: record.visitorId,
    p_question_id: record.questionId,
    p_category: record.category,
    p_difficulty: record.difficulty,
    p_mode: record.mode,
    p_answer_given: record.answerGiven,
    p_correct_answer: record.correctAnswer,
    p_is_correct: record.isCorrect,
    p_response_time_ms: record.responseTimeMs || null,
    p_time_allowed_ms: record.timeAllowedMs || null,
    p_streak_position: record.streakPosition || null,
    p_session_id: record.sessionId || null,
  });

  if (error) {
    console.error('Error recording answer:', error);
    // Fallback: insert directly into answer_history
    await supabase.from('answer_history').insert({
      visitor_id: record.visitorId,
      question_id: record.questionId,
      category: record.category,
      difficulty: record.difficulty,
      mode: record.mode,
      answer_given: record.answerGiven,
      correct_answer: record.correctAnswer,
      is_correct: record.isCorrect,
      response_time_ms: record.responseTimeMs,
      time_allowed_ms: record.timeAllowedMs,
      streak_position: record.streakPosition,
      session_id: record.sessionId,
    });
  }
}

// ============================================
// READINESS SCORES
// ============================================

export async function getReadinessScores(visitorId: string): Promise<RefReadinessScores> {
  // Try to use the database function first
  const { data, error } = await supabase.rpc('calculate_readiness_scores', {
    p_visitor_id: visitorId,
  });

  if (!error && data && data.length > 0) {
    const row = data[0];
    return {
      gameIQ: row.game_iq || 0,
      decisionExecution: row.decision_execution || 0,
      commitment: row.commitment || 0,
      refReadiness: row.ref_readiness || 0,
      topStrength: row.top_strength,
      topWeakness: row.top_weakness,
    };
  }

  // Fallback: calculate manually from existing data
  return calculateReadinessScoresManually(visitorId);
}

async function calculateReadinessScoresManually(visitorId: string): Promise<RefReadinessScores> {
  // Get user streak data
  const { data: streakData } = await supabase
    .from('user_streaks')
    .select('*')
    .eq('visitor_id', visitorId)
    .single();

  // Get category mastery data
  const { data: masteryData } = await supabase
    .from('category_mastery')
    .select('*')
    .eq('visitor_id', visitorId);

  // Get sudden death scores
  const { data: suddenDeathData } = await supabase
    .from('sudden_death_scores')
    .select('*')
    .eq('visitor_id', visitorId);

  // Get daily 5 completions
  const { data: daily5Data } = await supabase
    .from('daily_5_completions')
    .select('*')
    .eq('visitor_id', visitorId)
    .gte('completion_date', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);

  // Calculate Game IQ (accuracy across all categories)
  let totalCorrect = 0;
  let totalAnswered = 0;
  let topStrength: string | null = null;
  let topWeakness: string | null = null;
  let maxAccuracy = 0;
  let minAccuracy = 100;

  if (masteryData && masteryData.length > 0) {
    for (const cat of masteryData) {
      totalCorrect += cat.correct;
      totalAnswered += cat.total;
      const accuracy = cat.total > 0 ? (cat.correct / cat.total) * 100 : 0;
      if (cat.total >= 5) {
        if (accuracy > maxAccuracy) {
          maxAccuracy = accuracy;
          topStrength = cat.category;
        }
        if (accuracy < minAccuracy) {
          minAccuracy = accuracy;
          topWeakness = cat.category;
        }
      }
    }
  } else if (streakData) {
    totalCorrect = streakData.total_correct;
    totalAnswered = streakData.total_answered;
  }

  const gameIQ = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  // Calculate Decision Execution (pressure performance)
  let pressureCorrect = 0;
  let pressureTotal = 0;
  if (suddenDeathData && suddenDeathData.length > 0) {
    for (const sd of suddenDeathData) {
      pressureTotal += sd.score + 1; // score = correct answers before failing
      pressureCorrect += sd.score;
    }
  }
  const decisionExecution = pressureTotal > 0
    ? Math.round((pressureCorrect / pressureTotal) * 100)
    : gameIQ; // Fall back to gameIQ if no pressure data

  // Calculate Commitment (consistency)
  const daysActive = daily5Data?.length || 0;
  const avgQuestionsPerDay = totalAnswered / Math.max(daysActive, 1);
  const commitment = Math.min(100, Math.round(
    (Math.min(daysActive / 5, 1) * 50) + // 5+ days in last 30 = 50 points
    (Math.min(avgQuestionsPerDay / 20, 1) * 50) // 20+ questions/day avg = 50 points
  ));

  // Calculate overall readiness
  const refReadiness = Math.round(gameIQ * 0.4 + decisionExecution * 0.35 + commitment * 0.25);

  return {
    gameIQ,
    decisionExecution,
    commitment,
    refReadiness,
    topStrength,
    topWeakness,
  };
}

// ============================================
// DAILY SUMMARY
// ============================================

export async function getDailySummary(visitorId: string, date?: string): Promise<DailySummary> {
  const targetDate = date || new Date().toISOString().split('T')[0];

  // Try to get from daily_snapshots first
  const { data: snapshot } = await supabase
    .from('daily_snapshots')
    .select('*')
    .eq('visitor_id', visitorId)
    .eq('snapshot_date', targetDate)
    .single();

  if (snapshot) {
    return {
      date: targetDate,
      questionsAnswered: snapshot.questions_answered,
      questionsCorrect: snapshot.questions_correct,
      accuracy: snapshot.questions_answered > 0
        ? Math.round((snapshot.questions_correct / snapshot.questions_answered) * 100)
        : 0,
      timeSpentSeconds: snapshot.time_spent_seconds || 0,
      streakDays: 0, // Will be filled from streak data
      pressureAccuracy: snapshot.pressure_questions > 0
        ? Math.round((snapshot.pressure_correct / snapshot.pressure_questions) * 100)
        : 0,
      calmAccuracy: (snapshot.questions_answered - snapshot.pressure_questions) > 0
        ? Math.round(((snapshot.questions_correct - snapshot.pressure_correct) /
            (snapshot.questions_answered - snapshot.pressure_questions)) * 100)
        : 0,
      bestSuddenDeathStreak: snapshot.best_sudden_death_streak || 0,
      daily5Score: snapshot.daily_5_score,
      strengthCategory: snapshot.strongest_category_practiced,
      weaknessCategory: snapshot.weakest_category_practiced,
    };
  }

  // Fallback: calculate from answer_history
  const { data: answers } = await supabase
    .from('answer_history')
    .select('*')
    .eq('visitor_id', visitorId)
    .gte('created_at', `${targetDate}T00:00:00`)
    .lt('created_at', `${targetDate}T23:59:59`);

  if (!answers || answers.length === 0) {
    return {
      date: targetDate,
      questionsAnswered: 0,
      questionsCorrect: 0,
      accuracy: 0,
      timeSpentSeconds: 0,
      streakDays: 0,
      pressureAccuracy: 0,
      calmAccuracy: 0,
      bestSuddenDeathStreak: 0,
      daily5Score: null,
      strengthCategory: null,
      weaknessCategory: null,
    };
  }

  const questionsAnswered = answers.length;
  const questionsCorrect = answers.filter(a => a.is_correct).length;
  const pressureAnswers = answers.filter(a => a.mode === 'sudden_death');
  const calmAnswers = answers.filter(a => a.mode !== 'sudden_death');

  return {
    date: targetDate,
    questionsAnswered,
    questionsCorrect,
    accuracy: Math.round((questionsCorrect / questionsAnswered) * 100),
    timeSpentSeconds: 0,
    streakDays: 0,
    pressureAccuracy: pressureAnswers.length > 0
      ? Math.round((pressureAnswers.filter(a => a.is_correct).length / pressureAnswers.length) * 100)
      : 0,
    calmAccuracy: calmAnswers.length > 0
      ? Math.round((calmAnswers.filter(a => a.is_correct).length / calmAnswers.length) * 100)
      : 0,
    bestSuddenDeathStreak: 0,
    daily5Score: null,
    strengthCategory: null,
    weaknessCategory: null,
  };
}

// ============================================
// HERO STRIP DATA
// ============================================

export async function getHeroStripData(visitorId: string): Promise<HeroStripData> {
  const [readinessScores, todaySummary, streakData] = await Promise.all([
    getReadinessScores(visitorId),
    getDailySummary(visitorId),
    supabase.from('daily_5_streaks').select('*').eq('visitor_id', visitorId).single(),
  ]);

  // Get yesterday's readiness for comparison
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const { data: yesterdaySnapshot } = await supabase
    .from('daily_snapshots')
    .select('ref_readiness_score')
    .eq('visitor_id', visitorId)
    .eq('snapshot_date', yesterday.toISOString().split('T')[0])
    .single();

  const readinessChange = yesterdaySnapshot?.ref_readiness_score
    ? readinessScores.refReadiness - yesterdaySnapshot.ref_readiness_score
    : 0;

  return {
    readinessScores,
    todaySummary: {
      ...todaySummary,
      streakDays: streakData.data?.current_streak || 0,
    },
    readinessChange,
    streakDays: streakData.data?.current_streak || 0,
  };
}

// ============================================
// GAME IQ PILLAR
// ============================================

export async function getCategoryMasteryGrid(visitorId: string): Promise<CategoryMasteryGrid> {
  // Try database function first
  const { data: gridData } = await supabase.rpc('get_category_mastery_grid', {
    p_visitor_id: visitorId,
  });

  const allCategories = getCategories();
  const questionsByCategory: Record<string, number> = {};
  casebookQuestions.forEach(q => {
    const cat = q.category || q.parent_category || 'unknown';
    questionsByCategory[cat] = (questionsByCategory[cat] || 0) + 1;
  });

  // Get category_difficulty_mastery data
  const { data: masteryData } = await supabase
    .from('category_difficulty_mastery')
    .select('*')
    .eq('visitor_id', visitorId);

  // Get basic category_mastery for totals
  const { data: basicMasteryData } = await supabase
    .from('category_mastery')
    .select('*')
    .eq('visitor_id', visitorId);

  // Build mastery grid
  const categoryMap = new Map<string, CategoryMastery>();

  for (const category of allCategories) {
    categoryMap.set(category, {
      category,
      accuracy: 0,
      correct: 0,
      total: 0,
      confidence: 'blind_spot',
      difficultyBreakdown: [],
    });
  }

  // Fill in basic mastery data
  if (basicMasteryData) {
    for (const m of basicMasteryData) {
      const existing = categoryMap.get(m.category);
      if (existing) {
        existing.correct = m.correct;
        existing.total = m.total;
        existing.accuracy = m.total > 0 ? Math.round((m.correct / m.total) * 100) : 0;
        existing.confidence = getConfidenceLevel(m.correct, m.total);
      }
    }
  }

  // Fill in difficulty breakdown from gridData or masteryData
  if (gridData && gridData.length > 0) {
    for (const row of gridData) {
      const existing = categoryMap.get(row.category);
      if (existing) {
        existing.difficultyBreakdown.push({
          difficulty: row.difficulty as Difficulty,
          correct: row.correct,
          total: row.total,
          accuracy: row.accuracy,
          confidence: row.confidence as ConfidenceLevel,
        });
      }
    }
  } else if (masteryData) {
    for (const m of masteryData) {
      const existing = categoryMap.get(m.category);
      if (existing) {
        existing.difficultyBreakdown.push({
          difficulty: m.difficulty as Difficulty,
          correct: m.correct,
          total: m.total,
          accuracy: m.total > 0 ? Math.round((m.correct / m.total) * 100) : 0,
          confidence: getConfidenceLevel(m.correct, m.total),
        });
      }
    }
  }

  // Calculate concept coverage
  const conceptCoverage: ConceptCoverage[] = allCategories.map(category => {
    const mastery = categoryMap.get(category);
    const totalAvailable = questionsByCategory[category] || 0;
    const totalAttempted = mastery?.total || 0;
    return {
      category,
      percentSeen: totalAvailable > 0 ? Math.round((totalAttempted / totalAvailable) * 100) : 0,
      totalAvailable,
      totalAttempted,
    };
  });

  // Calculate overall IQ score
  let totalCorrect = 0;
  let totalAnswered = 0;
  categoryMap.forEach(m => {
    totalCorrect += m.correct;
    totalAnswered += m.total;
  });
  const overallIQScore = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return {
    categories: Array.from(categoryMap.values()),
    overallIQScore,
    conceptCoverage,
  };
}

export async function getGameIQPillarData(visitorId: string): Promise<GameIQPillarData> {
  const masteryGrid = await getCategoryMasteryGrid(visitorId);

  const sortedByAccuracy = [...masteryGrid.categories]
    .filter(c => c.total >= 5)
    .sort((a, b) => b.accuracy - a.accuracy);

  return {
    overallScore: masteryGrid.overallIQScore,
    masteryGrid,
    topStrengths: sortedByAccuracy.slice(0, 3),
    blindSpots: sortedByAccuracy.slice(-3).reverse(),
  };
}

// ============================================
// DECISION EXECUTION PILLAR
// ============================================

export async function getDecisionExecutionPillarData(visitorId: string): Promise<DecisionExecutionPillarData> {
  // Get answer history for pressure vs calm analysis
  const { data: answerData } = await supabase
    .from('answer_history')
    .select('*')
    .eq('visitor_id', visitorId);

  const pressureAnswers = answerData?.filter(a => a.mode === 'sudden_death') || [];
  const calmAnswers = answerData?.filter(a => a.mode !== 'sudden_death') || [];

  const pressureCorrect = pressureAnswers.filter(a => a.is_correct).length;
  const calmCorrect = calmAnswers.filter(a => a.is_correct).length;

  const pressureAccuracy = pressureAnswers.length > 0
    ? Math.round((pressureCorrect / pressureAnswers.length) * 100)
    : 0;
  const calmAccuracy = calmAnswers.length > 0
    ? Math.round((calmCorrect / calmAnswers.length) * 100)
    : 0;

  const pressurePerformance: PressurePerformance = {
    calmAccuracy,
    pressureAccuracy,
    gap: calmAccuracy - pressureAccuracy,
  };

  // Decision speed metrics
  const timedAnswers = answerData?.filter(a => a.response_time_ms != null && a.time_allowed_ms != null) || [];
  const avgResponseTime = timedAnswers.length > 0
    ? Math.round(timedAnswers.reduce((sum, a) => sum + a.response_time_ms, 0) / timedAnswers.length)
    : 0;
  const avgTimeAllowed = timedAnswers.length > 0
    ? Math.round(timedAnswers.reduce((sum, a) => sum + a.time_allowed_ms, 0) / timedAnswers.length)
    : 10000;
  const answersWithTimeRemaining = timedAnswers.filter(a =>
    (a.time_allowed_ms - a.response_time_ms) > 3000
  ).length;

  const decisionSpeed: DecisionSpeed = {
    avgResponseTimeMs: avgResponseTime,
    avgTimeAllowedMs: avgTimeAllowed,
    percentWithTimeRemaining: timedAnswers.length > 0
      ? Math.round((answersWithTimeRemaining / timedAnswers.length) * 100)
      : 0,
    fastestResponseMs: timedAnswers.length > 0
      ? Math.min(...timedAnswers.map(a => a.response_time_ms))
      : 0,
  };

  // Composure curve (accuracy by streak position)
  const { data: composureData } = await supabase.rpc('get_composure_curve', {
    p_visitor_id: visitorId,
  });

  let composureCurve: ComposureCurvePoint[] = [];
  if (composureData && composureData.length > 0) {
    composureCurve = composureData.map((row: { streak_range: string; correct: number; total: number; accuracy: number }) => ({
      streakRange: row.streak_range,
      correct: row.correct,
      total: row.total,
      accuracy: row.accuracy,
    }));
  } else {
    // Calculate manually from answer_history
    const suddenDeathWithStreak = pressureAnswers.filter(a => a.streak_position != null);
    const ranges = ['1-5', '6-10', '11-15', '16+'];
    composureCurve = ranges.map(range => {
      let filtered: typeof suddenDeathWithStreak = [];
      if (range === '1-5') filtered = suddenDeathWithStreak.filter(a => a.streak_position >= 1 && a.streak_position <= 5);
      else if (range === '6-10') filtered = suddenDeathWithStreak.filter(a => a.streak_position >= 6 && a.streak_position <= 10);
      else if (range === '11-15') filtered = suddenDeathWithStreak.filter(a => a.streak_position >= 11 && a.streak_position <= 15);
      else filtered = suddenDeathWithStreak.filter(a => a.streak_position > 15);

      const correct = filtered.filter(a => a.is_correct).length;
      return {
        streakRange: range,
        correct,
        total: filtered.length,
        accuracy: filtered.length > 0 ? Math.round((correct / filtered.length) * 100) : 0,
      };
    });
  }

  // Clutch situations (placeholder - would need tagged questions)
  const clutchSituations: ClutchPerformance[] = [
    { scenarioType: 'end_of_game', label: 'End-Game Situations', correct: 0, total: 0, accuracy: 0, avgResponseTimeMs: null },
    { scenarioType: 'last_2_minutes', label: 'Last 2 Minutes', correct: 0, total: 0, accuracy: 0, avgResponseTimeMs: null },
    { scenarioType: 'close_game', label: 'Close Game Calls', correct: 0, total: 0, accuracy: 0, avgResponseTimeMs: null },
  ];

  // Find composure drop point
  let composureDropPoint: string | null = null;
  for (let i = 1; i < composureCurve.length; i++) {
    const drop = composureCurve[i - 1].accuracy - composureCurve[i].accuracy;
    if (drop > 10 && composureCurve[i].total >= 5) {
      composureDropPoint = `After question ${composureCurve[i - 1].streakRange.split('-')[1]}, accuracy drops ${Math.round(drop)} points`;
      break;
    }
  }

  // Calculate overall execution score
  const overallScore = Math.round(
    (pressureAccuracy * 0.4) +
    (calmAccuracy * 0.3) +
    (decisionSpeed.percentWithTimeRemaining * 0.3)
  );

  return {
    overallScore,
    pressurePerformance,
    decisionSpeed,
    composureCurve,
    clutchSituations,
    composureDropPoint,
  };
}

// ============================================
// COMMITMENT PILLAR
// ============================================

export async function getCommitmentPillarData(visitorId: string): Promise<CommitmentPillarData> {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  // Get streak data
  const { data: streakData } = await supabase
    .from('daily_5_streaks')
    .select('*')
    .eq('visitor_id', visitorId)
    .single();

  // Get daily snapshots for activity analysis
  const { data: snapshots } = await supabase
    .from('daily_snapshots')
    .select('*')
    .eq('visitor_id', visitorId)
    .gte('snapshot_date', thirtyDaysAgo.toISOString().split('T')[0]);

  // Calculate consistency metrics
  const daysActive30 = snapshots?.length || 0;
  const daysWithZero = 30 - daysActive30;
  const recentSnapshots = snapshots?.filter(s =>
    new Date(s.snapshot_date) >= sevenDaysAgo
  ) || [];
  const sessionsLast7Days = recentSnapshots.length;

  const consistency: ConsistencyMetrics = {
    currentStreak: streakData?.current_streak || 0,
    longestStreak: streakData?.longest_streak || 0,
    avgSessionsPerWeek: Math.round((daysActive30 / 30) * 7 * 10) / 10,
    daysWithZeroRepsLast30: daysWithZero,
    targetDaysPerWeek: 4,
  };

  // Calculate training load
  const thisWeekSnapshots = snapshots?.filter(s => {
    const date = new Date(s.snapshot_date);
    return date >= sevenDaysAgo;
  }) || [];

  const lastWeekStart = new Date();
  lastWeekStart.setDate(lastWeekStart.getDate() - 14);
  const lastWeekSnapshots = snapshots?.filter(s => {
    const date = new Date(s.snapshot_date);
    return date >= lastWeekStart && date < sevenDaysAgo;
  }) || [];

  const questionsThisWeek = thisWeekSnapshots.reduce((sum, s) => sum + s.questions_answered, 0);
  const questionsLastWeek = lastWeekSnapshots.reduce((sum, s) => sum + s.questions_answered, 0);
  const minutesInApp = thisWeekSnapshots.reduce((sum, s) => sum + (s.time_spent_seconds || 0), 0) / 60;

  // Mode breakdown
  const totalQuestions = snapshots?.reduce((sum, s) => sum + s.questions_answered, 0) || 1;
  const filmRoomQ = snapshots?.reduce((sum, s) => sum + s.film_room_questions, 0) || 0;
  const daily5Q = snapshots?.reduce((sum, s) => sum + s.daily_5_questions, 0) || 0;
  const suddenDeathQ = snapshots?.reduce((sum, s) => sum + s.sudden_death_questions, 0) || 0;
  const categoryDrillQ = snapshots?.reduce((sum, s) => sum + s.category_drill_questions, 0) || 0;

  const modeBreakdown: ModeBreakdown = {
    filmRoom: Math.round((filmRoomQ / totalQuestions) * 100),
    daily5: Math.round((daily5Q / totalQuestions) * 100),
    suddenDeath: Math.round((suddenDeathQ / totalQuestions) * 100),
    categoryDrill: Math.round((categoryDrillQ / totalQuestions) * 100),
  };

  const trainingLoad: TrainingLoad = {
    questionsThisWeek,
    questionsLastWeek,
    recommendedMin: 150,
    recommendedMax: 300,
    minutesInApp: Math.round(minutesInApp),
    modeBreakdown,
  };

  // Focus quality - analyze if user is training weaknesses
  const { data: masteryData } = await supabase
    .from('category_mastery')
    .select('*')
    .eq('visitor_id', visitorId);

  const sortedCategories = (masteryData || [])
    .filter(m => m.total >= 5)
    .sort((a, b) => {
      const accA = a.total > 0 ? a.correct / a.total : 0;
      const accB = b.total > 0 ? b.correct / b.total : 0;
      return accA - accB;
    });

  const bottom2Categories = sortedCategories.slice(0, 2).map(c => c.category);
  const top3Categories = sortedCategories.slice(-3).map(c => c.category);

  // Get recent answer distribution by category
  const { data: recentAnswers } = await supabase
    .from('answer_history')
    .select('category')
    .eq('visitor_id', visitorId)
    .gte('created_at', thirtyDaysAgo.toISOString());

  const recentTotal = recentAnswers?.length || 1;
  const strengthReps = recentAnswers?.filter(a => top3Categories.includes(a.category)).length || 0;
  const weaknessReps = recentAnswers?.filter(a => bottom2Categories.includes(a.category)).length || 0;

  const focusQuality: FocusQuality = {
    strengthsRepsPercent: Math.round((strengthReps / recentTotal) * 100),
    weaknessRepsPercent: Math.round((weaknessReps / recentTotal) * 100),
    bottom2Categories,
    recommendedWeaknessPercent: 25,
  };

  // Calculate overall commitment score
  const overallScore = Math.min(100, Math.round(
    (Math.min(sessionsLast7Days / 5, 1) * 40) + // 5+ days/week = 40 points
    (Math.min(questionsThisWeek / 150, 1) * 30) + // 150+ questions/week = 30 points
    (Math.min(focusQuality.weaknessRepsPercent / 25, 1) * 30) // 25%+ weakness focus = 30 points
  ));

  return {
    overallScore,
    consistency,
    trainingLoad,
    focusQuality,
  };
}

// ============================================
// STRENGTHS & WEAKNESSES
// ============================================

export async function getStrengthsWeaknessesData(visitorId: string): Promise<StrengthsWeaknessesData> {
  const { data: masteryData } = await supabase
    .from('category_mastery')
    .select('*')
    .eq('visitor_id', visitorId);

  if (!masteryData || masteryData.length === 0) {
    return {
      topStrengths: [],
      topWeaknesses: [],
    };
  }

  // Calculate accuracy and trends for each category
  const categoryStats: StrengthWeakness[] = masteryData
    .filter(m => m.total >= 5)
    .map(m => ({
      category: m.category,
      accuracy: Math.round((m.correct / m.total) * 100),
      reps: m.total,
      trend: 'stable' as const, // Would need historical data for real trends
      trendValue: 0,
    }))
    .sort((a, b) => b.accuracy - a.accuracy);

  return {
    topStrengths: categoryStats.slice(0, 3),
    topWeaknesses: categoryStats.slice(-3).reverse(),
  };
}

// ============================================
// FOCUS PLAN
// ============================================

export async function generateFocusPlan(visitorId: string): Promise<FocusPlan> {
  const { data: existing } = await supabase
    .from('focus_plans')
    .select('*')
    .eq('visitor_id', visitorId)
    .eq('is_active', true)
    .single();

  if (existing && new Date(existing.plan_end_date) > new Date()) {
    return {
      id: existing.id,
      startDate: existing.plan_start_date,
      endDate: existing.plan_end_date,
      isActive: true,
      goals: existing.goal_category_improvement || [],
      actions: [],
      overallProgress: 0,
    };
  }

  // Generate new plan based on current weaknesses
  const strengthsWeaknesses = await getStrengthsWeaknessesData(visitorId);
  const execution = await getDecisionExecutionPillarData(visitorId);

  const startDate = new Date().toISOString().split('T')[0];
  const endDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const goals: FocusPlanGoal[] = [];
  const actions: FocusPlanAction[] = [];

  // Add category improvement goals
  for (const weakness of strengthsWeaknesses.topWeaknesses.slice(0, 2)) {
    goals.push({
      type: 'category_improvement',
      description: `Raise ${weakness.category} from ${weakness.accuracy}% to ${weakness.accuracy + 11}%`,
      currentValue: weakness.accuracy,
      targetValue: weakness.accuracy + 11,
      progress: 0,
    });

    actions.push({
      action: `15 questions/day in ${weakness.category}`,
      frequency: 'daily',
      targetCategory: weakness.category,
      targetMode: 'film_room',
    });
  }

  // Add pressure gap goal if significant
  if (execution.pressurePerformance.gap > 10) {
    goals.push({
      type: 'pressure_gap',
      description: `Close calm vs pressure gap from ${execution.pressurePerformance.gap} to ${Math.max(5, execution.pressurePerformance.gap - 6)} points`,
      currentValue: execution.pressurePerformance.gap,
      targetValue: Math.max(5, execution.pressurePerformance.gap - 6),
      progress: 0,
    });

    actions.push({
      action: 'Sudden Death sessions focused on weak categories',
      frequency: '3×/week',
      targetMode: 'sudden_death',
    });
  }

  // Save the plan
  const { data: newPlan } = await supabase
    .from('focus_plans')
    .insert({
      visitor_id: visitorId,
      plan_start_date: startDate,
      plan_end_date: endDate,
      target_categories: strengthsWeaknesses.topWeaknesses.map(w => w.category),
      target_daily_questions: 15,
      target_pressure_sessions: 3,
      goal_category_improvement: goals.filter(g => g.type === 'category_improvement'),
      goal_pressure_gap_reduction: goals.find(g => g.type === 'pressure_gap') || null,
      is_active: true,
    })
    .select()
    .single();

  return {
    id: newPlan?.id || 'new',
    startDate,
    endDate,
    isActive: true,
    goals,
    actions,
    overallProgress: 0,
  };
}

// ============================================
// TIME VIEWS
// ============================================

export async function getWeekViewData(visitorId: string): Promise<WeekViewData> {
  const { data: weeklyTrends } = await supabase.rpc('get_weekly_trends', {
    p_visitor_id: visitorId,
    p_weeks: 1,
  });

  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);

  const currentWeek = weeklyTrends?.[0];

  return {
    weekStart: weekStart.toISOString().split('T')[0],
    weekEnd: weekEnd.toISOString().split('T')[0],
    totalQuestions: currentWeek?.questions_answered || 0,
    avgAccuracy: currentWeek?.accuracy || 0,
    daysActive: currentWeek?.days_active || 0,
    readinessChange: 0,
    dailyBreakdown: [],
    categoryFocus: [],
  };
}

export async function getSeasonViewData(visitorId: string): Promise<SeasonViewData> {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  // Get monthly aggregates
  const { data: snapshots } = await supabase
    .from('daily_snapshots')
    .select('*')
    .eq('visitor_id', visitorId)
    .gte('snapshot_date', sixMonthsAgo.toISOString().split('T')[0]);

  const monthlyMap = new Map<string, {
    questions: number;
    correct: number;
    daysActive: number;
  }>();

  snapshots?.forEach(s => {
    const month = s.snapshot_date.substring(0, 7); // YYYY-MM
    const existing = monthlyMap.get(month) || { questions: 0, correct: 0, daysActive: 0 };
    monthlyMap.set(month, {
      questions: existing.questions + s.questions_answered,
      correct: existing.correct + s.questions_correct,
      daysActive: existing.daysActive + 1,
    });
  });

  const monthlyTrends: MonthlyTrend[] = Array.from(monthlyMap.entries()).map(([month, data]) => ({
    month,
    questionsAnswered: data.questions,
    accuracy: data.questions > 0 ? Math.round((data.correct / data.questions) * 100) : 0,
    readinessScore: 0,
  }));

  return {
    startDate: sixMonthsAgo.toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    monthlyTrends,
    categoryImprovement: [],
    composureTrend: [],
    commitmentTrend: [],
    milestones: [],
  };
}

// ============================================
// FULL DASHBOARD
// ============================================

export async function getDashboardData(visitorId: string): Promise<DashboardData> {
  const [heroStrip, gameIQ, decisionExecution, commitment, strengthsWeaknesses, focusPlan, weekView] = await Promise.all([
    getHeroStripData(visitorId),
    getGameIQPillarData(visitorId),
    getDecisionExecutionPillarData(visitorId),
    getCommitmentPillarData(visitorId),
    getStrengthsWeaknessesData(visitorId),
    generateFocusPlan(visitorId),
    getWeekViewData(visitorId),
  ]);

  return {
    visitorId,
    lastUpdated: new Date().toISOString(),
    heroStrip,
    gameIQ,
    decisionExecution,
    commitment,
    strengthsWeaknesses,
    focusPlan,
    timeView: 'week',
    weekView,
  };
}

// ============================================
// HELPERS
// ============================================

function getConfidenceLevel(correct: number, total: number): ConfidenceLevel {
  if (total < 5) return 'blind_spot';
  const accuracy = correct / total;
  if (total >= 20 && accuracy >= 0.8) return 'reliable';
  if (total < 10 && accuracy >= 0.8) return 'unproven';
  if (total >= 10 && accuracy >= 0.6) return 'needs_work';
  return 'blind_spot';
}
