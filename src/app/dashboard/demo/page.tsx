'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';

// ============================================================================
// DEMO DATA - Impressive stats for partner presentations
// ============================================================================

const DEMO_USER = {
  name: 'Marcus',
  streak: 23,
  totalQuestions: 3835,
  avgAccuracy: 89,
  refReadiness: 89,
  gameIQ: 89,
  execution: 85,
  commitment: 94,
  readinessChange: +3,
  pressureAccuracy: 84,
  calmAccuracy: 94,
  pressureGap: 10,
  bestSuddenDeath: 18,
  daily5Score: 5,
  avgResponseTime: 4.2,
  percentile: 78,
  tier: 'Veteran',
};

const CATEGORY_MASTERY = [
  { name: 'Blocking Fouls', accuracy: 96, reps: 245, trend: 'up', change: 3, confidence: 'elite' },
  { name: 'Out of Bounds', accuracy: 95, reps: 267, trend: 'stable', change: 1, confidence: 'elite' },
  { name: 'Traveling', accuracy: 94, reps: 312, trend: 'up', change: 2, confidence: 'elite' },
  { name: 'Charging Fouls', accuracy: 93, reps: 198, trend: 'stable', change: 0, confidence: 'reliable' },
  { name: 'Backcourt Violations', accuracy: 91, reps: 156, trend: 'up', change: 4, confidence: 'reliable' },
  { name: 'Offensive Fouls', accuracy: 91, reps: 178, trend: 'stable', change: 1, confidence: 'reliable' },
  { name: 'Shot Clock', accuracy: 88, reps: 134, trend: 'up', change: 5, confidence: 'reliable' },
  { name: 'Goaltending', accuracy: 87, reps: 89, trend: 'up', change: 3, confidence: 'developing' },
  { name: 'Technical Fouls', accuracy: 85, reps: 67, trend: 'stable', change: 0, confidence: 'developing' },
  { name: 'Defensive 3-Seconds', accuracy: 84, reps: 76, trend: 'up', change: 6, confidence: 'developing' },
  { name: 'Flagrant Fouls', accuracy: 82, reps: 45, trend: 'stable', change: 0, confidence: 'needs_work' },
  { name: 'Clear-Path', accuracy: 78, reps: 112, trend: 'up', change: 4, confidence: 'needs_work' },
  { name: "Coach's Challenge", accuracy: 72, reps: 98, trend: 'up', change: 6, confidence: 'blind_spot' },
];

const COMPOSURE_CURVE = [
  { range: '1-5', accuracy: 96 },
  { range: '6-10', accuracy: 92 },
  { range: '11-15', accuracy: 86 },
  { range: '16-20', accuracy: 80 },
  { range: '21+', accuracy: 75 },
];

const FOCUS_PLAN = {
  progress: 45,
  daysRemaining: 9,
  goals: [
    { label: "Raise Coach's Challenge", from: 72, to: 82, progress: 45 },
    { label: 'Close pressure gap', from: 10, to: 6, progress: 35, unit: 'pts' },
    { label: 'Clear-Path mastery', from: 78, to: 85, progress: 55 },
  ],
  actions: [
    { action: "20 questions/day in Coach's Challenge", frequency: 'Daily', icon: '🎯' },
    { action: 'Sudden Death marathon (aim for 20+)', frequency: '4×/week', icon: '💀' },
    { action: 'Category Drill: Clear-Path scenarios', frequency: '3×/week', icon: '🎬' },
  ],
};

const WEEKLY_ACTIVITY = [
  { day: 'Mon', questions: 45, accuracy: 87 },
  { day: 'Tue', questions: 38, accuracy: 92 },
  { day: 'Wed', questions: 42, accuracy: 88 },
  { day: 'Thu', questions: 35, accuracy: 91 },
  { day: 'Fri', questions: 48, accuracy: 85 },
  { day: 'Sat', questions: 0, accuracy: 0 },
  { day: 'Sun', questions: 52, accuracy: 90 },
];

// ============================================================================
// COMPONENTS
// ============================================================================

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-200 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

// Large readiness ring with animated gradient - responsive
function ReadinessRing({ score, size = 180 }: { score: number; size?: number }) {
  const getColor = () => {
    if (score >= 85) return { start: '#10B981', end: '#059669' };
    if (score >= 70) return { start: '#3B82F6', end: '#2563EB' };
    if (score >= 55) return { start: '#F59E0B', end: '#D97706' };
    return { start: '#EF4444', end: '#DC2626' };
  };

  const colors = getColor();
  // Using viewBox for responsive sizing
  const viewBoxSize = 180;
  const strokeWidth = 12;
  const radius = (viewBoxSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} className="w-full h-full transform -rotate-90">
        <defs>
          <linearGradient id="readinessGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.start} />
            <stop offset="100%" stopColor={colors.end} />
          </linearGradient>
        </defs>
        <circle
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          r={radius}
          fill="none"
          stroke="#F3F4F6"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          r={radius}
          fill="none"
          stroke="url(#readinessGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl sm:text-5xl font-bold text-gray-900">{score}</span>
        <span className="text-xs sm:text-sm text-gray-500 font-medium">Ref Readiness</span>
      </div>
    </div>
  );
}

