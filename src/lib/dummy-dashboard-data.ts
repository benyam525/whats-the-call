import {
  DashboardData,
  HeroStripData,
  RefReadinessScores,
  DailySummary,
  GameIQPillarData,
  CategoryMastery,
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
  DayViewData,
} from '@/data/dashboard-types';

// Full categories from the actual casebook - expanded list
const CATEGORIES = [
  'Blocking Fouls',
  'Charging Fouls',
  'Backcourt Violations',
  'Traveling',
  'Shot Clock',
  'Out of Bounds',
  'Goaltending',
  'Offensive Fouls',
  'Technical Fouls',
  'Flagrant Fouls',
  "Coach's Challenge",
  'Clear-Path-to-the-Basket',
  'Defensive 3-Seconds',
  'Delay of Game',
  'Double Dribble',
];

// Veteran ref in top 25% - high scores across the board
export function getDummyReadinessScores(): RefReadinessScores {
  return {
    gameIQ: 89,
    decisionExecution: 85,
    commitment: 94,
    refReadiness: 89, // Top 25% = 89+
    topStrength: 'Blocking Fouls',
    topWeakness: "Coach's Challenge",
  };
}

// Strong daily performance
export function getDummyDailySummary(): DailySummary {
  return {
    date: new Date().toISOString().split('T')[0],
    questionsAnswered: 52,
    questionsCorrect: 47,
    accuracy: 90,
    timeSpentSeconds: 2400, // 40 minutes
    streakDays: 23,
    pressureAccuracy: 84,
    calmAccuracy: 94,
    bestSuddenDeathStreak: 18,
    daily5Score: 5,
    strengthCategory: 'Blocking Fouls',
    weaknessCategory: "Coach's Challenge",
  };
}

export function getDummyHeroStripData(): HeroStripData {
  return {
    readinessScores: getDummyReadinessScores(),
    todaySummary: getDummyDailySummary(),
    readinessChange: 3,
    streakDays: 23,
  };
}

// Veteran ref category mastery - mostly 80%+ with strong fundamentals
function generateCategoryMastery(): CategoryMastery[] {
  const masteryData: { [key: string]: { accuracy: number; reps: number } } = {
    'Blocking Fouls': { accuracy: 96, reps: 245 },
    'Charging Fouls': { accuracy: 93, reps: 198 },
    'Backcourt Violations': { accuracy: 91, reps: 156 },
    'Traveling': { accuracy: 94, reps: 312 },
    'Shot Clock': { accuracy: 88, reps: 134 },
    'Out of Bounds': { accuracy: 95, reps: 267 },
    'Goaltending': { accuracy: 87, reps: 89 },
    'Offensive Fouls': { accuracy: 91, reps: 178 },
    'Technical Fouls': { accuracy: 85, reps: 67 },
    'Flagrant Fouls': { accuracy: 82, reps: 45 },
    "Coach's Challenge": { accuracy: 72, reps: 98 },
    'Clear-Path-to-the-Basket': { accuracy: 78, reps: 112 },
    'Defensive 3-Seconds': { accuracy: 84, reps: 76 },
    'Delay of Game': { accuracy: 89, reps: 54 },
    'Double Dribble': { accuracy: 92, reps: 143 },
  };

  return CATEGORIES.map(category => {
    const data = masteryData[category];
    const correct = Math.round(data.reps * data.accuracy / 100);
    const confidence = data.reps >= 50 && data.accuracy >= 85 ? 'reliable' :
                       data.reps < 30 && data.accuracy >= 80 ? 'unproven' :
                       data.reps >= 30 && data.accuracy >= 70 ? 'needs_work' : 'blind_spot';

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
          total: Math.round(data.reps * 0.3),
          accuracy: Math.min(100, data.accuracy + 5),
          confidence: 'reliable' as const,
        },
        {
          difficulty: 'veteran' as const,
          correct: Math.round(correct * 0.35),
          total: Math.round(data.reps * 0.4),
          accuracy: data.accuracy,
          confidence: data.accuracy >= 85 ? 'reliable' as const : 'needs_work' as const,
        },
        {
          difficulty: 'expert' as const,
          correct: Math.round(correct * 0.25),
          total: Math.round(data.reps * 0.3),
          accuracy: Math.max(55, data.accuracy - 8),
          confidence: data.accuracy >= 80 ? 'needs_work' as const : 'blind_spot' as const,
        },
      ],
    };
  });
}

