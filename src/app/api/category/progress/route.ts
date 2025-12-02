import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const visitorId = request.nextUrl.searchParams.get('visitorId');

  if (!visitorId) {
    return NextResponse.json({ error: 'Visitor ID required' }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from('category_mastery')
      .select('category, correct, total')
      .eq('visitor_id', visitorId);

    if (error) {
      console.error('Error fetching category progress:', error);
      return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
    }

    return NextResponse.json({
      stats: data || [],
    });
  } catch (error) {
    console.error('Error fetching category progress:', error);
    return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { visitorId, category, isCorrect } = await request.json();

    if (!visitorId || !category || isCorrect === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Call the stored procedure to update mastery
    const { data, error } = await supabase.rpc('update_category_mastery', {
      p_visitor_id: visitorId,
      p_category: category,
      p_is_correct: isCorrect,
    });

    if (error) {
      console.error('Error updating category mastery:', error);
      return NextResponse.json({ error: 'Failed to save progress' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      mastery: data,
    });
  } catch (error) {
    console.error('Error saving category progress:', error);
    return NextResponse.json({ error: 'Failed to save progress' }, { status: 500 });
  }
}
