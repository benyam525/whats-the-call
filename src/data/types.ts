// Parent categories for organizing questions
export type ParentCategory =
  | 'fouls-illegal-contact'
  | 'flagrant-technical-fighting'
  | 'instant-replay'
  | 'clock-timing'
  | 'out-of-bounds'
  | 'goaltending-basket-interference'
  | 'free-throws'
  | 'throw-ins-advancement'
  | 'traveling-dribbling-gather'
  | 'continuation-shooting-motion'
  | 'violations-general'
  | 'substitutions-eligibility'
  | 'correctable-errors'
  | 'administration-procedure';

// Casebook categories (specific rule areas)
export type CasebookCategory =
  | 'AWAY-FROM-THE-PLAY FOULS'
  | 'BACKBOARD'
  | 'BACKCOURT'
  | 'BATTED BALL'
  | 'BLOCKING FOULS'
  | 'CAPTAINS'
  | 'CHOICE OF BASKETS'
  | 'CLEAR-PATH-TO-THE-BASKET'
  | "COACH'S CHALLENGE"
  | 'COACHES'
  | 'CLOCK'
  | 'CONTINUATION OF PLAY'
  | 'CORRECTABLE ERRORS'
  | 'COURT DIMENSIONS'
  | 'DELAY-OF-GAME'
  | 'DISAGREEMENT BY OFFICIALS'
  | 'DISCONCERTION OF FREE THROW SHOOTER'
  | 'DOUBLE FOULS'
  | 'DRIBBLING'
  | 'EIGHT-SECOND VIOLATION'
  | 'FIGHTING'
  | 'FLAGRANT FOULS'
  | 'FREE THROWS'
  | 'GAME CLOCK'
  | 'GOALTENDING (BASKET INTERFERENCE)'
  | 'HOSTILE ACTS'
  | 'INADVERTENT WHISTLE'
  | 'INJURY/EJECTION OF PLAYERS'
  | 'INSTANT REPLAY'
  | 'JUMP BALLS'
  | 'OFFENSIVE FOULS'
  | 'OPTION TO ADVANCE THE BALL'
  | 'OUT-OF-BOUNDS'
  | 'OVERTIME'
  | 'PENALTY SITUATION'
  | 'PLAYER POSITION'
  | 'PROTESTS'
  | 'SCORERS'
  | 'SHOT CLOCK'
  | 'SUBSTITUTIONS'
  | 'TECHNICAL FOULS'
  | 'THROW-IN'
  | 'TIMEOUT'
  | 'TIMERS'
  | 'TRANSITION TAKE FOULS'
  | 'TRAVELING'
  | string; // Allow other categories

export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';

// Legacy difficulty mapping for backward compatibility
export type LegacyDifficulty = 'rookie' | 'veteran' | 'expert';

export type AnswerKey = 'A' | 'B' | 'C' | 'D';

// Legacy answer key for backward compatibility
export type LegacyAnswerKey = 'a' | 'b' | 'c' | 'd';

export interface CasebookQuestion {
  // New schema fields
  id: string;
  case_number: number;
  casebook_category: CasebookCategory | string;
  parent_category: ParentCategory;
  difficulty: Difficulty;
  rule_references: string[];
  question_text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    // Legacy lowercase keys for backward compatibility
    a?: string;
    b?: string;
    c?: string;
    d?: string;
  };
  correct_answer: AnswerKey;
  explanation: string;
  distractor_rationale: {
    [key: string]: string;
  };

  // Legacy field aliases (computed at runtime for backward compatibility)
  category?: string;
  scenario?: string;
  question?: string;
  correctAnswer?: LegacyAnswerKey;
  ruling?: string;
  ruleReference?: string;
  ruleLink?: string;
  casebookReference?: string;
}

// Alias for backward compatibility
export type CaseQuestion = CasebookQuestion;

// Legacy interface - deprecated, use CasebookQuestion instead
export interface LegacyCasebookQuestion {
  id: string;
  category: string;
  difficulty: LegacyDifficulty;
  scenario: string;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d?: string;
  };
  correctAnswer: LegacyAnswerKey;
  ruling: string;
  ruleReference: string;
  ruleLink?: string;
  casebookReference: string;
}

export interface VoteStats {
  questionId: string;
  votes: {
    A: number;
    B: number;
    C: number;
    D: number;
  };
  totalVotes: number;
}

