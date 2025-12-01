import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { visitorId, score, difficultyReached } = await request.json();

    if (!visitorId || score === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get current best score
    const { data: existingScores } = await supabase
      .from('sudden_death_scores')
      .select('score')
      .eq('visitor_id', visitorId)
      .order('score', { ascending: false })
      .limit(1);

    const currentBest = existingScores?.[0]?.score || 0;
    const isNewBest = score > currentBest;

    // Insert new score
    const { error } = await supabase
      .from('sudden_death_scores')
      .insert({
        visitor_id: visitorId,
        score,
        difficulty_reached: difficultyReached || 'rookie',
      });

    if (error) {
      console.error('Error saving score:', error);
      return NextResponse.json({ error: 'Failed to save score' }, { status: 500 });
    }

    // Check if user needs to set display name (for leaderboard)
    const { data: userStreak } = await supabase
      .from('user_streaks')
      .select('display_name')
      .eq('visitor_id', visitorId)
      .single();

    const needsDisplayName = score >= 10 && (!userStreak?.display_name || userStreak.display_name.startsWith('Ref '));

    return NextResponse.json({
      success: true,
      isNewBest,
      needsDisplayName,
    });
  } catch (error) {
    console.error('Error saving sudden death score:', error);
    return NextResponse.json({ error: 'Failed to save score' }, { status: 500 });
  }
}
