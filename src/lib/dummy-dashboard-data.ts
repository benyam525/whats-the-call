import {
  DashboardData,
  HeroStripData,
  RefReadinessScores,
  DailySummary,
  GameIQPillarData,
  CategoryMastery,
  CategoryMasteryGrid,
  ConceptCoverage,
  DecisionExecutionPillarData,
  PressurePerformance,
  DecisionSpeed,
  ComposureCurvePoint,
  ClutchPerformance,
  CommitmentPillarData,
  ConsistencyMetrics,
  TrainingLoad,
  ModeBreakdown,
  FocusQuality,
  StrengthsWeaknessesData,
  StrengthWeakness,
  FocusPlan,
  FocusPlanGoal,
  FocusPlanAction,
  WeekViewData,
  SeasonViewData,
  MonthlyTrend,
  CategoryImprovement,
  Milestone,
} from '@/data/dashboard-types';

// Categories from the actual casebook
const CATEGORIES = [
  'Away-from-the-Play Fouls',
  'Backboard',
  'Backcourt',
  'Batted Ball',
  'Blocking Fouls',
  'Captains',
  'Choice of Baskets',
  'Clear-Path-to-the-Basket',
  "Coach's Challenge",
];

// Generate dummy readiness scores
export function getDummyReadinessScores(): RefReadinessScores {
  return {
    gameIQ: 82,
    decisionExecution: 74,
    commitment: 88,
    refReadiness: 82,
    topStrength: 'Blocking Fouls',
    topWeakness: "Coach's Challenge",
  };
}

// Generate dummy daily summary
export function getDummyDailySummary(): DailySummary {
  return {
    date: new Date().toISOString().split('T')[0],
    questionsAnswered: 47,
    questionsCorrect: 41,
    accuracy: 87,
    timeSpentSeconds: 1800,
    streakDays: 12,
    pressureAccuracy: 77,
    calmAccuracy: 91,
    bestSuddenDeathStreak: 14,
    daily5Score: 4,
    strengthCategory: 'Blocking Fouls',
    weaknessCategory: "Coach's Challenge",
  };
}

// Generate dummy hero strip data
export function getDummyHeroStripData(): HeroStripData {
  return {
    readinessScores: getDummyReadinessScores(),
    todaySummary: getDummyDailySummary(),
    readinessChange: 4,
    streakDays: 12,
  };
}

// Generate dummy category mastery
function generateCategoryMastery(): CategoryMastery[] {
  const masteryData: { [key: string]: { accuracy: number; reps: number } } = {
    'Away-from-the-Play Fouls': { accuracy: 78, reps: 45 },
    'Backboard': { accuracy: 85, reps: 32 },
    'Backcourt': { accuracy: 89, reps: 67 },
    'Batted Ball': { accuracy: 92, reps: 28 },
    'Blocking Fouls': { accuracy: 92, reps: 156 },
    'Captains': { accuracy: 75, reps: 18 },
    'Choice of Baskets': { accuracy: 88, reps: 12 },
    'Clear-Path-to-the-Basket': { accuracy: 66, reps: 89 },
    "Coach's Challenge": { accuracy: 61, reps: 72 },
  };

  return CATEGORIES.map(category => {
    const data = masteryData[category];
    const correct = Math.round(data.reps * data.accuracy / 100);
    const confidence = data.reps >= 20 && data.accuracy >= 80 ? 'reliable' :
                       data.reps < 10 && data.accuracy >= 80 ? 'unproven' :
                       data.reps >= 10 && data.accuracy >= 60 ? 'needs_work' : 'blind_spot';

    return {
      category,
      accuracy: data.accuracy,
      correct,
      total: data.reps,
      confidence: confidence as 'reliable' | 'unproven' | 'needs_work' | 'blind_spot',
      difficultyBreakdown: [
        {
          difficulty: 'rookie' as const,
          correct: Math.round(correct * 0.4),
          total: Math.round(data.reps * 0.35),
          accuracy: Math.min(100, data.accuracy + 8),
          confidence: 'reliable' as const,
        },
        {
          difficulty: 'veteran' as const,
          correct: Math.round(correct * 0.35),
          total: Math.round(data.reps * 0.4),
          accuracy: data.accuracy,
          confidence: 'needs_work' as const,
        },
        {
          difficulty: 'expert' as const,
          correct: Math.round(correct * 0.25),
          total: Math.round(data.reps * 0.25),
          accuracy: Math.max(40, data.accuracy - 12),
          confidence: 'blind_spot' as const,
        },
      ],
    };
  });
}