function generateConceptCoverage(): ConceptCoverage[] {
  const coverageData: { [key: string]: number } = {
    'Blocking Fouls': 98,
    'Charging Fouls': 94,
    'Backcourt Violations': 91,
    'Traveling': 96,
    'Shot Clock': 85,
    'Out of Bounds': 97,
    'Goaltending': 78,
    'Offensive Fouls': 92,
    'Technical Fouls': 72,
    'Flagrant Fouls': 65,
    "Coach's Challenge": 82,
    'Clear-Path-to-the-Basket': 76,
    'Defensive 3-Seconds': 70,
    'Delay of Game': 68,
    'Double Dribble': 88,
  };

  return CATEGORIES.map(category => ({
    category,
    percentSeen: coverageData[category],
    totalAvailable: 30,
    totalAttempted: Math.round(30 * coverageData[category] / 100),
  }));
}

export function getDummyGameIQPillarData(): GameIQPillarData {
  const categories = generateCategoryMastery();
  const sortedByAccuracy = [...categories].sort((a, b) => b.accuracy - a.accuracy);

  return {
    overallScore: 89,
    masteryGrid: {
      categories,
      overallIQScore: 89,
      conceptCoverage: generateConceptCoverage(),
    },
    topStrengths: sortedByAccuracy.slice(0, 3),
    blindSpots: sortedByAccuracy.slice(-3).reverse(),
  };
}

// Veteran decision execution - smaller pressure gap, good composure
export function getDummyDecisionExecutionPillarData(): DecisionExecutionPillarData {
  const pressurePerformance: PressurePerformance = {
    calmAccuracy: 94,
    pressureAccuracy: 84,
    gap: 10, // Smaller gap = better under pressure
  };

  const decisionSpeed: DecisionSpeed = {
    avgResponseTimeMs: 4200, // Fast decisions
    avgTimeAllowedMs: 10000,
    percentWithTimeRemaining: 78,
    fastestResponseMs: 1800,
  };

  const composureCurve: ComposureCurvePoint[] = [
    { streakRange: '1-5', correct: 48, total: 50, accuracy: 96 },
    { streakRange: '6-10', correct: 44, total: 48, accuracy: 92 },
    { streakRange: '11-15', correct: 36, total: 42, accuracy: 86 },
    { streakRange: '16-20', correct: 28, total: 35, accuracy: 80 },
    { streakRange: '21+', correct: 18, total: 24, accuracy: 75 },
  ];

  const clutchSituations: ClutchPerformance[] = [
    { scenarioType: 'end_of_game', label: 'End-Game Situations', correct: 24, total: 28, accuracy: 86, avgResponseTimeMs: 4800 },
    { scenarioType: 'last_2_minutes', label: 'Last 2 Minutes', correct: 38, total: 44, accuracy: 86, avgResponseTimeMs: 4500 },
    { scenarioType: 'close_game', label: 'Close Game Calls', correct: 52, total: 58, accuracy: 90, avgResponseTimeMs: 4100 },
  ];

  return {
    overallScore: 85,
    pressurePerformance,
    decisionSpeed,
    composureCurve,
    clutchSituations,
    composureDropPoint: 'Slight drop after question 15, but stays above 75%',
  };
}

// High commitment - consistent training
export function getDummyCommitmentPillarData(): CommitmentPillarData {
  const consistency: ConsistencyMetrics = {
    currentStreak: 23,
    longestStreak: 31,
    avgSessionsPerWeek: 6.2,
    daysWithZeroRepsLast30: 1,
    targetDaysPerWeek: 5,
  };

  const modeBreakdown: ModeBreakdown = {
    filmRoom: 35,
    daily5: 15,
    suddenDeath: 30,
    categoryDrill: 20,
  };

  const trainingLoad: TrainingLoad = {
    questionsThisWeek: 248,
    questionsLastWeek: 231,
    recommendedMin: 150,
    recommendedMax: 300,
    minutesInApp: 142,
    modeBreakdown,
  };

  const focusQuality: FocusQuality = {
    strengthsRepsPercent: 45,
    weaknessRepsPercent: 32,
    bottom2Categories: ["Coach's Challenge", 'Clear-Path-to-the-Basket'],
    recommendedWeaknessPercent: 25,
  };

  return {
    overallScore: 94,
    consistency,
    trainingLoad,
    focusQuality,
  };
}

