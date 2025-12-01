import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for our database
export interface VoteRow {
  id: string;
  question_id: string;
  answer: 'a' | 'b' | 'c' | 'd';
  visitor_id: string | null;
  created_at: string;
}

export interface VoteStatsRow {
  question_id: string;
  votes_a: number;
  votes_b: number;
  votes_c: number;
  votes_d: number;
  total_votes: number;
}

export interface UserStreakRow {
  visitor_id: string;
  display_name: string | null;
  current_streak: number;
  longest_streak: number;
  last_answer_date: string | null;
  total_correct: number;
  total_answered: number;
  created_at: string;
  updated_at: string;
}
