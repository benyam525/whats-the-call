import { NextResponse } from 'next/server';
import { getUserStreak, updateStreak } from '@/lib/storage';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { visitorId, isCorrect, displayName } = body;

    if (!visitorId || typeof isCorrect !== 'boolean') {
      return NextResponse.json(
        { error: 'Missing visitorId or isCorrect' },
        { status: 400 }
      );
    }

    const streak = await updateStreak(visitorId, isCorrect, displayName);

    return NextResponse.json({
      success: true,
      streak,
    });
  } catch (error) {
    console.error('Error updating streak:', error);
    return NextResponse.json(
      { error: 'Failed to update streak' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const visitorId = searchParams.get('visitorId');

    if (!visitorId) {
      return NextResponse.json(
        { error: 'Missing visitorId' },
        { status: 400 }
      );
    }

    const streak = await getUserStreak(visitorId);

    return NextResponse.json({
      success: true,
      streak,
    });
  } catch (error) {
    console.error('Error getting streak:', error);
    return NextResponse.json(
      { error: 'Failed to get streak' },
      { status: 500 }
    );
  }
}