export interface UserStreak {
  visitorId: string;
  currentStreak: number;
  longestStreak: number;
  lastAnswerDate: string;
  totalCorrect: number;
  totalAnswered: number;
}

export interface LeaderboardEntry {
  visitorId: string;
  displayName: string;
  currentStreak: number;
  totalCorrect: number;
  accuracy: number;
}

export interface DailyEmail {
  case: CasebookQuestion;
  sentAt: Date;
}

// Helper to convert legacy answer key to new format
export function toUpperAnswerKey(key: LegacyAnswerKey | AnswerKey): AnswerKey {
  return key.toUpperCase() as AnswerKey;
}

// Helper to convert new answer key to legacy format
export function toLowerAnswerKey(key: AnswerKey | LegacyAnswerKey): LegacyAnswerKey {
  return key.toLowerCase() as LegacyAnswerKey;
}

// ============================================
// SUBSCRIPTION TIERS & FEATURE GATING
// ============================================

export type SubscriptionTier = 'free' | 'pro' | 'elite';

// Features that can be gated by tier
export type GatedFeature =
  // Dashboard features
  | 'READINESS_SCORE'
  | 'THREE_PILLARS'
  | 'CATEGORY_MASTERY_FULL'
  | 'STRENGTHS_WEAKNESSES'
  | 'DECISION_SPEED'
  | 'COMPOSURE_CURVE_BASIC'    // 1-10
  | 'COMPOSURE_CURVE_FULL'     // 11+
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
  | 'CATEGORY_DRILL'
  | 'FILM_ROOM'
  | 'EXAM_MODE'
  | 'RULEBOOK_EXPLANATIONS'
  | 'BOOKMARKING'
  | 'CUSTOM_DIFFICULTY';

// Map features to minimum required tier
export const FEATURE_REQUIREMENTS: Record<GatedFeature, SubscriptionTier> = {
  // Pro tier features
  READINESS_SCORE: 'pro',
  THREE_PILLARS: 'pro',
  CATEGORY_MASTERY_FULL: 'pro',
  STRENGTHS_WEAKNESSES: 'pro',
  DECISION_SPEED: 'pro',
  COMPOSURE_CURVE_BASIC: 'pro',
  COMMITMENT_FULL: 'pro',
  MODE_BREAKDOWN: 'pro',
  PRESSURE_CALM_STATS: 'pro',
  UNLIMITED_QUESTIONS: 'pro',
  UNLIMITED_SUDDEN_DEATH: 'pro',
  ALL_CATEGORIES: 'pro',
  CATEGORY_DRILL: 'pro',
  FILM_ROOM: 'pro',
  RULEBOOK_EXPLANATIONS: 'pro',
  BOOKMARKING: 'pro',
  // Elite tier features
  COMPOSURE_CURVE_FULL: 'elite',
  CLUTCH_SITUATIONS: 'elite',
  FOCUS_PLAN: 'elite',
  PRINTABLE_REPORT: 'elite',
  EXAM_MODE: 'elite',
  CUSTOM_DIFFICULTY: 'elite',
};

// Tier hierarchy for comparison
export const TIER_HIERARCHY: Record<SubscriptionTier, number> = {
  free: 0,
  pro: 1,
  elite: 2,
};

// Daily limits by tier
export const DAILY_LIMITS: Record<SubscriptionTier, { questions: number; suddenDeath: number }> = {
  free: { questions: 5, suddenDeath: 1 },
  pro: { questions: Infinity, suddenDeath: Infinity },
  elite: { questions: Infinity, suddenDeath: Infinity },
};

// Free tier unlocked category (only "Personal Fouls" / fouls-illegal-contact)
export const FREE_TIER_CATEGORIES: ParentCategory[] = ['fouls-illegal-contact'];

