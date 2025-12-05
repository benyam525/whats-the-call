import { NextResponse } from 'next/server';
import {
  getDashboardData,
  getHeroStripData,
  getGameIQPillarData,
  getDecisionExecutionPillarData,
  getCommitmentPillarData,
  getStrengthsWeaknessesData,
  generateFocusPlan,
  recordAnswerWithTracking,
} from '@/lib/dashboard-storage';
import { AnswerRecord } from '@/data/dashboard-types';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const visitorId = searchParams.get('visitorId');
    const section = searchParams.get('section'); // Optional: fetch specific section only

    if (!visitorId) {
      return NextResponse.json(
        { success: false, error: 'Missing visitorId' },
        { status: 400 }
      );
    }

    // If a specific section is requested, return only that
    if (section) {
      let data;
      switch (section) {
        case 'hero':
          data = await getHeroStripData(visitorId);
          break;
        case 'gameIQ':
          data = await getGameIQPillarData(visitorId);
          break;
        case 'execution':
          data = await getDecisionExecutionPillarData(visitorId);
          break;
        case 'commitment':
          data = await getCommitmentPillarData(visitorId);
          break;
        case 'strengths':
          data = await getStrengthsWeaknessesData(visitorId);
          break;
        case 'focusPlan':
          data = await generateFocusPlan(visitorId);
          break;
        default:
          return NextResponse.json(
            { success: false, error: `Unknown section: ${section}` },
            { status: 400 }
          );
      }

      return NextResponse.json({ success: true, data });
    }

    // Return full dashboard data
    const dashboardData = await getDashboardData(visitorId);

    return NextResponse.json({
      success: true,
      data: dashboardData,
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, ...data } = body;

    if (action === 'recordAnswer') {
      const record: AnswerRecord = {
        visitorId: data.visitorId,
        questionId: data.questionId,
        category: data.category,
        difficulty: data.difficulty,
        mode: data.mode,
        answerGiven: data.answerGiven,
        correctAnswer: data.correctAnswer,
        isCorrect: data.isCorrect,
        responseTimeMs: data.responseTimeMs,
        timeAllowedMs: data.timeAllowedMs,
        streakPosition: data.streakPosition,
        sessionId: data.sessionId,
      };

      await recordAnswerWithTracking(record);

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: 'Unknown action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error in dashboard POST:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