// Generate concept coverage
function generateConceptCoverage(): ConceptCoverage[] {
  const coverageData: { [key: string]: number } = {
    'Away-from-the-Play Fouls': 62,
    'Backboard': 78,
    'Backcourt': 85,
    'Batted Ball': 45,
    'Blocking Fouls': 94,
    'Captains': 33,
    'Choice of Baskets': 50,
    'Clear-Path-to-the-Basket': 71,
    "Coach's Challenge": 58,
  };

  return CATEGORIES.map(category => ({
    category,
    percentSeen: coverageData[category],
    totalAvailable: 25, // Approximate questions per category
    totalAttempted: Math.round(25 * coverageData[category] / 100),
  }));
}

// Generate dummy Game IQ pillar data
export function getDummyGameIQPillarData(): GameIQPillarData {
  const categories = generateCategoryMastery();
  const sortedByAccuracy = [...categories].sort((a, b) => b.accuracy - a.accuracy);

  return {
    overallScore: 82,
    masteryGrid: {
      categories,
      overallIQScore: 82,
      conceptCoverage: generateConceptCoverage(),
    },
    topStrengths: sortedByAccuracy.slice(0, 3),
    blindSpots: sortedByAccuracy.slice(-3).reverse(),
  };
}

// Generate dummy Decision Execution pillar data
export function getDummyDecisionExecutionPillarData(): DecisionExecutionPillarData {
  const pressurePerformance: PressurePerformance = {
    calmAccuracy: 91,
    pressureAccuracy: 77,
    gap: 14,
  };

  const decisionSpeed: DecisionSpeed = {
    avgResponseTimeMs: 5800,
    avgTimeAllowedMs: 10000,
    percentWithTimeRemaining: 65,
    fastestResponseMs: 2100,
  };

  const composureCurve: ComposureCurvePoint[] = [
    { streakRange: '1-5', correct: 45, total: 50, accuracy: 90 },
    { streakRange: '6-10', correct: 38, total: 44, accuracy: 86 },
    { streakRange: '11-15', correct: 21, total: 29, accuracy: 72 },
    { streakRange: '16+', correct: 8, total: 14, accuracy: 57 },
  ];

  const clutchSituations: ClutchPerformance[] = [
    { scenarioType: 'end_of_game', label: 'End-Game Situations', correct: 12, total: 18, accuracy: 67, avgResponseTimeMs: 6200 },
    { scenarioType: 'last_2_minutes', label: 'Last 2 Minutes', correct: 23, total: 32, accuracy: 72, avgResponseTimeMs: 5900 },
    { scenarioType: 'close_game', label: 'Close Game Calls', correct: 28, total: 35, accuracy: 80, avgResponseTimeMs: 5400 },
  ];

  return {
    overallScore: 74,
    pressurePerformance,
    decisionSpeed,
    composureCurve,
    clutchSituations,
    composureDropPoint: 'After question 10, accuracy drops 14 points',
  };
}

// Generate dummy Commitment pillar data
export function getDummyCommitmentPillarData(): CommitmentPillarData {
  const consistency: ConsistencyMetrics = {
    currentStreak: 12,
    longestStreak: 18,
    avgSessionsPerWeek: 5.4,
    daysWithZeroRepsLast30: 3,
    targetDaysPerWeek: 4,
  };

  const modeBreakdown: ModeBreakdown = {
    filmRoom: 40,
    daily5: 10,
    suddenDeath: 30,
    categoryDrill: 20,
  };

  const trainingLoad: TrainingLoad = {
    questionsThisWeek: 187,
    questionsLastWeek: 156,
    recommendedMin: 150,
    recommendedMax: 300,
    minutesInApp: 94,
    modeBreakdown,
  };

  const focusQuality: FocusQuality = {
    strengthsRepsPercent: 68,
    weaknessRepsPercent: 10,
    bottom2Categories: ["Coach's Challenge", 'Clear-Path-to-the-Basket'],
    recommendedWeaknessPercent: 25,
  };

  return {
    overallScore: 88,
    consistency,
    trainingLoad,
    focusQuality,
  };
}

// Generate dummy strengths and weaknesses
export function getDummyStrengthsWeaknessesData(): StrengthsWeaknessesData {
  const topStrengths: StrengthWeakness[] = [
    { category: 'Blocking Fouls', accuracy: 92, reps: 156, trend: 'up', trendValue: 4 },
    { category: 'Batted Ball', accuracy: 92, reps: 28, trend: 'stable', trendValue: 0 },
    { category: 'Backcourt', accuracy: 89, reps: 67, trend: 'up', trendValue: 2 },
  ];

  const topWeaknesses: StrengthWeakness[] = [
    { category: "Coach's Challenge", accuracy: 61, reps: 72, trend: 'down', trendValue: -3 },
    { category: 'Clear-Path-to-the-Basket', accuracy: 66, reps: 89, trend: 'up', trendValue: 5 },
    { category: 'Captains', accuracy: 75, reps: 18, trend: 'stable', trendValue: 0 },
  ];

  return { topStrengths, topWeaknesses };
}

