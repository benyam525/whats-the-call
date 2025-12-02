import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const visitorId = request.nextUrl.searchParams.get('visitorId');

  if (!visitorId) {
    return NextResponse.json({ error: 'Visitor ID required' }, { status: 400 });
  }

  try {
    const today = new Date().toISOString().split('T')[0];

    // Check if completed today
    const { data: completion } = await supabase
      .from('daily_5_completions')
      .select('score')
      .eq('visitor_id', visitorId)
      .eq('completion_date', today)
      .single();

    // Get streak info
    const { data: streak } = await supabase
      .from('daily_5_streaks')
      .select('*')
      .eq('visitor_id', visitorId)
      .single();

    return NextResponse.json({
      completedToday: !!completion,
      score: completion?.score || null,
      currentStreak: streak?.current_streak || 0,
      longestStreak: streak?.longest_streak || 0,
      streak: streak || null,
    });
  } catch (error) {
    console.error('Error checking daily 5 status:', error);
    return NextResponse.json({ error: 'Failed to check status' }, { status: 500 });
  }
}
