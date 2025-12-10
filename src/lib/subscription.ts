// Subscription tier types and utilities for RuleVision monetization

export type SubscriptionTier = 'free' | 'pro' | 'elite';

// Feature flags that can be gated by tier
export type GatedFeature =
  // Dashboard features
  | 'READINESS_SCORE'
  | 'THREE_PILLARS'
  | 'CATEGORY_MASTERY_FULL'
  | 'STRENGTHS_WEAKNESSES'
  | 'DECISION_SPEED'
  | 'COMPOSURE_CURVE_BASIC' // 1-10
  | 'COMPOSURE_CURVE_FULL' // 11+
  | 'CLUTCH_SITUATIONS'
  | 'COMMITMENT_FULL'
  | 'MODE_BREAKDOWN'
  | 'FOCUS_PLAN'
  | 'PRINTABLE_REPORT'
  | 'PRESSURE_CALM_STATS'
  // Game mode features
  | 'UNLIMITED_QUESTIONS'
  | 'UNLIMITED_SUDDEN_DEATH'
  | 'ALL_CATEGORIES'
  | 'DAILY_5_FULL'
  | 'CATEGORY_DRILL'
  | 'FILM_ROOM'
  | 'EXAM_MODE'
  | 'RULEBOOK_EXPLANATIONS'
  | 'QUESTION_BOOKMARKING'
  | 'CUSTOM_DIFFICULTY'
  // Leaderboard
  | 'LEADERBOARD_APPEAR'
  | 'LEADERBOARD_HISTORY';

// Feature access requirements
const FEATURE_REQUIREMENTS: Record<GatedFeature, SubscriptionTier> = {
  // Dashboard - Pro tier
  READINESS_SCORE: 'pro',
  THREE_PILLARS: 'pro',
  CATEGORY_MASTERY_FULL: 'pro',
  STRENGTHS_WEAKNESSES: 'pro',
  DECISION_SPEED: 'pro',
  COMPOSURE_CURVE_BASIC: 'pro',
  COMMITMENT_FULL: 'pro',
  MODE_BREAKDOWN: 'pro',
  PRESSURE_CALM_STATS: 'pro',

  // Dashboard - Elite tier
  COMPOSURE_CURVE_FULL: 'elite',
  CLUTCH_SITUATIONS: 'elite',
  FOCUS_PLAN: 'elite',
  PRINTABLE_REPORT: 'elite',

  // Game modes - Pro tier
  UNLIMITED_QUESTIONS: 'pro',
  UNLIMITED_SUDDEN_DEATH: 'pro',
  ALL_CATEGORIES: 'pro',
  DAILY_5_FULL: 'pro',
  CATEGORY_DRILL: 'pro',
  FILM_ROOM: 'pro',
  RULEBOOK_EXPLANATIONS: 'pro',
  QUESTION_BOOKMARKING: 'pro',

  // Game modes - Elite tier
  EXAM_MODE: 'elite',
  CUSTOM_DIFFICULTY: 'elite',

  // Leaderboard
  LEADERBOARD_APPEAR: 'pro',
  LEADERBOARD_HISTORY: 'elite',
};

// Tier hierarchy for comparison
const TIER_LEVELS: Record<SubscriptionTier, number> = {
  free: 0,
  pro: 1,
  elite: 2,
};

/**
 * Check if a user tier has access to a specific feature
 */
export function canAccess(feature: GatedFeature, userTier: SubscriptionTier): boolean {
  const requiredTier = FEATURE_REQUIREMENTS[feature];
  return TIER_LEVELS[userTier] >= TIER_LEVELS[requiredTier];
}

/**
 * Get the required tier for a feature
 */
export function getRequiredTier(feature: GatedFeature): SubscriptionTier {
  return FEATURE_REQUIREMENTS[feature];
}

/**
 * Get the upgrade tier (what tier user needs to upgrade to)
 */
export function getUpgradeTier(feature: GatedFeature, currentTier: SubscriptionTier): SubscriptionTier | null {
  const requiredTier = FEATURE_REQUIREMENTS[feature];
  if (TIER_LEVELS[currentTier] >= TIER_LEVELS[requiredTier]) {
    return null; // Already has access
  }
  return requiredTier;
}

// Lock messages for each feature
export const LOCK_MESSAGES: Partial<Record<GatedFeature, string>> = {
  READINESS_SCORE: 'Your Readiness Score is calculated. Upgrade to Pro to see it.',
  THREE_PILLARS: 'Track your Game IQ, Execution, and Commitment → Upgrade to Pro',
  CATEGORY_MASTERY_FULL: 'See your mastery level across all rule categories → Upgrade to Pro',
  COMPOSURE_CURVE_FULL: 'Do you choke under extended pressure? See your full Composure Curve → Upgrade to Elite',
  CLUTCH_SITUATIONS: 'See your accuracy in End-Game, Last 2 Minutes, and Close Game situations → Upgrade to Elite',
  FOCUS_PLAN: 'Get a personalized training plan based on your weaknesses → Upgrade to Elite',
  PRINTABLE_REPORT: 'Need to share progress with your assignor? Export a printable report → Upgrade to Elite',
  CATEGORY_DRILL: 'Drill specific rule categories to improve your weaknesses → Upgrade to Pro',
  FILM_ROOM: 'Study real game footage and make the call → Upgrade to Pro',
  EXAM_MODE: 'Test yourself with timed 50-question assessments → Upgrade to Elite',
};

