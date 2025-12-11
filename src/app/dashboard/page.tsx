'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { createClient } from '@/lib/supabase/client';

// ============================================================================
// DATA LOADING - Pull from localStorage or use defaults
// ============================================================================

interface UserStats {
  name: string;
  streak: number;
  totalQuestions: number;
  avgAccuracy: number;
  refReadiness: number;
  gameIQ: number;
  execution: number;
  commitment: number;
  readinessChange: number;
  pressureAccuracy: number;
  calmAccuracy: number;
  pressureGap: number;
  bestSuddenDeath: number;
  daily5Score: number;
  avgResponseTime: number;
  percentile: number;
  tier: string;
}

interface CategoryMasteryItem {
  name: string;
  accuracy: number;
  reps: number;
  trend: string;
  change: number;
  confidence: string;
}

const DEFAULT_USER: UserStats = {
  name: 'Ref',
  streak: 0,
  totalQuestions: 0,
  avgAccuracy: 0,
  refReadiness: 0,
  gameIQ: 0,
  execution: 0,
  commitment: 0,
  readinessChange: 0,
  pressureAccuracy: 0,
  calmAccuracy: 0,
  pressureGap: 0,
  bestSuddenDeath: 0,
  daily5Score: 0,
  avgResponseTime: 0,
  percentile: 50,
  tier: 'Rookie',
};

const COMPOSURE_CURVE = [
  { range: '1-5', accuracy: 0 },
  { range: '6-10', accuracy: 0 },
  { range: '11-15', accuracy: 0 },
  { range: '16-20', accuracy: 0 },
  { range: '21+', accuracy: 0 },
];

