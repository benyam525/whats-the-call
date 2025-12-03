export type Category =
  | 'Away-from-the-Play Fouls'
  | 'Backboard'
  | 'Backcourt'
  | 'Batted Ball'
  | 'Blocking Fouls'
  | 'Captains'
  | 'Choice of Baskets'
  | 'Clear-Path-to-the-Basket'
  | "Coach's Challenge"
  | 'Coaches'
  | 'Continuation of Play'
  | 'Correctable Errors'
  | 'Court Dimensions'
  | 'Delay-of-Game'
  | 'Disagreement By Officials'
  | 'Disconcertion of Free Throw Shooter'
  | 'Double Fouls'
  | 'Dribbling'
  | 'Eight-Second Violation';

export type Difficulty = 'rookie' | 'veteran' | 'expert';

export type AnswerKey = 'a' | 'b' | 'c' | 'd';

export interface CasebookQuestion {
  id: string;
  category: Category;
  difficulty: Difficulty;
  scenario: string;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d?: string;
  };
  correctAnswer: AnswerKey;
  ruling: string;
  ruleReference: string;
  ruleLink?: string;
  casebookReference: string;
}

// Alias for backward compatibility
export type CaseQuestion = CasebookQuestion;

export interface VoteStats {
  questionId: string;
  votes: {
    a: number;
    b: number;
    c: number;
    d: number;
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
