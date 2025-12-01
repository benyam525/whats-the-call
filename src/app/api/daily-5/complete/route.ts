import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { visitorId, score, answers } = await request.json();

    if (!visitorId || score === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Call the stored procedure to update streak
    const { data: streak, error } = await supabase.rpc('update_daily_5_streak', {
      p_visitor_id: visitorId,
      p_score: score,
      p_answers: answers,
      p_display_name: null,
    });

    if (error) {
      console.error('Error updating daily 5 streak:', error);
      return NextResponse.json({ error: 'Failed to save completion' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      streak,
    });
  } catch (error) {
    console.error('Error completing daily 5:', error);
    return NextResponse.json({ error: 'Failed to complete' }, { status: 500 });
  }
}
