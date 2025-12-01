export type Category =
  | '24-Second Clock'
  | 'Backcourt Violation'
  | 'Ball in Play'
  | 'Basket Interference / Goaltending'
  | 'Blood Protocol'
  | 'Boundary Lines'
  | 'Charging / Blocking';

export type Difficulty = 'rookie' | 'veteran' | 'expert';

export type AnswerKey = 'a' | 'b' | 'c' | 'd';

export interface CaseQuestion {
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
  ruleReference?: string;
  ruleLink?: string;
}

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
  case: CaseQuestion;
  sentAt: Date;
}
