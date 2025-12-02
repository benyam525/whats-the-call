import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { visitorId, displayName } = await request.json();

    if (!visitorId || !displayName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Update all streak tables with the display name
    const updates = await Promise.all([
      supabase
        .from('user_streaks')
        .update({ display_name: displayName })
        .eq('visitor_id', visitorId),
      supabase
        .from('daily_5_streaks')
        .update({ display_name: displayName })
        .eq('visitor_id', visitorId),
    ]);

    const hasError = updates.some(result => result.error);

    if (hasError) {
      console.error('Error updating display name:', updates);
      return NextResponse.json({ error: 'Failed to update name' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error setting display name:', error);
    return NextResponse.json({ error: 'Failed to set name' }, { status: 500 });
  }
}
