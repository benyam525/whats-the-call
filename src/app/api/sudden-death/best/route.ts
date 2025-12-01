import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const visitorId = request.nextUrl.searchParams.get('visitorId');

  if (!visitorId) {
    return NextResponse.json({ error: 'Visitor ID required' }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from('sudden_death_scores')
      .select('score')
      .eq('visitor_id', visitorId)
      .order('score', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
      // PGRST116 is "no rows returned" which is fine
      console.error('Error fetching best score:', error);
      return NextResponse.json({ error: 'Failed to fetch score' }, { status: 500 });
    }

    return NextResponse.json({
      bestScore: data?.score || 0,
    });
  } catch (error) {
    console.error('Error fetching best score:', error);
    return NextResponse.json({ error: 'Failed to fetch score' }, { status: 500 });
  }
}