// Generate dummy focus plan
export function getDummyFocusPlan(): FocusPlan {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 14);

  const goals: FocusPlanGoal[] = [
    {
      type: 'category_improvement',
      description: "Raise Coach's Challenge from 61% to 72%",
      currentValue: 61,
      targetValue: 72,
      progress: 35,
    },
    {
      type: 'category_improvement',
      description: 'Raise Clear-Path-to-the-Basket from 66% to 75%',
      currentValue: 66,
      targetValue: 75,
      progress: 45,
    },
    {
      type: 'pressure_gap',
      description: 'Close calm vs pressure gap from 14 to 8 points',
      currentValue: 14,
      targetValue: 8,
      progress: 20,
    },
  ];

  const actions: FocusPlanAction[] = [
    {
      action: "15 questions/day in Coach's Challenge",
      frequency: 'daily',
      targetCategory: "Coach's Challenge",
      targetMode: 'film_room',
    },
    {
      action: 'Sudden Death sets focused on Clear-Path & Transition',
      frequency: '3×/week',
      targetMode: 'sudden_death',
    },
    {
      action: 'Category Drill: Clear-Path scenarios',
      frequency: '2×/week',
      targetCategory: 'Clear-Path-to-the-Basket',
      targetMode: 'category_drill',
    },
  ];

  return {
    id: 'plan-001',
    startDate: startDate.toISOString().split('T')[0],
    endDate: endDate.toISOString().split('T')[0],
    isActive: true,
    goals,
    actions,
    overallProgress: 33,
  };
}

// Generate dummy week view data
export function getDummyWeekViewData(): WeekViewData {
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);

  return {
    weekStart: weekStart.toISOString().split('T')[0],
    weekEnd: weekEnd.toISOString().split('T')[0],
    totalQuestions: 187,
    avgAccuracy: 84,
    daysActive: 6,
    readinessChange: 4,
    dailyBreakdown: [],
    categoryFocus: [
      { category: 'Blocking Fouls', questions: 42, accuracy: 92 },
      { category: "Coach's Challenge", questions: 35, accuracy: 68 },
      { category: 'Clear-Path-to-the-Basket', questions: 28, accuracy: 71 },
      { category: 'Backcourt', questions: 24, accuracy: 88 },
    ],
  };
}

// Generate dummy season view data
export function getDummySeasonViewData(): SeasonViewData {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const monthlyTrends: MonthlyTrend[] = [
    { month: '2024-07', questionsAnswered: 320, accuracy: 71, readinessScore: 65 },
    { month: '2024-08', questionsAnswered: 445, accuracy: 74, readinessScore: 70 },
    { month: '2024-09', questionsAnswered: 512, accuracy: 77, readinessScore: 74 },
    { month: '2024-10', questionsAnswered: 623, accuracy: 80, readinessScore: 78 },
    { month: '2024-11', questionsAnswered: 687, accuracy: 83, readinessScore: 81 },
    { month: '2024-12', questionsAnswered: 187, accuracy: 84, readinessScore: 82 },
  ];

  const categoryImprovement: CategoryImprovement[] = [
    { category: 'Blocking Fouls', startAccuracy: 78, currentAccuracy: 92, improvement: 14 },
    { category: 'Clear-Path-to-the-Basket', startAccuracy: 52, currentAccuracy: 66, improvement: 14 },
    { category: 'Backcourt', startAccuracy: 81, currentAccuracy: 89, improvement: 8 },
    { category: "Coach's Challenge", startAccuracy: 55, currentAccuracy: 61, improvement: 6 },
  ];

  const milestones: Milestone[] = [
    { date: '2024-11-28', type: 'streak', title: '18-Day Streak!', description: 'Your longest streak ever' },
    { date: '2024-11-15', type: 'mastery', title: 'Blocking Fouls Master', description: 'Reached 90% accuracy' },
    { date: '2024-10-22', type: 'score', title: 'Sudden Death 14', description: 'New personal best' },
    { date: '2024-09-01', type: 'volume', title: '1000 Questions', description: 'Answered 1,000 questions total' },
  ];

  return {
    startDate: sixMonthsAgo.toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    monthlyTrends,
    categoryImprovement,
    composureTrend: [],
    commitmentTrend: [],
    milestones,
  };
}

// Generate full dummy dashboard data
export function getDummyDashboardData(visitorId: string = 'demo_user'): DashboardData {
  return {
    visitorId,
    lastUpdated: new Date().toISOString(),
    heroStrip: getDummyHeroStripData(),
    gameIQ: getDummyGameIQPillarData(),
    decisionExecution: getDummyDecisionExecutionPillarData(),
    commitment: getDummyCommitmentPillarData(),
    strengthsWeaknesses: getDummyStrengthsWeaknessesData(),
    focusPlan: getDummyFocusPlan(),
    timeView: 'week',
    weekView: getDummyWeekViewData(),
    seasonView: getDummySeasonViewData(),
  };
}