const WEEKLY_ACTIVITY = [
  { day: 'Mon', questions: 0, accuracy: 0 },
  { day: 'Tue', questions: 0, accuracy: 0 },
  { day: 'Wed', questions: 0, accuracy: 0 },
  { day: 'Thu', questions: 0, accuracy: 0 },
  { day: 'Fri', questions: 0, accuracy: 0 },
  { day: 'Sat', questions: 0, accuracy: 0 },
  { day: 'Sun', questions: 0, accuracy: 0 },
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

function ReadinessRing({ score, size = 180 }: { score: number; size?: number }) {
  const getColor = () => {
    if (score >= 85) return { start: '#10B981', end: '#059669' };
    if (score >= 70) return { start: '#3B82F6', end: '#2563EB' };
    if (score >= 55) return { start: '#F59E0B', end: '#D97706' };
    return { start: '#6B7280', end: '#4B5563' };
  };

  const colors = getColor();
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

function MiniRing({ score, label, color }: { score: number; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center">
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
    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${styles[level] || styles.developing}`}>
      {labels[level] || 'New'}
    </span>
  );
}

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

export default function DashboardPage() {
  const [timeView, setTimeView] = useState<'day' | 'week' | 'season'>('week');
  const [user, setUser] = useState<UserStats>(DEFAULT_USER);
  const [categoryMastery, setCategoryMastery] = useState<CategoryMasteryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const loadData = async () => {
      // Try to get user profile from Supabase
      const { data: { user: authUser } } = await supabase.auth.getUser();

      if (authUser) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('first_name')
          .eq('id', authUser.id)
          .single();

        if (profile?.first_name) {
          setUser(prev => ({ ...prev, name: profile.first_name }));
        }
      }

      // Load stats from localStorage
      try {
        const stats = localStorage.getItem('rulevision-stats');
        const daily5 = localStorage.getItem('rulevision-daily-5');
        const suddenDeath = localStorage.getItem('rulevision-sudden-death-best');
        const masteryData = localStorage.getItem('rulevision-category-mastery');

        let totalQuestions = 0;
        let totalCorrect = 0;

        if (stats) {
          const parsed = JSON.parse(stats);
          totalQuestions = parsed.totalAnswered || 0;
          totalCorrect = parsed.totalCorrect || 0;
        }

        const avgAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
        const refReadiness = avgAccuracy;

        setUser(prev => ({
          ...prev,
          totalQuestions,
          avgAccuracy,
          refReadiness,
          gameIQ: avgAccuracy,
          execution: Math.max(0, avgAccuracy - 5),
          commitment: daily5 ? Math.min(100, avgAccuracy + 5) : avgAccuracy,
          streak: daily5 ? JSON.parse(daily5).currentStreak || 0 : 0,
          bestSuddenDeath: suddenDeath ? parseInt(suddenDeath) || 0 : 0,
          tier: avgAccuracy >= 85 ? 'Elite' : avgAccuracy >= 70 ? 'Veteran' : avgAccuracy >= 50 ? 'Developing' : 'Rookie',
        }));

        // Load category mastery
        if (masteryData) {
          const parsed = JSON.parse(masteryData);
          const categories: CategoryMasteryItem[] = [];

          Object.entries(parsed.parents || {}).forEach(([key, value]: [string, unknown]) => {
            const v = value as { correct: number; total: number };
            if (v.total > 0) {
              const accuracy = Math.round((v.correct / v.total) * 100);
              categories.push({
                name: key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                accuracy,
                reps: v.total,
                trend: 'stable',
                change: 0,
                confidence: accuracy >= 85 ? 'elite' : accuracy >= 70 ? 'reliable' : accuracy >= 55 ? 'developing' : 'needs_work',
              });
            }
          });

          setCategoryMastery(categories.sort((a, b) => b.accuracy - a.accuracy));
        }
      } catch (e) {
        console.error('Error loading dashboard data:', e);
      }

      setLoading(false);
    };

    loadData();
  }, [supabase]);

  const topStrengths = categoryMastery.slice(0, 3);
  const blindSpots = categoryMastery.slice(-3).reverse();
  const hasData = user.totalQuestions > 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-gray-500">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Welcome back, {user.name}</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              {hasData ? `${user.totalQuestions.toLocaleString()} questions answered` : 'Start training to track your progress'}
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
                <ReadinessRing score={user.refReadiness} size={180} />
              </div>
              <div className="sm:hidden">
                <ReadinessRing score={user.refReadiness} size={140} />
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className={`px-2 py-1 text-xs font-semibold rounded ${
                  user.tier === 'Elite' ? 'bg-emerald-100 text-emerald-700' :
                  user.tier === 'Veteran' ? 'bg-blue-100 text-blue-700' :
                  user.tier === 'Developing' ? 'bg-amber-100 text-amber-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {user.tier}
                </span>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium mb-3 sm:mb-4 text-center lg:text-left">
                Performance Pillars
              </div>
              <div className="flex justify-center lg:justify-start gap-4 sm:gap-8">
                <MiniRing score={user.gameIQ} label="Game IQ" color="#3B82F6" />
                <MiniRing score={user.execution} label="Execution" color="#8B5CF6" />
                <MiniRing score={user.commitment} label="Commitment" color="#10B981" />
              </div>

              {/* Quick Tags */}
              {hasData && topStrengths.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-6 justify-center lg:justify-start">
                  <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs sm:text-sm">
                    <span className="font-medium">Strength:</span> {topStrengths[0]?.name}
                  </span>
                  {blindSpots.length > 0 && (
                    <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs sm:text-sm">
                      <span className="font-medium">Focus:</span> {blindSpots[0]?.name}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Today's Quick Stats */}
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-2 sm:gap-3 w-full lg:w-auto">
              <div className="bg-gray-50 rounded-xl p-2 sm:p-3 text-center">
                <div className="text-lg sm:text-2xl font-bold text-gray-900 flex items-center justify-center gap-1">
                  🔥 {user.streak}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase">Streak</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-2 sm:p-3 text-center">
                <div className="text-lg sm:text-2xl font-bold text-gray-900">{user.totalQuestions.toLocaleString()}</div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase">Questions</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-2 sm:p-3 text-center">
                <div className="text-lg sm:text-2xl font-bold text-gray-900">{user.avgAccuracy}%</div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase">Accuracy</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-2 sm:p-3 text-center">
                <div className="text-lg sm:text-2xl font-bold text-gray-900">{user.bestSuddenDeath}</div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase">Best Run</div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Two Column Layout */}
        {hasData && categoryMastery.length >= 3 && (
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
            {/* Strengths & Weaknesses */}
            <GlassCard className="p-4 sm:p-6">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-5">Strengths & Focus Areas</h2>

              {/* Strengths */}
              <div className="mb-4 sm:mb-5">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">Top Strengths</span>
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
              {blindSpots.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">Focus Areas</span>
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
              )}
            </GlassCard>

            {/* Category Mastery */}
            <GlassCard className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <h2 className="text-base sm:text-lg font-bold text-gray-900">Category Mastery</h2>
                <span className="text-xs sm:text-sm text-gray-500">{categoryMastery.length} categories</span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {categoryMastery.slice(0, 8).map((cat) => (
                  <div key={cat.name} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm sm:text-lg font-bold text-gray-900">{cat.accuracy}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-xs sm:text-sm truncate">{cat.name}</div>
                      <div className="flex items-center gap-1 sm:gap-2 mt-0.5">
                        <span className="text-[10px] sm:text-xs text-gray-500">{cat.reps} reps</span>
                        <ConfidenceBadge level={cat.confidence} />
                      </div>
                    </div>
                    <TrendIndicator trend={cat.trend} change={cat.change} />
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}

        {/* Empty State */}
        {!hasData && (
          <GlassCard className="p-8 text-center mb-6">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Start Your Training Journey</h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Answer questions in any training mode to start building your Ref Readiness score and unlock detailed analytics.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/film-room" className="px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
                Start with Film Room
              </Link>
              <Link href="/daily-5" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Try Daily 5
              </Link>
            </div>
          </GlassCard>
        )}

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