/**
 * Get the lock message for a feature
 */
export function getLockMessage(feature: GatedFeature): string {
  return LOCK_MESSAGES[feature] || `Upgrade to ${getRequiredTier(feature)} to access this feature`;
}

// Daily limits for free tier
export const FREE_TIER_LIMITS = {
  questionsPerDay: 5,
  suddenDeathAttemptsPerDay: 1,
  unlockedCategories: ['Personal Fouls'],
};

// Pricing information
export const PRICING = {
  free: {
    name: 'Free',
    price: 0,
    yearlyPrice: 0,
    tagline: 'For new officials and curious learners. Build the habit.',
    perfectFor: 'New officials getting started and fans who want to test their knowledge.',
  },
  pro: {
    name: 'Pro',
    price: 19,
    yearlyPrice: 149,
    yearlySavings: 35,
    tagline: 'For officials who take their craft seriously.',
    perfectFor: 'High school, AAU, and rec officials who want daily reps.',
  },
  elite: {
    name: 'Elite',
    price: 39,
    yearlyPrice: 299,
    yearlySavings: 36,
    tagline: 'For officials chasing the next level.',
    perfectFor: 'Officials pursuing college, G-League, or professional advancement.',
  },
};

// Certification pricing
export const CERTIFICATION_PRICING = {
  level1: { price: 49, name: 'Level 1' },
  level2: { price: 79, name: 'Level 2' },
  level3: { price: 99, name: 'Level 3' },
  recertification: { price: 29, name: 'Annual Recertification' },
};

// Default tier for new users
export const DEFAULT_TIER: SubscriptionTier = 'free';

// Daily limits per tier
export const DAILY_LIMITS: Record<SubscriptionTier, { questions: number; suddenDeath: number }> = {
  free: { questions: 5, suddenDeath: 1 },
  pro: { questions: Infinity, suddenDeath: Infinity },
  elite: { questions: Infinity, suddenDeath: Infinity },
};

// Free categories (only these are unlocked for free tier)
export const FREE_CATEGORIES = ['personal_fouls'];

// Check if user can access a feature
export function canAccessFeature(tier: SubscriptionTier, feature: GatedFeature): boolean {
  return canAccess(feature, tier);
}

// Check if user can access a category
export function canAccessCategory(tier: SubscriptionTier, category: string): boolean {
  if (tier !== 'free') return true;
  return FREE_CATEGORIES.includes(category);
}

// Check if user can access a game mode
export function canAccessGameMode(tier: SubscriptionTier, mode: string): boolean {
  if (tier !== 'free') return true;
  // Free tier can access basic modes
  return ['sudden-death', 'daily-5'].includes(mode);
}

// Check if user has remaining questions for the day
export function hasRemainingQuestions(tier: SubscriptionTier, questionsAnswered: number): boolean {
  const limit = DAILY_LIMITS[tier].questions;
  return limit === Infinity || questionsAnswered < limit;
}

// Check if user has remaining sudden death attempts for the day
export function hasRemainingSuddenDeath(tier: SubscriptionTier, attemptsUsed: number): boolean {
  const limit = DAILY_LIMITS[tier].suddenDeath;
  return limit === Infinity || attemptsUsed < limit;
}

// Get remaining questions for the day
export function getRemainingQuestions(tier: SubscriptionTier, questionsAnswered: number): number | 'unlimited' {
  const limit = DAILY_LIMITS[tier].questions;
  if (limit === Infinity) return 'unlimited';
  return Math.max(0, limit - questionsAnswered);
}

// Get remaining sudden death attempts for the day
export function getRemainingSuddenDeath(tier: SubscriptionTier, attemptsUsed: number): number | 'unlimited' {
  const limit = DAILY_LIMITS[tier].suddenDeath;
  if (limit === Infinity) return 'unlimited';
  return Math.max(0, limit - attemptsUsed);
}

// Check for dev tier override (for testing)
export function getDevTierOverride(): SubscriptionTier | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const tierParam = params.get('tier');
  if (tierParam && ['free', 'pro', 'elite'].includes(tierParam)) {
    return tierParam as SubscriptionTier;
  }
  return null;
}

// Feature lists for marketing page
export const TIER_FEATURES: Record<SubscriptionTier, string[]> = {
  free: [
    '5 questions per day',
    '1 Sudden Death attempt per day',
    '"Personal Fouls" category unlocked',
    'Basic streak tracking',
    'Limited performance stats',
  ],
  pro: [
    'Everything in Free, plus:',
    'Unlimited questions',
    'Unlimited Sudden Death attempts',
    'All 29 rule categories unlocked',
    'Full rulebook explanations',
    'Smart difficulty progression',
    'Bookmark tricky questions',
    'Mastery dashboard',
    'Full Daily 5 access',
    'Category Drill mode',
    'Film Room mode',
  ],
  elite: [
    'Everything in Pro, plus:',
    'Full analytics dashboard',
    'Advanced trend tracking',
    'Performance by rule section',
    'Personalized drill recommendations',
    'Exam Mode (timed 50-question)',
    'Printable PDF reports',
    'Priority access to new questions',
    'Custom difficulty tuning',
  ],
};
