import { casebookQuestions } from '@/data/casebook';
import { CasebookQuestion } from '@/data/types';

/**
 * Generates a deterministic seed from a date string
 * Same date = same seed = same questions for all users
 */
function seededRandom(seed: number): () => number {
  return function() {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
}

function dateToSeed(date: Date): number {
  const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    const char = dateStr.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

/**
 * Get today's 5 questions - deterministic based on date
 * All users get the same 5 questions on the same day
 */
export function getDailyQuestions(date: Date = new Date()): CasebookQuestion[] {
  const seed = dateToSeed(date);
  const random = seededRandom(seed);

  // Create a copy and shuffle deterministically
  const shuffled = [...casebookQuestions].sort(() => random() - 0.5);

  // Return first 5
  return shuffled.slice(0, 5);
}

/**
 * Get the date string for today's Daily 5
 */
export function getTodayDateString(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Check if two dates are the same day
 */
export function isSameDay(date1: Date, date2: Date): boolean {
  return date1.toISOString().split('T')[0] === date2.toISOString().split('T')[0];
}
