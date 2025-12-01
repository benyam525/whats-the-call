import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Get best score per visitor, with display name from user_streaks
    const { data, error } = await supabase
      .from('sudden_death_scores')
      .select('visitor_id, score')
      .gte('score', 10)
      .order('score', { ascending: false })
      .limit(50);

    if (error) {
      console.error('Error fetching sudden death leaderboard:', error);
      return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
    }

    // Get unique visitors with their best scores
    const visitorBestScores = new Map<string, number>();
    data?.forEach(row => {
      const current = visitorBestScores.get(row.visitor_id) || 0;
      if (row.score > current) {
        visitorBestScores.set(row.visitor_id, row.score);
      }
    });

    // Get display names
    const visitorIds = Array.from(visitorBestScores.keys());
    const { data: users } = await supabase
      .from('user_streaks')
      .select('visitor_id, display_name')
      .in('visitor_id', visitorIds);

    const userMap = new Map(users?.map(u => [u.visitor_id, u.display_name]) || []);

    // Build leaderboard
    const leaderboard = Array.from(visitorBestScores.entries())
      .map(([visitorId, score]) => ({
        visitorId,
        displayName: userMap.get(visitorId) || `Ref ${visitorId.slice(0, 6)}`,
        score,
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    return NextResponse.json({
      success: true,
      leaderboard,
    });
  } catch (error) {
    console.error('Error fetching sudden death leaderboard:', error);
    return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
  }
}
