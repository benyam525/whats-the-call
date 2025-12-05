// ============================================
// RuleVision Dashboard Types
// Ref Readiness Performance OS
// ============================================

export type GameMode = 'film_room' | 'daily_5' | 'sudden_death' | 'category_drill';
export type Difficulty = 'rookie' | 'veteran' | 'expert';
export type ConfidenceLevel = 'reliable' | 'unproven' | 'needs_work' | 'blind_spot';
export type TimeView = 'day' | 'week' | 'season';

// ============================================
// Core Readiness Scores
// ============================================

export interface RefReadinessScores {
  gameIQ: number; // 0-100
  decisionExecution: number; // 0-100
  commitment: number; // 0-100
  refReadiness: number; // 0-100 (overall)
  topStrength: string | null;
  topWeakness: string | null;
}

export interface ReadinessLabel {
  score: number;
  label: string; // "Locked In", "Game Ready", "Building", "Getting Started"
  color: string;
}

export function getReadinessLabel(score: number): ReadinessLabel {
  if (score >= 85) return { score, label: 'Locked In', color: '#22C55E' };
  if (score >= 70) return { score, label: 'Game Ready', color: '#3B82F6' };
  if (score >= 50) return { score, label: 'Building', color: '#F59E0B' };
  if (score >= 25) return { score, label: 'Getting Started', color: '#EF4444' };
  return { score, label: 'New Ref', color: '#6B7280' };
}

// ============================================
// Hero Strip / Daily Summary
// ============================================

export interface DailySummary {
  date: string;
  questionsAnswered: number;
  questionsCorrect: number;
  accuracy: number;
  timeSpentSeconds: number;
  streakDays: number;
  pressureAccuracy: number;
  calmAccuracy: number;
  bestSuddenDeathStreak: number;
  daily5Score: number | null;
  strengthCategory: string | null;
  weaknessCategory: string | null;
}

export interface HeroStripData {
  readinessScores: RefReadinessScores;
  todaySummary: DailySummary;
  readinessChange: number; // vs yesterday
  streakDays: number;
}

// ============================================
// Pillar 1: Game IQ
// ============================================

export interface CategoryMastery {
  category: string;
  accuracy: number;
  correct: number;
  total: number;
  confidence: ConfidenceLevel;
  difficultyBreakdown: DifficultyMastery[];
}

export interface DifficultyMastery {
  difficulty: Difficulty;
  correct: number;
  total: number;
  accuracy: number;
  confidence: ConfidenceLevel;
}

export interface CategoryMasteryGrid {
  categories: CategoryMastery[];
  overallIQScore: number;
  conceptCoverage: ConceptCoverage[];
}

export interface ConceptCoverage {
  category: string;
  percentSeen: number; // % of questions in this category user has attempted
  totalAvailable: number;
  totalAttempted: number;
}

export interface GameIQPillarData {
  overallScore: number;
  masteryGrid: CategoryMasteryGrid;
  topStrengths: CategoryMastery[];
  blindSpots: CategoryMastery[];
}

// ============================================
// Pillar 2: Decision Execution
// ============================================

export interface PressurePerformance {
  calmAccuracy: number; // Film Room, Category Drill
  pressureAccuracy: number; // Sudden Death
  gap: number; // Difference (calm - pressure)
}

export interface DecisionSpeed {
  avgResponseTimeMs: number;
  avgTimeAllowedMs: number;
  percentWithTimeRemaining: number; // answered with >3s left
  fastestResponseMs: number;
}

export interface ComposureCurvePoint {
  streakRange: string; // "1-5", "6-10", "11-15", "16+"
  correct: number;
  total: number;
  accuracy: number;
}

export interface ClutchPerformance {
  scenarioType: string;
  label: string;
  correct: number;
  total: number;
  accuracy: number;
  avgResponseTimeMs: number | null;
}

export interface DecisionExecutionPillarData {
  overallScore: number;
  pressurePerformance: PressurePerformance;
  decisionSpeed: DecisionSpeed;
  composureCurve: ComposureCurvePoint[];
  clutchSituations: ClutchPerformance[];
  composureDropPoint: string | null; // e.g., "After question 10, accuracy drops 14 points"
}

// ============================================
// Pillar 3: Commitment
// ============================================

export interface ConsistencyMetrics {
  currentStreak: number;
  longestStreak: number;
  avgSessionsPerWeek: number;
  daysWithZeroRepsLast30: number;
  targetDaysPerWeek: number;
}

export interface TrainingLoad {
  questionsThisWeek: number;
  questionsLastWeek: number;
  recommendedMin: number;
  recommendedMax: number;
  minutesInApp: number;
  modeBreakdown: ModeBreakdown;
}

export interface ModeBreakdown {
  filmRoom: number; // percentage
  daily5: number;
  suddenDeath: number;
  categoryDrill: number;
}

