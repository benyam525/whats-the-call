import { VoteStats, UserStreak, LeaderboardEntry, AnswerKey } from '@/data/types';
import { supabase, VoteStatsRow, UserStreakRow } from './supabase';

// ============================================
// VOTE STATS
// ============================================

export async function getVoteStats(questionId: string): Promise<VoteStats> {
  const { data, error } = await supabase
    .from('vote_stats')
    .select('*')
    .eq('question_id', questionId)
    .single();

  if (error || !data) {
    // Return empty stats if no votes yet
    return {
      questionId,
      votes: { A: 0, B: 0, C: 0, D: 0 },
      totalVotes: 0,
    };
  }

  const row = data as VoteStatsRow;
  return {
    questionId: row.question_id,
    votes: {
      A: row.votes_a,
      B: row.votes_b,
      C: row.votes_c,
      D: row.votes_d,
    },
    totalVotes: row.total_votes,
  };
}

export async function recordVote(
  questionId: string,
  answer: AnswerKey,
  visitorId?: string
): Promise<VoteStats> {
  // Insert the vote
  const { error: insertError } = await supabase
    .from('votes')
    .insert({
      question_id: questionId,
      answer,
      visitor_id: visitorId || null,
    });

  if (insertError) {
    console.error('Error inserting vote:', insertError);
    throw new Error('Failed to record vote');
  }

  // Return updated stats
  return getVoteStats(questionId);
}

// ============================================
// USER STREAKS
// ============================================

export async function getUserStreak(visitorId: string): Promise<UserStreak> {
  const { data, error } = await supabase
    .from('user_streaks')
    .select('*')
    .eq('visitor_id', visitorId)
    .single();

  if (error || !data) {
    // Return default streak if user not found
    return {
      visitorId,
      currentStreak: 0,
      longestStreak: 0,
      lastAnswerDate: '',
      totalCorrect: 0,
      totalAnswered: 0,
    };
  }

  const row = data as UserStreakRow;
  return {
    visitorId: row.visitor_id,
    currentStreak: row.current_streak,
    longestStreak: row.longest_streak,
    lastAnswerDate: row.last_answer_date || '',
    totalCorrect: row.total_correct,
    totalAnswered: row.total_answered,
  };
}

export async function updateStreak(
  visitorId: string,
  isCorrect: boolean,
  displayName?: string
): Promise<UserStreak> {
  // Call the database function to update streak
  const { data, error } = await supabase
    .rpc('update_user_streak', {
      p_visitor_id: visitorId,
      p_is_correct: isCorrect,
      p_display_name: displayName || null,
    });

  if (error) {
    console.error('Error updating streak:', error);
    throw new Error('Failed to update streak');
  }

  const row = data as UserStreakRow;
  return {
    visitorId: row.visitor_id,
    currentStreak: row.current_streak,
    longestStreak: row.longest_streak,
    lastAnswerDate: row.last_answer_date || '',
    totalCorrect: row.total_correct,
    totalAnswered: row.total_answered,
  };
}

// ============================================
// LEADERBOARD
// ============================================

export async function getLeaderboard(limit = 10): Promise<LeaderboardEntry[]> {
  const { data, error } = await supabase
    .from('user_streaks')
    .select('*')
    .gte('total_answered', 5) // Minimum 5 answers to qualify
    .order('current_streak', { ascending: false })
    .order('total_correct', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }

  return (data as UserStreakRow[]).map(row => ({
    visitorId: row.visitor_id,
    displayName: row.display_name || `Ref ${row.visitor_id.slice(0, 6)}`,
    currentStreak: row.current_streak,
    totalCorrect: row.total_correct,
    accuracy: row.total_answered > 0
      ? Math.round((row.total_correct / row.total_answered) * 100)
      : 0,
  }));
}

export async function getWeeklyLeaderboard(limit = 10): Promise<LeaderboardEntry[]> {
  // For now, same as regular leaderboard
  // Could be enhanced with weekly stats table
  return getLeaderboard(limit);
}
