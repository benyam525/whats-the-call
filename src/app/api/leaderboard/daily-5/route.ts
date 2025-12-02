import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('daily_5_streaks')
      .select('visitor_id, display_name, current_streak, longest_streak')
      .gte('longest_streak', 3)
      .order('longest_streak', { ascending: false })
      .order('current_streak', { ascending: false })
      .limit(10);

    if (error) {
      console.error('Error fetching daily 5 leaderboard:', error);
      return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
    }

    const leaderboard = (data || []).map(entry => ({
      visitorId: entry.visitor_id,
      displayName: entry.display_name || `Ref ${entry.visitor_id.slice(0, 6)}`,
      currentStreak: entry.current_streak,
      longestStreak: entry.longest_streak,
    }));

    return NextResponse.json({
      success: true,
      leaderboard,
    });
  } catch (error) {
    console.error('Error fetching daily 5 leaderboard:', error);
    return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
  }
}
