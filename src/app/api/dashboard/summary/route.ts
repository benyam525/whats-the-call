import { NextResponse } from 'next/server';
import { getDummyDashboardData } from '@/lib/dummy-dashboard-data';
import { getDashboardData } from '@/lib/dashboard-storage';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const demo = searchParams.get('demo') === 'true';
  const visitorId = searchParams.get('visitorId') || 'demo_user';

  try {
    const data = demo
      ? getDummyDashboardData(visitorId)
      : await getDashboardData(visitorId);

    const scores = data.heroStrip.readinessScores;
    const summary = data.heroStrip.todaySummary;
    const gameIQ = data.gameIQ;
    const execution = data.decisionExecution;
    const commitment = data.commitment;
    const sw = data.strengthsWeaknesses;

    // Build readable text summary
    const text = `
═══════════════════════════════════════════════════════════
                    REF READINESS DASHBOARD
               ${demo ? '(Demo Mode - Top 25% Veteran Ref)' : '(Real User Data)'}
═══════════════════════════════════════════════════════════

📊 OVERALL READINESS SCORE: ${scores.refReadiness}/100
   ${getScoreBar(scores.refReadiness)}

┌─────────────────────────────────────────────────────────┐
│                    THREE PILLARS                        │
├─────────────────────────────────────────────────────────┤
│  🧠 Game IQ:           ${padScore(scores.gameIQ)} ${getScoreBar(scores.gameIQ, 20)}  │
│  ⚡ Decision Execution: ${padScore(scores.decisionExecution)} ${getScoreBar(scores.decisionExecution, 20)}  │
│  🔥 Commitment:         ${padScore(scores.commitment)} ${getScoreBar(scores.commitment, 20)}  │
└─────────────────────────────────────────────────────────┘

📅 TODAY'S SUMMARY
   • Questions: ${summary.questionsAnswered} answered, ${summary.questionsCorrect} correct (${summary.accuracy}%)
   • Streak: ${summary.streakDays} days 🔥
   • Time: ${Math.round(summary.timeSpentSeconds / 60)} minutes
   • Pressure Accuracy: ${summary.pressureAccuracy}%
   • Calm Accuracy: ${summary.calmAccuracy}%

═══════════════════════════════════════════════════════════
                      🧠 GAME IQ (${gameIQ.overallScore})
═══════════════════════════════════════════════════════════

CATEGORY MASTERY (${gameIQ.masteryGrid.categories.length} categories):
${gameIQ.masteryGrid.categories.map(c =>
  `  ${getConfidenceEmoji(c.confidence)} ${c.category.padEnd(25)} ${padScore(c.accuracy)}% (${c.total} reps)`
).join('\n')}

TOP STRENGTHS:
${gameIQ.topStrengths.slice(0, 3).map(s =>
  `  ✅ ${s.category}: ${s.accuracy}%`
).join('\n')}

BLIND SPOTS:
${gameIQ.blindSpots.slice(0, 3).map(s =>
  `  ⚠️  ${s.category}: ${s.accuracy}%`
).join('\n')}

═══════════════════════════════════════════════════════════
                 ⚡ DECISION EXECUTION (${execution.overallScore})
═══════════════════════════════════════════════════════════

PRESSURE VS CALM:
  • Calm Accuracy:     ${execution.pressurePerformance.calmAccuracy}%
  • Pressure Accuracy: ${execution.pressurePerformance.pressureAccuracy}%
  • Gap:               ${execution.pressurePerformance.gap} points

DECISION SPEED:
  • Avg Response: ${(execution.decisionSpeed.avgResponseTimeMs / 1000).toFixed(1)}s
  • Fastest:      ${(execution.decisionSpeed.fastestResponseMs / 1000).toFixed(1)}s

COMPOSURE CURVE (accuracy by streak length):
${execution.composureCurve.map(c =>
  `  ${c.streakRange.padEnd(6)} → ${c.accuracy}% (${c.correct}/${c.total})`
).join('\n')}

CLUTCH SITUATIONS:
${execution.clutchSituations.map(c =>
  `  ${c.label}: ${c.accuracy}% (${c.correct}/${c.total})`
).join('\n')}

═══════════════════════════════════════════════════════════
                   🔥 COMMITMENT (${commitment.overallScore})
═══════════════════════════════════════════════════════════

CONSISTENCY:
  • Current Streak:  ${commitment.consistency.currentStreak} days
  • Longest Streak:  ${commitment.consistency.longestStreak} days
  • Avg Sessions/Wk: ${commitment.consistency.avgSessionsPerWeek}
  • Rest Days (30d): ${commitment.consistency.daysWithZeroRepsLast30}

TRAINING LOAD:
  • This Week:  ${commitment.trainingLoad.questionsThisWeek} questions
  • Last Week:  ${commitment.trainingLoad.questionsLastWeek} questions
  • Time in App: ${commitment.trainingLoad.minutesInApp} minutes

MODE BREAKDOWN:
  • Film Room:     ${commitment.trainingLoad.modeBreakdown.filmRoom}%
  • Sudden Death:  ${commitment.trainingLoad.modeBreakdown.suddenDeath}%
  • Category Drill: ${commitment.trainingLoad.modeBreakdown.categoryDrill}%
  • Daily 5:       ${commitment.trainingLoad.modeBreakdown.daily5}%

═══════════════════════════════════════════════════════════
                  STRENGTHS & WEAKNESSES
═══════════════════════════════════════════════════════════

TOP STRENGTHS:
${sw.topStrengths.map(s =>
  `  📈 ${s.category}: ${s.accuracy}% (${s.reps} reps) ${getTrendArrow(s.trend, s.trendValue)}`
).join('\n')}

AREAS TO IMPROVE:
${sw.topWeaknesses.map(w =>
  `  📉 ${w.category}: ${w.accuracy}% (${w.reps} reps) ${getTrendArrow(w.trend, w.trendValue)}`
).join('\n')}

═══════════════════════════════════════════════════════════
                     14-DAY FOCUS PLAN
═══════════════════════════════════════════════════════════

GOALS:
${data.focusPlan?.goals.map(g =>
  `  🎯 ${g.description} (${g.progress}% complete)`
).join('\n') || '  No goals set yet'}

ACTIONS:
${data.focusPlan?.actions.map(a =>
  `  • ${a.action} (${a.frequency})`
).join('\n') || '  No actions set yet'}

═══════════════════════════════════════════════════════════
                         SUMMARY
═══════════════════════════════════════════════════════════

This referee is ${getRefereeAssessment(scores.refReadiness)}.

Primary strength: ${scores.topStrength}
Needs work on: ${scores.topWeakness}

${demo ? 'This is demo data representing a top 25% veteran referee.' : 'This is real performance data from actual training sessions.'}

View interactive dashboard: https://whats-the-call.vercel.app/dashboard${demo ? '?demo=true' : ''}
`.trim();

    return new NextResponse(text, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error generating dashboard summary:', error);
    return new NextResponse('Error generating dashboard summary', { status: 500 });
  }
}

function getScoreBar(score: number, width: number = 30): string {
  const filled = Math.round((score / 100) * width);
  const empty = width - filled;
  return '█'.repeat(filled) + '░'.repeat(empty);
}

function padScore(score: number): string {
  return score.toString().padStart(2, ' ');
}

function getConfidenceEmoji(confidence: string): string {
  switch (confidence) {
    case 'reliable': return '🟢';
    case 'unproven': return '🟡';
    case 'needs_work': return '🟠';
    case 'blind_spot': return '🔴';
    default: return '⚪';
  }
}

function getTrendArrow(trend: string, value: number): string {
  if (trend === 'up') return `↑${value}%`;
  if (trend === 'down') return `↓${value}%`;
  return '→';
}

function getRefereeAssessment(score: number): string {
  if (score >= 90) return 'an ELITE referee in the top 10%';
  if (score >= 85) return 'a VETERAN referee in the top 25%';
  if (score >= 75) return 'a SOLID referee showing strong fundamentals';
  if (score >= 60) return 'a DEVELOPING referee making good progress';
  return 'a ROOKIE referee building their foundation';
}