export function getDummyStrengthsWeaknessesData(): StrengthsWeaknessesData {
  const topStrengths: StrengthWeakness[] = [
    { category: 'Blocking Fouls', accuracy: 96, reps: 245, trend: 'up', trendValue: 3 },
    { category: 'Out of Bounds', accuracy: 95, reps: 267, trend: 'stable', trendValue: 1 },
    { category: 'Traveling', accuracy: 94, reps: 312, trend: 'up', trendValue: 2 },
  ];

  const topWeaknesses: StrengthWeakness[] = [
    { category: "Coach's Challenge", accuracy: 72, reps: 98, trend: 'up', trendValue: 6 },
    { category: 'Clear-Path-to-the-Basket', accuracy: 78, reps: 112, trend: 'up', trendValue: 4 },
    { category: 'Flagrant Fouls', accuracy: 82, reps: 45, trend: 'stable', trendValue: 0 },
  ];

  return { topStrengths, topWeaknesses };
}

export function getDummyFocusPlan(): FocusPlan {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 14);

  const goals: FocusPlanGoal[] = [
    {
      type: 'category_improvement',
      description: "Raise Coach's Challenge from 72% to 82%",
      currentValue: 72,
      targetValue: 82,
      progress: 45,
    },
    {
      type: 'category_improvement',
      description: 'Raise Clear-Path-to-the-Basket from 78% to 85%',
      currentValue: 78,
      targetValue: 85,
      progress: 55,
    },
    {
      type: 'pressure_gap',
      description: 'Close calm vs pressure gap from 10 to 6 points',
      currentValue: 10,
      targetValue: 6,
      progress: 35,
    },
  ];

  const actions: FocusPlanAction[] = [
    {
      action: "20 questions/day in Coach's Challenge",
      frequency: 'daily',
      targetCategory: "Coach's Challenge",
      targetMode: 'film_room',
    },
    {
      action: 'Sudden Death marathon sessions (aim for 20+)',
      frequency: '4×/week',
      targetMode: 'sudden_death',
    },
    {
      action: 'Category Drill: Clear-Path & Flagrant scenarios',
      frequency: '3×/week',
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
    overallProgress: 45,
  };
}

// Complete Day View Data
export function getDummyDayViewData(): DayViewData {
  const today = new Date();

  return {
    date: today.toISOString().split('T')[0],
    summary: getDummyDailySummary(),
    hourlyBreakdown: [
      { hour: 7, questions: 5, accuracy: 100 },
      { hour: 8, questions: 12, accuracy: 92 },
      { hour: 12, questions: 8, accuracy: 88 },
      { hour: 18, questions: 15, accuracy: 87 },
      { hour: 20, questions: 12, accuracy: 92 },
    ],
    sessionDetails: [
      {
        startTime: '07:15',
        endTime: '07:28',
        mode: 'daily_5',
        questions: 5,
        correct: 5,
        accuracy: 100,
      },
      {
        startTime: '08:00',
        endTime: '08:32',
        mode: 'film_room',
        questions: 12,
        correct: 11,
        accuracy: 92,
      },
      {
        startTime: '12:15',
        endTime: '12:35',
        mode: 'sudden_death',
        questions: 8,
        correct: 7,
        accuracy: 88,
        bestStreak: 7,
      },
      {
        startTime: '18:00',
        endTime: '18:42',
        mode: 'category_drill',
        questions: 15,
        correct: 13,
        accuracy: 87,
        category: "Coach's Challenge",
      },
      {
        startTime: '20:30',
        endTime: '20:55',
        mode: 'sudden_death',
        questions: 12,
        correct: 11,
        accuracy: 92,
        bestStreak: 11,
      },
    ],
    categoryBreakdown: [
      { category: "Coach's Challenge", questions: 18, correct: 14, accuracy: 78 },
      { category: 'Blocking Fouls', questions: 12, correct: 12, accuracy: 100 },
      { category: 'Clear-Path-to-the-Basket', questions: 8, correct: 6, accuracy: 75 },
      { category: 'Traveling', questions: 6, correct: 6, accuracy: 100 },
      { category: 'Shot Clock', questions: 8, correct: 7, accuracy: 88 },
    ],
    modeBreakdown: {
      filmRoom: { questions: 12, accuracy: 92, timeMinutes: 32 },
      daily5: { questions: 5, accuracy: 100, timeMinutes: 13 },
      suddenDeath: { questions: 20, accuracy: 90, timeMinutes: 28, bestStreak: 11 },
      categoryDrill: { questions: 15, accuracy: 87, timeMinutes: 42 },
    },
    insights: [
      { type: 'positive', message: 'Perfect 5/5 on Daily 5 - 4th consecutive perfect score!' },
      { type: 'positive', message: 'New personal best: 11-streak in Sudden Death' },
      { type: 'improvement', message: "Coach's Challenge up 6% from yesterday (72% → 78%)" },
      { type: 'focus', message: 'Clear-Path scenarios need more reps - schedule Category Drill' },
    ],
    comparisonToAverage: {
      questionsVsAvg: 12, // 12 more than usual
      accuracyVsAvg: 4, // 4% higher than usual
      timeVsAvg: 15, // 15 more minutes than usual
    },
  };
}