export interface FocusQuality {
  strengthsRepsPercent: number; // % of reps in top categories
  weaknessRepsPercent: number; // % of reps in bottom categories
  bottom2Categories: string[];
  recommendedWeaknessPercent: number;
}

export interface CommitmentPillarData {
  overallScore: number;
  consistency: ConsistencyMetrics;
  trainingLoad: TrainingLoad;
  focusQuality: FocusQuality;
}

// ============================================
// Strengths & Weaknesses
// ============================================

export interface StrengthWeakness {
  category: string;
  accuracy: number;
  reps: number;
  trend: 'up' | 'down' | 'stable';
  trendValue: number; // +/- percentage points
}

export interface StrengthsWeaknessesData {
  topStrengths: StrengthWeakness[];
  topWeaknesses: StrengthWeakness[];
}

// ============================================
// 14-Day Focus Plan
// ============================================

export interface FocusPlanGoal {
  type: 'category_improvement' | 'pressure_gap' | 'consistency';
  description: string;
  currentValue: number;
  targetValue: number;
  progress: number; // 0-100
}

export interface FocusPlanAction {
  action: string;
  frequency: string; // "15 questions/day", "3×/week"
  targetCategory?: string;
  targetMode?: GameMode;
}

export interface FocusPlan {
  id: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  goals: FocusPlanGoal[];
  actions: FocusPlanAction[];
  overallProgress: number;
}

// ============================================
// Time Views
// ============================================

export interface DayViewData {
  date: string;
  summary: DailySummary;
  readinessScores: RefReadinessScores;
  hourlyActivity?: HourlyActivity[];
}

export interface HourlyActivity {
  hour: number;
  questionsAnswered: number;
  accuracy: number;
}

export interface WeekViewData {
  weekStart: string;
  weekEnd: string;
  totalQuestions: number;
  avgAccuracy: number;
  daysActive: number;
  readinessChange: number;
  dailyBreakdown: DayViewData[];
  categoryFocus: CategoryFocus[];
}

export interface CategoryFocus {
  category: string;
  questions: number;
  accuracy: number;
}

export interface SeasonViewData {
  startDate: string;
  endDate: string;
  monthlyTrends: MonthlyTrend[];
  categoryImprovement: CategoryImprovement[];
  composureTrend: ComposureTrend[];
  commitmentTrend: CommitmentTrend[];
  milestones: Milestone[];
}

export interface MonthlyTrend {
  month: string;
  questionsAnswered: number;
  accuracy: number;
  readinessScore: number;
}

export interface CategoryImprovement {
  category: string;
  startAccuracy: number;
  currentAccuracy: number;
  improvement: number;
}

export interface ComposureTrend {
  month: string;
  pressureAccuracy: number;
  calmAccuracy: number;
  gap: number;
}

export interface CommitmentTrend {
  month: string;
  daysActive: number;
  avgQuestionsPerDay: number;
  streakBest: number;
}

export interface Milestone {
  date: string;
  type: 'streak' | 'mastery' | 'score' | 'volume';
  title: string;
  description: string;
}

// ============================================
// Full Dashboard Data
// ============================================

export interface DashboardData {
  visitorId: string;
  lastUpdated: string;
  heroStrip: HeroStripData;
  gameIQ: GameIQPillarData;
  decisionExecution: DecisionExecutionPillarData;
  commitment: CommitmentPillarData;
  strengthsWeaknesses: StrengthsWeaknessesData;
  focusPlan: FocusPlan | null;
  timeView: TimeView;
  dayView?: DayViewData;
  weekView?: WeekViewData;
  seasonView?: SeasonViewData;
}

// ============================================
// Answer Tracking (for recording new answers)
// ============================================

export interface AnswerRecord {
  visitorId: string;
  questionId: string;
  category: string;
  difficulty: Difficulty;
  mode: GameMode;
  answerGiven: string;
  correctAnswer: string;
  isCorrect: boolean;
  responseTimeMs?: number;
  timeAllowedMs?: number;
  streakPosition?: number;
  sessionId?: string;
}

export interface SessionRecord {
  visitorId: string;
  sessionId: string;
  startedAt: string;
  endedAt?: string;
  durationSeconds?: number;
  questionsAnswered: number;
  questionsCorrect: number;
  modesUsed: GameMode[];
  categoriesPracticed: string[];
}

// ============================================
// API Response Types
// ============================================

export interface DashboardAPIResponse {
  success: boolean;
  data?: DashboardData;
  error?: string;
}

export interface ReadinessScoresAPIResponse {
  success: boolean;
  data?: RefReadinessScores;
  error?: string;
}

export interface CategoryMasteryAPIResponse {
  success: boolean;
  data?: CategoryMasteryGrid;
  error?: string;
}

export interface FocusPlanAPIResponse {
  success: boolean;
  data?: FocusPlan;
  error?: string;
}