// Lock messages for upgrade prompts
export const LOCK_MESSAGES: Record<string, { message: string; upgradeTo: SubscriptionTier }> = {
  READINESS_SCORE: {
    message: 'Your Readiness Score is calculated. Upgrade to Pro to see it.',
    upgradeTo: 'pro',
  },
  THREE_PILLARS: {
    message: 'Track your Game IQ, Execution, and Commitment → Upgrade to Pro',
    upgradeTo: 'pro',
  },
  CATEGORY_MASTERY: {
    message: 'See your mastery level across all rule categories → Upgrade to Pro',
    upgradeTo: 'pro',
  },
  COMPOSURE_CURVE_FULL: {
    message: 'Do you choke under extended pressure? See your full Composure Curve → Upgrade to Elite',
    upgradeTo: 'elite',
  },
  CLUTCH_SITUATIONS: {
    message: 'See your accuracy in End-Game, Last 2 Minutes, and Close Game situations → Upgrade to Elite',
    upgradeTo: 'elite',
  },
  FOCUS_PLAN: {
    message: 'Get a personalized training plan based on your weaknesses → Upgrade to Elite',
    upgradeTo: 'elite',
  },
  PRINTABLE_REPORT: {
    message: 'Need to share progress with your assignor? Export a printable report → Upgrade to Elite',
    upgradeTo: 'elite',
  },
  DAILY_LIMIT: {
    message: "You've reached your daily question limit. Upgrade to Pro for unlimited questions.",
    upgradeTo: 'pro',
  },
  SUDDEN_DEATH_LIMIT: {
    message: "You've used your daily Sudden Death attempt. Upgrade to Pro for unlimited attempts.",
    upgradeTo: 'pro',
  },
  CATEGORY_LOCKED: {
    message: 'This category is locked. Upgrade to Pro to unlock all 29 rule categories.',
    upgradeTo: 'pro',
  },
  GAME_MODE_LOCKED: {
    message: 'This game mode requires a Pro subscription.',
    upgradeTo: 'pro',
  },
};

// Pricing configuration for marketing page
export const PRICING_CONFIG = {
  free: {
    name: 'Free',
    tagline: 'For new officials and curious learners. Build the habit.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    perfectFor: 'New officials getting started and fans who want to test their knowledge.',
    features: [
      '5 questions per day',
      '1 Sudden Death attempt per day',
      '"Personal Fouls" category unlocked',
      'Basic streak tracking',
      'Limited performance stats',
    ],
  },
  pro: {
    name: 'Pro',
    tagline: 'For officials who take their craft seriously.',
    monthlyPrice: 19,
    yearlyPrice: 149,
    yearlySavings: 35,
    perfectFor: 'High school, AAU, and rec officials who want daily reps.',
    popular: true,
    features: [
      'Everything in Free, plus:',
      'Unlimited questions',
      'Unlimited Sudden Death attempts',
      'All 29 rule categories unlocked',
      'Full rulebook explanations',
      'Smart difficulty progression',
      'Question bookmarking',
      'Mastery dashboard',
      'Full Daily 5 access',
      'Category Drill mode',
    ],
  },
  elite: {
    name: 'Elite',
    tagline: 'For officials chasing the next level.',
    monthlyPrice: 39,
    yearlyPrice: 299,
    yearlySavings: 36,
    perfectFor: 'Officials pursuing college, G-League, or professional advancement.',
    features: [
      'Everything in Pro, plus:',
      'Full dashboard analytics',
      'Advanced trend tracking',
      'Performance by rule section',
      'Weakness → drill recommendations',
      'Exam Mode (50-question timed)',
      'Printable PDF reports',
      'Priority access to new content',
      'Custom difficulty tuning',
    ],
  },
} as const;

// Certification pricing
export const CERTIFICATION_PRICING = {
  level1: { price: 49, name: 'Level 1' },
  level2: { price: 79, name: 'Level 2' },
  level3: { price: 99, name: 'Level 3' },
  recertification: { price: 29, name: 'Annual Recertification' },
} as const;

// ============================================
// CATEGORY DISPLAY NAMES
// ============================================

// Category display names for UI
export const PARENT_CATEGORY_NAMES: Record<ParentCategory, string> = {
  'fouls-illegal-contact': 'Fouls & Illegal Contact',
  'flagrant-technical-fighting': 'Flagrant, Technical & Fighting',
  'instant-replay': 'Instant Replay & Challenges',
  'clock-timing': 'Game Clock & Timing',
  'out-of-bounds': 'Out-of-Bounds & Court Status',
  'goaltending-basket-interference': 'Goaltending & Basket Interference',
  'free-throws': 'Free Throws',
  'throw-ins-advancement': 'Throw-Ins & Advancement',
  'traveling-dribbling-gather': 'Traveling & Dribbling',
  'continuation-shooting-motion': 'Continuation & Shooting Motion',
  'violations-general': 'General Violations',
  'substitutions-eligibility': 'Substitutions & Eligibility',
  'correctable-errors': 'Correctable Errors',
  'administration-procedure': 'Administration & Procedures',
};
