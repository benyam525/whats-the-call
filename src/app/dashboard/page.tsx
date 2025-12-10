'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { casebookQuestions, getParentCategories } from '@/data/casebook';
import { ParentCategory, PARENT_CATEGORY_NAMES } from '@/data/types';

// Glass card component
function GlassCard({ children, className = '', hover = false }: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`
      relative overflow-hidden rounded-3xl
      bg-white/70 backdrop-blur-xl
      border border-white/20
      shadow-[0_8px_32px_rgba(0,0,0,0.08)]
      ${hover ? 'hover:bg-white/80 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300' : ''}
      ${className}
    `}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Circular progress ring
function ProgressRing({
  value,
  size = 120,
  strokeWidth = 8,
  color = '#10B981',
  label,
  sublabel
}: {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
  sublabel?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-gray-100"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-gray-900">{value}%</span>
        {label && <span className="text-xs text-gray-500 mt-1">{label}</span>}
        {sublabel && <span className="text-[10px] text-gray-400">{sublabel}</span>}
      </div>
    </div>
  );
}

// Stat pill component
function StatPill({ icon, value, label, trend }: {
  icon: string;
  value: string | number;
  label: string;
  trend?: { value: number; positive: boolean };
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white/50 rounded-2xl border border-white/30">
      <span className="text-2xl">{icon}</span>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">{value}</span>
          {trend && (
            <span className={`text-xs font-medium ${trend.positive ? 'text-green-600' : 'text-red-500'}`}>
              {trend.positive ? '+' : ''}{trend.value}%
            </span>
          )}
        </div>
        <span className="text-xs text-gray-500">{label}</span>
      </div>
    </div>
  );
}

// Mini category card
function CategoryCard({ name, mastery, questions, color }: {
  name: string;
  mastery: number;
  questions: number;
  color: string;
}) {
  return (
    <div className="group p-4 bg-white/40 hover:bg-white/60 rounded-2xl border border-white/20 transition-all duration-200 cursor-pointer">
      <div className="flex items-center justify-between mb-3">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-xs text-gray-400">{questions}Q</span>
      </div>
      <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-1">{name}</h3>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${mastery}%`, backgroundColor: color }}
          />
        </div>
        <span className="text-xs font-medium text-gray-600">{mastery}%</span>
      </div>
    </div>
  );
}