// Complete Week View Data
export function getDummyWeekViewData(): WeekViewData {
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);

  return {
    weekStart: weekStart.toISOString().split('T')[0],
    weekEnd: weekEnd.toISOString().split('T')[0],
    totalQuestions: 248,
    avgAccuracy: 89,
    daysActive: 6,
    readinessChange: 3,
    dailyBreakdown: [
      { date: formatDate(-6), questions: 45, accuracy: 87, streakMaintained: true },
      { date: formatDate(-5), questions: 38, accuracy: 92, streakMaintained: true },
      { date: formatDate(-4), questions: 42, accuracy: 88, streakMaintained: true },
      { date: formatDate(-3), questions: 35, accuracy: 91, streakMaintained: true },
      { date: formatDate(-2), questions: 48, accuracy: 85, streakMaintained: true },
      { date: formatDate(-1), questions: 0, accuracy: 0, streakMaintained: false },
      { date: formatDate(0), questions: 52, accuracy: 90, streakMaintained: true },
    ],
    categoryFocus: [
      { category: "Coach's Challenge", questions: 58, accuracy: 74 },
      { category: 'Blocking Fouls', questions: 42, accuracy: 96 },
      { category: 'Clear-Path-to-the-Basket', questions: 38, accuracy: 79 },
      { category: 'Traveling', questions: 32, accuracy: 94 },
      { category: 'Shot Clock', questions: 28, accuracy: 86 },
      { category: 'Goaltending', questions: 24, accuracy: 88 },
      { category: 'Flagrant Fouls', questions: 18, accuracy: 83 },
      { category: 'Technical Fouls', questions: 8, accuracy: 88 },
    ],
    weeklyInsights: [
      { type: 'achievement', message: '6/7 days active - excellent consistency!' },
      { type: 'improvement', message: "Coach's Challenge up 8% this week" },
      { type: 'streak', message: '23-day streak still going strong' },
      { type: 'focus', message: 'Clear-Path needs more attention next week' },
    ],
    modeStats: {
      filmRoom: { sessions: 8, questions: 86, avgAccuracy: 91 },
      daily5: { sessions: 6, questions: 30, avgAccuracy: 93 },
      suddenDeath: { sessions: 12, questions: 78, avgAccuracy: 86, bestStreak: 18 },
      categoryDrill: { sessions: 5, questions: 54, avgAccuracy: 82 },
    },
    personalBests: [
      { category: 'Sudden Death Streak', value: 18, date: formatDate(-3), previous: 15 },
    ],
  };
}

