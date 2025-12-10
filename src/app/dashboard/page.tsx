'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useVisitorId } from '@/hooks/useVisitorId';
import {
  HeroStrip,
  GameIQPillar,
  DecisionExecutionPillar,
  CommitmentPillar,
  StrengthsWeaknesses,
  FocusPlanCard,
  TimeViewSelector,
  DayView,
  WeekView,
  SeasonView,
  CategoryMastery,
} from '@/components/dashboard';
import { casebookQuestions } from '@/data/casebook';
import { LockedFeature } from '@/components/LockedFeature';
import { DashboardData, TimeView } from '@/data/dashboard-types';
import { getDummyDashboardData } from '@/lib/dummy-dashboard-data';
import { SubscriptionTier, canAccess } from '@/lib/subscription';

function DashboardContent() {
  const searchParams = useSearchParams();
  const isDemo = searchParams.get('demo') === 'true';
  const tierParam = searchParams.get('tier') as SubscriptionTier | null;
  const visitorId = useVisitorId();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [timeView, setTimeView] = useState<TimeView>('week');
  const [loading, setLoading] = useState(true);

  // For now, tier can be set via URL param for testing, defaults to 'elite' in demo mode
  // In production, this would come from user auth/session
  const userTier: SubscriptionTier = tierParam || (isDemo ? 'elite' : 'free');

  useEffect(() => {
    async function fetchDashboard() {
      // If demo mode, use dummy data
      if (isDemo) {
        setDashboardData(getDummyDashboardData('demo_user'));
        setLoading(false);
        return;
      }

      if (!visitorId) return;

      try {
        setLoading(true);
        const response = await fetch(`/api/dashboard?visitorId=${visitorId}`);
        const result = await response.json();

        if (result.success && result.data) {
          setDashboardData(result.data);
        } else {
          // If no data, show dummy data as preview
          setDashboardData(getDummyDashboardData(visitorId));
        }
      } catch (err) {
        console.error('Error fetching dashboard:', err);
        // On error, fall back to dummy data
        setDashboardData(getDummyDashboardData(visitorId || 'demo_user'));
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, [visitorId, isDemo]);

  if (loading) {
    return <DashboardSkeleton />;
  }

  // If we still don't have data after loading, show skeleton
  if (!dashboardData) {
    return <DashboardSkeleton />;
  }

  const tierLabel = userTier === 'free' ? 'Free' : userTier === 'pro' ? 'Pro' : 'Elite';
  const tierColor = userTier === 'free' ? 'bg-gray-100 text-gray-800' :
                    userTier === 'pro' ? 'bg-orange-100 text-orange-800' :
                    'bg-purple-100 text-purple-800';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-brand-border sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-lg md:text-xl font-bold text-brand-black">RuleVision</span>
              </Link>
              <span className="text-brand-gray hidden sm:inline">/</span>
              <span className="text-brand-gray hidden sm:inline">Dashboard</span>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              {isDemo && (
                <span className="px-2 md:px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                  Demo
                </span>
              )}
              <span className={`px-2 md:px-3 py-1 ${tierColor} text-xs font-medium rounded-full hidden sm:inline`}>
                {tierLabel}
              </span>
              <TimeViewSelector currentView={timeView} onViewChange={setTimeView} />
              <Link
                href="/"
                className="px-3 md:px-4 py-2 bg-brand-black text-white rounded-lg text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <span className="hidden sm:inline">Start Training</span>
                <span className="sm:hidden">Train</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Questions Count Banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm font-medium">
            <span className="font-bold">{casebookQuestions.length}</span> official NBA casebook questions now available in RuleVision
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Strip - shows basic for free, full for pro+ */}
        <HeroStrip data={dashboardData.heroStrip} userTier={userTier} />

        {/* Three Pillars - blurred for free tier */}
        <LockedFeature
          feature="THREE_PILLARS"
          userTier={userTier}
          blurMode={true}
          className="mb-6"
        >
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            <GameIQPillar data={dashboardData.gameIQ} userTier={userTier} />
            <DecisionExecutionPillar data={dashboardData.decisionExecution} userTier={userTier} />
            <CommitmentPillar data={dashboardData.commitment} userTier={userTier} />
          </div>
        </LockedFeature>

        {/* Strengths/Weaknesses + Focus Plan */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <LockedFeature
            feature="STRENGTHS_WEAKNESSES"
            userTier={userTier}
            blurMode={true}
          >
            <StrengthsWeaknesses data={dashboardData.strengthsWeaknesses} />
          </LockedFeature>

          <LockedFeature
            feature="FOCUS_PLAN"
            userTier={userTier}
            blurMode={userTier === 'pro'}
            lockMessage="Get a personalized training plan based on your weaknesses → Upgrade to Elite"
          >
            <FocusPlanCard data={dashboardData.focusPlan} />
          </LockedFeature>
        </div>

        {/* Category Mastery - expandable parent/sub-category structure */}
        <div className="mb-6">
          <CategoryMastery />
        </div>

        {/* Time View */}
        <div className="mb-6">
          {timeView === 'day' && dashboardData.dayView && (
            <DayView data={dashboardData.dayView} />
          )}
          {timeView === 'week' && dashboardData.weekView && (
            <WeekView data={dashboardData.weekView} />
          )}
          {timeView === 'season' && dashboardData.seasonView && (
            <SeasonView data={dashboardData.seasonView} />
          )}
        </div>

        {/* Upgrade CTA for free users */}
        {userTier === 'free' && (
          <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl p-8 text-white text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Unlock Your Full Potential</h3>
            <p className="text-white/80 mb-4">
              Get unlimited questions, all 29 rule categories, and the full analytics dashboard.
            </p>
            <Link
              href="/marketing#pricing"
              className="inline-block px-6 py-3 bg-white text-brand-black rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Upgrade to Pro
            </Link>
          </div>
        )}

        {/* Printable Report CTA for pro users */}
        {userTier === 'pro' && (
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center mb-6">
            <p className="text-sm text-purple-800">
              Need to share progress with your assignor?
              <Link href="/marketing#pricing" className="font-semibold ml-1 underline">
                Upgrade to Elite for printable PDF reports →
              </Link>
            </p>
          </div>
        )}

        {/* Footer CTA */}
        <div className="text-center py-8">
          <p className="text-brand-gray mb-4">Ready to improve your Ref Readiness?</p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/film-room"
              className="px-6 py-3 bg-brand-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Film Room
            </Link>
            <Link
              href="/sudden-death"
              className="px-6 py-3 border border-brand-black text-brand-black rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Sudden Death
            </Link>
            <Link
              href="/daily-5"
              className="px-6 py-3 border border-brand-black text-brand-black rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Daily 5
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="h-8 bg-gray-200 rounded w-48 animate-pulse" />
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl border border-brand-border p-6 mb-6 animate-pulse">
          <div className="flex items-center gap-8">
            <div className="w-60 h-60 bg-gray-200 rounded-full" />
            <div className="flex-1 space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/3" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="flex gap-4">
                <div className="h-20 bg-gray-200 rounded flex-1" />
                <div className="h-20 bg-gray-200 rounded flex-1" />
                <div className="h-20 bg-gray-200 rounded flex-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl border border-brand-border p-6 h-96 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded w-4/5" />
                <div className="h-4 bg-gray-200 rounded w-3/5" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

interface TodayViewProps {
  summary: {
    date: string;
    questionsAnswered: number;
    questionsCorrect: number;
    accuracy: number;
    timeSpentSeconds: number;
    streakDays: number;
    pressureAccuracy: number;
    calmAccuracy: number;
    bestSuddenDeathStreak: number;
    daily5Score: number | null;
    strengthCategory: string | null;
    weaknessCategory: string | null;
  };
}

function TodayView({ summary }: TodayViewProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  if (summary.questionsAnswered === 0) {
    return (
      <div className="bg-white rounded-2xl border border-brand-border p-8 text-center">
        <div className="text-4xl mb-4">🌅</div>
        <h2 className="text-xl font-bold text-brand-black mb-2">
          {formatDate(summary.date)}
        </h2>
        <p className="text-brand-gray mb-6">
          You haven't trained yet today. Start a session to build your streak!
        </p>
        <Link
          href="/film-room"
          className="inline-block px-6 py-3 bg-brand-black text-white rounded-lg font-medium"
        >
          Start Training
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6">
      <h2 className="text-lg font-bold text-brand-black mb-6">
        {formatDate(summary.date)}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <TodayStat label="Questions" value={summary.questionsAnswered.toString()} />
        <TodayStat label="Accuracy" value={`${summary.accuracy}%`} />
        <TodayStat label="Streak" value={`${summary.streakDays} days`} icon="🔥" />
        <TodayStat
          label="Daily 5"
          value={summary.daily5Score !== null ? `${summary.daily5Score}/5` : 'Not done'}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-brand-card rounded-lg">
          <h3 className="text-sm font-medium text-brand-gray mb-2">Performance Split</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="text-xs text-brand-gray mb-1">Calm</div>
              <div className="text-lg font-bold text-brand-black">{summary.calmAccuracy}%</div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-brand-gray mb-1">Pressure</div>
              <div className="text-lg font-bold text-brand-black">{summary.pressureAccuracy}%</div>
            </div>
          </div>
        </div>

        {summary.bestSuddenDeathStreak > 0 && (
          <div className="p-4 bg-brand-card rounded-lg">
            <h3 className="text-sm font-medium text-brand-gray mb-2">Best Sudden Death</h3>
            <div className="text-lg font-bold text-brand-black">
              {summary.bestSuddenDeathStreak} in a row
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface TodayStatProps {
  label: string;
  value: string;
  icon?: string;
}

function TodayStat({ label, value, icon }: TodayStatProps) {
  return (
    <div className="text-center p-3 bg-brand-card rounded-lg">
      <div className="text-xs text-brand-gray uppercase tracking-wide mb-1">{label}</div>
      <div className="text-xl font-bold text-brand-black flex items-center justify-center gap-1">
        {icon && <span>{icon}</span>}
        {value}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent />
    </Suspense>
  );
}