// Quick action button
function QuickAction({ icon, label, href, accent = false }: {
  icon: string;
  label: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 px-5 py-4 rounded-2xl font-medium transition-all duration-200
        ${accent
          ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 shadow-lg shadow-gray-900/20'
          : 'bg-white/50 hover:bg-white/70 text-gray-900 border border-white/30'}
      `}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}

const CATEGORY_COLORS = [
  '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
  '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1',
  '#14B8A6', '#A855F7', '#F43F5E', '#22C55E'
];

const STORAGE_KEY = 'rulevision-category-mastery';

export default function DashboardPage() {
  const [masteryData, setMasteryData] = useState<{
    parents: Record<string, { correct: number; total: number }>;
    subs: Record<string, { correct: number; total: number }>;
  }>({ parents: {}, subs: {} });

  const [streakDays, setStreakDays] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  // Load data on mount
  useEffect(() => {
    // Load mastery data
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setMasteryData(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading mastery data:', e);
    }

    // Load streak data
    try {
      const dailyData = localStorage.getItem('rulevision-daily-5');
      if (dailyData) {
        const parsed = JSON.parse(dailyData);
        setStreakDays(parsed.currentStreak || 0);
      }
    } catch (e) {
      console.error('Error loading streak data:', e);
    }

    // Calculate total answered
    try {
      const stats = localStorage.getItem('rulevision-stats');
      if (stats) {
        const parsed = JSON.parse(stats);
        setTotalAnswered(parsed.totalAnswered || 0);
      }
    } catch (e) {
      console.error('Error loading stats:', e);
    }
  }, []);

  // Build category data
  const categoryData = useMemo(() => {
    const parentCategories = getParentCategories();

    return parentCategories.map((parent, idx) => {
      const parentQuestions = casebookQuestions.filter(q => q.parent_category === parent);
      const stats = masteryData.parents[parent] || { correct: 0, total: 0 };
      const mastery = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

      return {
        parent,
        name: PARENT_CATEGORY_NAMES[parent] || parent,
        questions: parentQuestions.length,
        mastery,
        stats,
        color: CATEGORY_COLORS[idx % CATEGORY_COLORS.length]
      };
    });
  }, [masteryData]);

  // Overall stats
  const overallStats = useMemo(() => {
    let totalCorrect = 0;
    let totalAttempted = 0;

    Object.values(masteryData.parents).forEach(stats => {
      totalCorrect += stats.correct;
      totalAttempted += stats.total;
    });

    const mastery = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
    const categoriesStarted = categoryData.filter(c => c.stats.total > 0).length;

    return {
      mastery,
      totalCorrect,
      totalAttempted,
      categoriesStarted,
      totalCategories: categoryData.length
    };
  }, [masteryData, categoryData]);

  // Top and weak categories
  const topCategories = useMemo(() => {
    return [...categoryData]
      .filter(c => c.stats.total >= 3)
      .sort((a, b) => b.mastery - a.mastery)
      .slice(0, 3);
  }, [categoryData]);

  const weakCategories = useMemo(() => {
    return [...categoryData]
      .filter(c => c.stats.total >= 3)
      .sort((a, b) => a.mastery - b.mastery)
      .slice(0, 3);
  }, [categoryData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <Header />

      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-500">Track your progress and master the rules</p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Readiness Score */}
          <GlassCard className="p-8 lg:col-span-1">
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
                Overall Mastery
              </span>
              <ProgressRing
                value={overallStats.mastery}
                size={160}
                strokeWidth={12}
                color={overallStats.mastery >= 70 ? '#10B981' : overallStats.mastery >= 50 ? '#F59E0B' : '#3B82F6'}
              />
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {overallStats.totalCorrect} of {overallStats.totalAttempted} correct
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {overallStats.categoriesStarted} of {overallStats.totalCategories} categories started
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Quick Stats */}
          <GlassCard className="p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Stats</h2>
            <div className="grid grid-cols-2 gap-3">
              <StatPill
                icon="🔥"
                value={streakDays}
                label="Day Streak"
              />
              <StatPill
                icon="📝"
                value={totalAnswered || overallStats.totalAttempted}
                label="Questions Answered"
              />
              <StatPill
                icon="🎯"
                value={`${overallStats.mastery}%`}
                label="Accuracy"
              />
              <StatPill
                icon="📚"
                value={overallStats.categoriesStarted}
                label="Categories Explored"
              />
            </div>

            {/* Strengths & Weaknesses */}
            {(topCategories.length > 0 || weakCategories.length > 0) && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  {topCategories.length > 0 && (
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Strongest
                      </h3>
                      <div className="space-y-1">
                        {topCategories.slice(0, 2).map(cat => (
                          <div key={cat.parent} className="flex items-center gap-2">
                            <span className="text-green-500 text-sm">●</span>
                            <span className="text-sm text-gray-700 truncate flex-1">{cat.name}</span>
                            <span className="text-xs font-medium text-green-600">{cat.mastery}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {weakCategories.length > 0 && (
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Focus Areas
                      </h3>
                      <div className="space-y-1">
                        {weakCategories.slice(0, 2).map(cat => (
                          <div key={cat.parent} className="flex items-center gap-2">
                            <span className="text-amber-500 text-sm">●</span>
                            <span className="text-sm text-gray-700 truncate flex-1">{cat.name}</span>
                            <span className="text-xs font-medium text-amber-600">{cat.mastery}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </GlassCard>
        </div>

        {/* Quick Actions */}
        <GlassCard className="p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Start Training</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <QuickAction icon="🎬" label="Film Room" href="/film-room" accent />
            <QuickAction icon="💀" label="Sudden Death" href="/sudden-death" />
            <QuickAction icon="📅" label="Daily 5" href="/daily-5" />
            <QuickAction icon="🎯" label="Category Drill" href="/play/category-drill" />
          </div>
        </GlassCard>

        {/* Category Mastery Grid */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Category Mastery</h2>
              <p className="text-sm text-gray-500 mt-1">
                {casebookQuestions.length} questions across {categoryData.length} categories
              </p>
            </div>
            <Link
              href="/play/category-drill"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categoryData.map(cat => (
              <Link key={cat.parent} href={`/play/category-drill?category=${cat.parent}`}>
                <CategoryCard
                  name={cat.name}
                  mastery={cat.mastery}
                  questions={cat.questions}
                  color={cat.color}
                />
              </Link>
            ))}
          </div>
        </GlassCard>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            RuleVision · See the Call Before It Happens
          </p>
        </div>
      </main>
    </div>
  );
}