// Complete Season View Data
export function getDummySeasonViewData(): SeasonViewData {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const monthlyTrends: MonthlyTrend[] = [
    { month: '2024-07', questionsAnswered: 520, accuracy: 76, readinessScore: 71, daysActive: 22 },
    { month: '2024-08', questionsAnswered: 645, accuracy: 79, readinessScore: 75, daysActive: 25 },
    { month: '2024-09', questionsAnswered: 712, accuracy: 82, readinessScore: 79, daysActive: 27 },
    { month: '2024-10', questionsAnswered: 823, accuracy: 85, readinessScore: 83, daysActive: 28 },
    { month: '2024-11', questionsAnswered: 887, accuracy: 87, readinessScore: 86, daysActive: 29 },
    { month: '2024-12', questionsAnswered: 248, accuracy: 89, readinessScore: 89, daysActive: 6 },
  ];

  const categoryImprovement: CategoryImprovement[] = [
    { category: 'Blocking Fouls', startAccuracy: 82, currentAccuracy: 96, improvement: 14 },
    { category: "Coach's Challenge", startAccuracy: 58, currentAccuracy: 72, improvement: 14 },
    { category: 'Clear-Path-to-the-Basket', startAccuracy: 65, currentAccuracy: 78, improvement: 13 },
    { category: 'Charging Fouls', startAccuracy: 81, currentAccuracy: 93, improvement: 12 },
    { category: 'Traveling', startAccuracy: 84, currentAccuracy: 94, improvement: 10 },
    { category: 'Shot Clock', startAccuracy: 79, currentAccuracy: 88, improvement: 9 },
  ];

  const milestones: Milestone[] = [
    { date: '2024-12-02', type: 'streak', title: '23-Day Streak', description: 'Current active streak' },
    { date: '2024-11-28', type: 'score', title: 'Sudden Death 18', description: 'New personal best' },
    { date: '2024-11-15', type: 'mastery', title: 'Blocking Fouls Elite', description: 'Reached 95% accuracy' },
    { date: '2024-11-01', type: 'streak', title: '31-Day Streak', description: 'Your longest streak ever' },
    { date: '2024-10-22', type: 'volume', title: '2500 Questions', description: 'Lifetime milestone' },
    { date: '2024-10-01', type: 'rank', title: 'Top 25%', description: 'Entered veteran tier' },
    { date: '2024-09-15', type: 'mastery', title: 'Traveling Expert', description: 'Reached 90% accuracy' },
    { date: '2024-08-01', type: 'volume', title: '1000 Questions', description: 'Dedicated learner' },
  ];

  const composureTrend = [
    { month: '2024-07', avgStreakLength: 8, maxStreak: 12 },
    { month: '2024-08', avgStreakLength: 10, maxStreak: 14 },
    { month: '2024-09', avgStreakLength: 11, maxStreak: 15 },
    { month: '2024-10', avgStreakLength: 13, maxStreak: 17 },
    { month: '2024-11', avgStreakLength: 14, maxStreak: 18 },
    { month: '2024-12', avgStreakLength: 15, maxStreak: 18 },
  ];

  const commitmentTrend = [
    { month: '2024-07', daysActive: 22, avgQuestionsPerDay: 24 },
    { month: '2024-08', daysActive: 25, avgQuestionsPerDay: 26 },
    { month: '2024-09', daysActive: 27, avgQuestionsPerDay: 26 },
    { month: '2024-10', daysActive: 28, avgQuestionsPerDay: 29 },
    { month: '2024-11', daysActive: 29, avgQuestionsPerDay: 31 },
    { month: '2024-12', daysActive: 6, avgQuestionsPerDay: 41 },
  ];

  return {
    startDate: sixMonthsAgo.toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    monthlyTrends,
    categoryImprovement,
    composureTrend,
    commitmentTrend,
    milestones,
    seasonStats: {
      totalQuestions: 3835,
      avgAccuracy: 83,
      totalTimeMinutes: 2847,
      longestStreak: 31,
      perfectDaily5s: 42,
      categoriesMastered: 6,
    },
    ranking: {
      percentile: 78, // Top 22%
      tier: 'Veteran',
      totalRefs: 1247,
      yourRank: 274,
    },
  };
}

// Helper function to format dates
function formatDate(daysOffset: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  return date.toISOString().split('T')[0];
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
    timeView: 'day',
    dayView: getDummyDayViewData(),
    weekView: getDummyWeekViewData(),
    seasonView: getDummySeasonViewData(),
  };
}
