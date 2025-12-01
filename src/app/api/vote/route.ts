import { NextResponse } from 'next/server';
import { recordVote, getVoteStats } from '@/lib/storage';
import { AnswerKey } from '@/data/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { questionId, answer } = body;

    if (!questionId || !answer) {
      return NextResponse.json(
        { error: 'Missing questionId or answer' },
        { status: 400 }
      );
    }

    if (!['a', 'b', 'c', 'd'].includes(answer)) {
      return NextResponse.json(
        { error: 'Invalid answer option' },
        { status: 400 }
      );
    }

    const stats = await recordVote(questionId, answer as AnswerKey);

    return NextResponse.json({
      success: true,
      stats,
    });
  } catch (error) {
    console.error('Error recording vote:', error);
    return NextResponse.json(
      { error: 'Failed to record vote' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const questionId = searchParams.get('questionId');

    if (!questionId) {
      return NextResponse.json(
        { error: 'Missing questionId' },
        { status: 400 }
      );
    }

    const stats = await getVoteStats(questionId);

    return NextResponse.json({
      success: true,
      stats,
    });
  } catch (error) {
    console.error('Error getting vote stats:', error);
    return NextResponse.json(
      { error: 'Failed to get vote stats' },
      { status: 500 }
    );
  }
}