// Mini ring for pillars - responsive
function MiniRing({ score, label, color }: { score: number; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* Mobile size */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
        <svg viewBox="0 0 80 80" className="w-full h-full transform -rotate-90">
          <circle cx="40" cy="40" r="34" fill="none" stroke="#F3F4F6" strokeWidth="6" />
          <circle
            cx="40" cy="40" r="34" fill="none" stroke={color}
            strokeWidth="6" strokeLinecap="round"
            strokeDasharray={213.6}
            strokeDashoffset={213.6 - (score / 100) * 213.6}
            className="transition-all duration-700"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-base sm:text-xl font-bold text-gray-900">{score}</span>
        </div>
      </div>
      <span className="text-[10px] sm:text-xs text-gray-500 mt-1 font-medium">{label}</span>
    </div>
  );
}

// Confidence badge
function ConfidenceBadge({ level }: { level: string }) {
  const styles: Record<string, string> = {
    elite: 'bg-emerald-100 text-emerald-700',
    reliable: 'bg-blue-100 text-blue-700',
    developing: 'bg-amber-100 text-amber-700',
    needs_work: 'bg-orange-100 text-orange-700',
    blind_spot: 'bg-red-100 text-red-700',
  };

  const labels: Record<string, string> = {
    elite: 'Elite',
    reliable: 'Reliable',
    developing: 'Developing',
    needs_work: 'Needs Work',
    blind_spot: 'Blind Spot',
  };

  return (
    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${styles[level]}`}>
      {labels[level]}
    </span>
  );
}

// Trend indicator
function TrendIndicator({ trend, change }: { trend: string; change: number }) {
  if (change === 0) return <span className="text-xs text-gray-400">—</span>;

  const isUp = trend === 'up';
  return (
    <span className={`text-xs font-medium ${isUp ? 'text-emerald-600' : 'text-red-500'}`}>
      {isUp ? '↑' : '↓'} {Math.abs(change)}%
    </span>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function DemoDashboardPage() {
  const [timeView, setTimeView] = useState<'day' | 'week' | 'season'>('week');

  const topStrengths = CATEGORY_MASTERY.slice(0, 3);
  const blindSpots = CATEGORY_MASTERY.slice(-3).reverse();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Welcome back, {DEMO_USER.name}</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              {DEMO_USER.readinessChange > 0 ? '+' : ''}{DEMO_USER.readinessChange} points vs yesterday
            </p>
          </div>
          <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200 p-1 self-start sm:self-auto">
            {(['day', 'week', 'season'] as const).map((view) => (
              <button
                key={view}
                onClick={() => setTimeView(view)}
                className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                  timeView === view ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Section: Readiness Score + Pillars */}
        <GlassCard className="p-4 sm:p-6 mb-6">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
            {/* Main Readiness Ring */}
            <div className="flex flex-col items-center">
              <div className="hidden sm:block">
                <ReadinessRing score={DEMO_USER.refReadiness} size={180} />
              </div>
              <div className="sm:hidden">
                <ReadinessRing score={DEMO_USER.refReadiness} size={140} />
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">
                  {DEMO_USER.tier}
                </span>
                <span className="text-sm text-gray-500">Top {100 - DEMO_USER.percentile}%</span>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium mb-3 sm:mb-4 text-center lg:text-left">
                Performance Pillars
              </div>
              <div className="flex justify-center lg:justify-start gap-4 sm:gap-8">
                <MiniRing score={DEMO_USER.gameIQ} label="Game IQ" color="#3B82F6" />
                <MiniRing score={DEMO_USER.execution} label="Execution" color="#8B5CF6" />
                <MiniRing score={DEMO_USER.commitment} label="Commitment" color="#10B981" />
              </div>

              {/* Quick Tags */}
              <div className="flex flex-wrap gap-2 mt-4 sm:mt-6 justify-center lg:justify-start">
                <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs sm:text-sm">
                  <span className="font-medium">Strength:</span> Blocking Fouls
                </span>
                <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs sm:text-sm">
                  <span className="font-medium">Weak Spot:</span> Coach&apos;s Challenge
                </span>
              </div>
            </div>

            {/* Today's Quick Stats */}
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-2 sm:gap-3 w-full lg:w-auto">
              <div className="bg-gray-50 rounded-xl p-2 sm:p-3 text-center">
                <div className="text-lg sm:text-2xl font-bold text-gray-900 flex items-center justify-center gap-1">
                  🔥 {DEMO_USER.streak}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase">Streak</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-2 sm:p-3 text-center">
                <div className="text-lg sm:text-2xl font-bold text-gray-900">{DEMO_USER.totalQuestions.toLocaleString()}</div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase">Questions</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-2 sm:p-3 text-center">
                <div className="text-lg sm:text-2xl font-bold text-gray-900">{DEMO_USER.daily5Score}/5</div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase">Daily 5</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-2 sm:p-3 text-center">
                <div className="text-lg sm:text-2xl font-bold text-gray-900">{DEMO_USER.bestSuddenDeath}</div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase">Best Run</div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {/* Strengths & Weaknesses */}
          <GlassCard className="p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-5">Strengths & Blind Spots</h2>

            {/* Strengths */}
            <div className="mb-4 sm:mb-5">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">Top 3 Strengths</span>
              </div>
              <div className="space-y-2">
                {topStrengths.map((cat, i) => (
                  <div key={cat.name} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-emerald-50 rounded-xl">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] sm:text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900 text-xs sm:text-sm truncate">{cat.name}</span>
                        <span className="font-bold text-emerald-700 text-xs sm:text-sm ml-2">{cat.accuracy}%</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1 sm:h-1.5 bg-emerald-200 rounded-full">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${cat.accuracy}%` }} />
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500 hidden sm:inline">{cat.reps} reps</span>
                      </div>
                    </div>
                    <TrendIndicator trend={cat.trend} change={cat.change} />
                  </div>
                ))}
              </div>
            </div>

            {/* Blind Spots */}
            <div>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">Top 3 Blind Spots</span>
              </div>
              <div className="space-y-2">
                {blindSpots.map((cat, i) => (
                  <div key={cat.name} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-amber-50 rounded-xl">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] sm:text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900 text-xs sm:text-sm truncate">{cat.name}</span>
                        <span className="font-bold text-amber-700 text-xs sm:text-sm ml-2">{cat.accuracy}%</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1 sm:h-1.5 bg-amber-200 rounded-full">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: `${cat.accuracy}%` }} />
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500 hidden sm:inline">{cat.reps} reps</span>
                      </div>
                    </div>
                    <TrendIndicator trend={cat.trend} change={cat.change} />
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Pressure Performance */}
          <GlassCard className="p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-5">Decision Under Pressure</h2>

            {/* Calm vs Pressure */}
            <div className="mb-5 sm:mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm text-gray-600">Calm (Film Room)</span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">{DEMO_USER.calmAccuracy}%</span>
              </div>
              <div className="h-2 sm:h-3 bg-gray-100 rounded-full mb-3 sm:mb-4">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${DEMO_USER.calmAccuracy}%` }} />
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm text-gray-600">Under Pressure</span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">{DEMO_USER.pressureAccuracy}%</span>
              </div>
              <div className="h-2 sm:h-3 bg-gray-100 rounded-full">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: `${DEMO_USER.pressureAccuracy}%` }} />
              </div>

              <div className="mt-2 sm:mt-3 flex items-center gap-2 text-amber-600 text-xs sm:text-sm">
                <span>⚠️</span>
                <span>{DEMO_USER.pressureGap} point drop under pressure</span>
              </div>
            </div>

            {/* Composure Curve */}
            <div>
              <div className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3">
                Composure Curve
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">Accuracy by streak length</div>
              <div className="flex items-end gap-1 sm:gap-2 h-24 sm:h-32">
                {COMPOSURE_CURVE.map((point) => {
                  const height = (point.accuracy / 100) * 100;
                  const color = point.accuracy >= 85 ? 'bg-emerald-500' :
                               point.accuracy >= 75 ? 'bg-emerald-400' :
                               point.accuracy >= 65 ? 'bg-amber-400' : 'bg-orange-400';
                  return (
                    <div key={point.range} className="flex-1 flex flex-col items-center">
                      <span className="text-[10px] sm:text-xs font-medium text-gray-700 mb-1">{point.accuracy}%</span>
                      <div className={`w-full ${color} rounded-t-lg transition-all`} style={{ height: `${height}%` }} />
                      <span className="text-[10px] sm:text-xs text-gray-500 mt-1 truncate w-full text-center">Q{point.range}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500">
                📉 Slight drop after Q15, stays above 75%
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Category Mastery Grid */}
        <GlassCard className="p-4 sm:p-6 mb-6">
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">Category Mastery</h2>
            <span className="text-xs sm:text-sm text-gray-500">{CATEGORY_MASTERY.length} categories</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {CATEGORY_MASTERY.map((cat) => (
              <div key={cat.name} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm sm:text-lg font-bold text-gray-900">{cat.accuracy}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 text-xs sm:text-sm truncate">{cat.name}</div>
                  <div className="flex items-center gap-1 sm:gap-2 mt-0.5">
                    <span className="text-[10px] sm:text-xs text-gray-500">{cat.reps}</span>
                    <ConfidenceBadge level={cat.confidence} />
                  </div>
                </div>
                <TrendIndicator trend={cat.trend} change={cat.change} />
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Focus Plan + Weekly Activity */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {/* 14-Day Focus Plan */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900">14-Day Focus Plan</h2>
                <p className="text-xs sm:text-sm text-gray-600">{FOCUS_PLAN.daysRemaining} days remaining</p>
              </div>
              <div className="text-right">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">{FOCUS_PLAN.progress}%</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Progress</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 sm:h-2 bg-white/50 rounded-full mb-4 sm:mb-5">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${FOCUS_PLAN.progress}%` }}
              />
            </div>

            {/* Goals */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
              {FOCUS_PLAN.goals.map((goal) => (
                <div key={goal.label} className="bg-white rounded-xl p-2 sm:p-3">
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span className="text-xs sm:text-sm font-medium text-gray-900">{goal.label}</span>
                    <span className="text-[10px] sm:text-xs text-gray-500">
                      {goal.from}{goal.unit || '%'} → {goal.to}{goal.unit || '%'}
                    </span>
                  </div>
                  <div className="h-1 sm:h-1.5 bg-gray-100 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-1.5 sm:space-y-2">
              {FOCUS_PLAN.actions.map((action) => (
                <div key={action.action} className="flex items-center gap-2 sm:gap-3 p-2 bg-white/60 rounded-lg">
                  <span className="text-base sm:text-lg">{action.icon}</span>
                  <span className="flex-1 text-xs sm:text-sm text-gray-700 truncate">{action.action}</span>
                  <span className="text-[10px] sm:text-xs font-medium text-gray-500 bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex-shrink-0">
                    {action.frequency}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Activity */}
          <GlassCard className="p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-5">This Week</h2>

            {/* Activity Chart */}
            <div className="flex items-end gap-1 sm:gap-2 h-28 sm:h-40 mb-3 sm:mb-4">
              {WEEKLY_ACTIVITY.map((day) => {
                const maxQuestions = Math.max(...WEEKLY_ACTIVITY.map(d => d.questions));
                const height = day.questions > 0 ? (day.questions / maxQuestions) * 100 : 5;
                const color = day.questions === 0 ? 'bg-gray-200' :
                             day.accuracy >= 90 ? 'bg-emerald-500' :
                             day.accuracy >= 85 ? 'bg-blue-500' : 'bg-amber-500';

                return (
                  <div key={day.day} className="flex-1 flex flex-col items-center">
                    {day.questions > 0 && (
                      <span className="text-[10px] sm:text-xs font-medium text-gray-600 mb-1">{day.accuracy}%</span>
                    )}
                    <div className={`w-full ${color} rounded-t-lg transition-all relative group`} style={{ height: `${height}%`, minHeight: '8px' }}>
                      {day.questions > 0 && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap hidden sm:block">
                          {day.questions} questions
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2">{day.day}</span>
                  </div>
                );
              })}
            </div>

            {/* Week Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-100">
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-gray-900">248</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-gray-900">89%</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-gray-900">6/7</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Days</div>
              </div>
            </div>

            {/* Insights */}
            <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-700 bg-emerald-50 rounded-lg p-1.5 sm:p-2">
                <span>✓</span> <span className="truncate">6/7 days active - excellent consistency!</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-700 bg-blue-50 rounded-lg p-1.5 sm:p-2">
                <span>📈</span> <span className="truncate">Coach&apos;s Challenge up 8% this week</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Footer CTA */}
        <div className="text-center py-6 sm:py-8">
          <p className="text-sm sm:text-base text-gray-500 mb-3 sm:mb-4">Ready to improve your Ref Readiness?</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Link href="/film-room" className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white rounded-xl text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors">
              Film Room
            </Link>
            <Link href="/sudden-death" className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-xl text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors">
              Sudden Death
            </Link>
            <Link href="/daily-5" className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-xl text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors">
              Daily 5
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-6 sm:pb-8">
          <p className="text-xs sm:text-sm text-gray-400">
            RuleVision · See the Call Before It Happens
          </p>
        </div>
      </main>
    </div>
  );
}
