import { NextResponse } from 'next/server';
import { getLeaderboard, getWeeklyLeaderboard } from '@/lib/storage';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'all';
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    const leaderboard = type === 'weekly'
      ? await getWeeklyLeaderboard(limit)
      : await getLeaderboard(limit);

    return NextResponse.json({
      success: true,
      leaderboard,
      type,
    });
  } catch (error) {
    console.error('Error getting leaderboard:', error);
    return NextResponse.json(
      { error: 'Failed to get leaderboard' },
      { status: 500 }
    );
  }
}
