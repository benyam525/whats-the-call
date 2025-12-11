'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { casebookQuestions, getParentCategories } from '@/data/casebook';
import { ParentCategory, PARENT_CATEGORY_NAMES } from '@/data/types';

// Glass card component with enhanced styling
function GlassCard({ children, className = '' }: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`
      relative overflow-hidden rounded-2xl
      bg-white/80 backdrop-blur-lg
      border border-gray-200/50
      shadow-sm
      ${className}
    `}>
      {children}
    </div>
  );
}

// Circular progress ring with gradient
function ProgressRing({
  value,
  size = 140,
  strokeWidth = 10,
}: {
  value: number;
  size?: number;
  strokeWidth?: number;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  // Color based on value
  const getColor = () => {
    if (value >= 80) return '#10B981';
    if (value >= 60) return '#3B82F6';
    if (value >= 40) return '#F59E0B';
    return '#6B7280';
  };

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={getColor()} stopOpacity="0.8" />
            <stop offset="100%" stopColor={getColor()} />
          </linearGradient>
        </defs>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-gray-900">{value}</span>
        <span className="text-sm text-gray-500 -mt-1">%</span>
      </div>
    </div>
  );
}

// Stat card with icon
function StatCard({ icon, value, label, sublabel, color = 'gray' }: {
  icon: string;
  value: string | number;
  label: string;
  sublabel?: string;
  color?: 'gray' | 'green' | 'blue' | 'amber' | 'red';
}) {
  const colorClasses = {
    gray: 'bg-gray-50 border-gray-100',
    green: 'bg-emerald-50 border-emerald-100',
    blue: 'bg-blue-50 border-blue-100',
    amber: 'bg-amber-50 border-amber-100',
    red: 'bg-red-50 border-red-100',
  };

  return (
    <div className={`rounded-xl p-4 border ${colorClasses[color]}`}>
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
          {sublabel && <div className="text-xs text-gray-400 mt-0.5">{sublabel}</div>}
        </div>
      </div>
    </div>
  );
}

// Training mode card
function TrainingModeCard({ icon, title, description, href, color, stats }: {
  icon: string;
  title: string;
  description: string;
  href: string;
  color: string;
  stats?: string;
}) {
  return (
    <Link href={href} className="block group">
      <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-5 transition-all duration-200 hover:shadow-lg hover:border-gray-300 hover:-translate-y-0.5">
        {/* Color accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 ${color}`} />

        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl ${color} bg-opacity-10 flex items-center justify-center text-2xl flex-shrink-0`}>
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">{title}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{description}</p>
            {stats && (
              <p className="text-xs text-gray-400 mt-2">{stats}</p>
            )}
          </div>
          <svg className="w-5 h-5 text-gray-300 group-hover:text-gray-400 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// Category pill
function CategoryPill({ name, mastery, questions, color, href }: {
  name: string;
  mastery: number;
  questions: number;
  color: string;
  href: string;
}) {
  return (
    <Link href={href} className="block group">
      <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all">
        <div className="w-2 h-8 rounded-full" style={{ backgroundColor: color }} />
        <div className="flex-1 min-w-0">
          <div className="font-medium text-gray-900 text-sm truncate">{name}</div>
          <div className="text-xs text-gray-400">{questions} questions</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-gray-900">{mastery}%</div>
          <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${mastery}%`, backgroundColor: color }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

const CATEGORY_COLORS = [
  '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
  '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1',
  '#14B8A6', '#A855F7', '#F43F5E', '#22C55E'
];

const STORAGE_KEY = 'rulevision-category-mastery';

// Demo mode flag - set to true for partner presentations
const DEMO_MODE = true;

// Demo data for impressive partner presentations
const DEMO_MASTERY_DATA = {
  parents: {
    'out_of_bounds': { correct: 42, total: 48 },
    'violations': { correct: 67, total: 78 },
    'fouls': { correct: 89, total: 102 },
    'timing': { correct: 34, total: 41 },
    'scoring': { correct: 28, total: 31 },
    'jump_ball': { correct: 19, total: 22 },
    'throw_in': { correct: 45, total: 52 },
    'substitutions': { correct: 23, total: 27 },
    'timeouts': { correct: 31, total: 35 },
    'basket_interference': { correct: 17, total: 20 },
    'traveling': { correct: 56, total: 64 },
    'dribbling': { correct: 38, total: 44 },
  },
  subs: {}
};

const DEMO_STREAK = 12;
const DEMO_TOTAL_ANSWERED = 847;
const DEMO_BEST_SUDDEN_DEATH = 23;

export default function DashboardPage() {
  const [masteryData, setMasteryData] = useState<{
    parents: Record<string, { correct: number; total: number }>;
    subs: Record<string, { correct: number; total: number }>;
  }>({ parents: {}, subs: {} });

  const [streakDays, setStreakDays] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [bestSuddenDeath, setBestSuddenDeath] = useState(0);

  // Load data on mount
  useEffect(() => {
    // Use demo data for presentations
    if (DEMO_MODE) {
      setMasteryData(DEMO_MASTERY_DATA);
      setStreakDays(DEMO_STREAK);
      setTotalAnswered(DEMO_TOTAL_ANSWERED);
      setBestSuddenDeath(DEMO_BEST_SUDDEN_DEATH);
      return;
    }

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

    // Get best sudden death
    try {
      const sd = localStorage.getItem('rulevision-sudden-death-best');
      if (sd) {
        setBestSuddenDeath(parseInt(sd) || 0);
      }
    } catch (e) {
      console.error('Error loading sudden death:', e);
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

  // Sort categories for display
  const sortedCategories = useMemo(() => {
    return [...categoryData].sort((a, b) => {
      // Started categories first, then by mastery
      if (a.stats.total > 0 && b.stats.total === 0) return -1;
      if (a.stats.total === 0 && b.stats.total > 0) return 1;
      return b.mastery - a.mastery;
    });
  }, [categoryData]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            {DEMO_MODE ? 'Welcome back, Marcus' : 'Welcome back'}
          </h1>
          <p className="text-gray-500 mt-1">
            {DEMO_MODE
              ? "You're on a 12-day streak! Keep it up."
              : 'Track your progress and continue training'
            }
          </p>
        </div>

        {/* Top Row: Progress + Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Progress Ring Card */}
          <GlassCard className="p-6 flex flex-col items-center justify-center">
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
              Overall Accuracy
            </div>
            <ProgressRing value={overallStats.mastery} />
            <div className="mt-4 text-center">
              <div className="text-sm text-gray-600">
                {overallStats.totalCorrect} / {overallStats.totalAttempted} correct
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {overallStats.categoriesStarted} of {overallStats.totalCategories} categories
              </div>
            </div>
          </GlassCard>

          {/* Quick Stats Grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            <StatCard
              icon="🔥"
              value={streakDays}
              label="Day Streak"
              sublabel={streakDays > 0 ? "Keep it going!" : "Start today"}
              color={streakDays > 0 ? "amber" : "gray"}
            />
            <StatCard
              icon="📝"
              value={totalAnswered || overallStats.totalAttempted}
              label="Questions"
              sublabel="Total answered"
              color="blue"
            />
            <StatCard
              icon="🎯"
              value={`${overallStats.mastery}%`}
              label="Accuracy"
              sublabel="All-time"
              color={overallStats.mastery >= 70 ? "green" : "gray"}
            />
            <StatCard
              icon="💀"
              value={bestSuddenDeath}
              label="Best Run"
              sublabel="Sudden Death"
              color={bestSuddenDeath >= 10 ? "red" : "gray"}
            />
          </div>
        </div>

        {/* Training Modes */}
        <GlassCard className="p-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold text-gray-900">Training Modes</h2>
            <span className="text-xs text-gray-400">{casebookQuestions.length} questions</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <TrainingModeCard
              icon="🎬"
              title="Film Room"
              description="Practice at your own pace with instant feedback"
              href="/film-room"
              color="bg-blue-500"
              stats="Unlimited practice"
            />
            <TrainingModeCard
              icon="💀"
              title="Sudden Death"
              description="Test your instincts under pressure"
              href="/sudden-death"
              color="bg-red-500"
              stats="10 sec per question"
            />
            <TrainingModeCard
              icon="📅"
              title="Daily 5"
              description="5 new questions every day"
              href="/daily-5"
              color="bg-emerald-500"
              stats="Build your streak"
            />
            <TrainingModeCard
              icon="🎯"
              title="Category Drill"
              description="Focus on specific rule categories"
              href="/play/category-drill"
              color="bg-purple-500"
              stats={`${overallStats.totalCategories} categories`}
            />
          </div>
        </GlassCard>

        {/* Category Progress */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Category Progress</h2>
              <p className="text-sm text-gray-500 mt-0.5">
                {overallStats.categoriesStarted > 0
                  ? `${overallStats.categoriesStarted} categories started`
                  : 'Start training to track progress'
                }
              </p>
            </div>
            <Link
              href="/play/category-drill"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-2">
            {sortedCategories.slice(0, 8).map(cat => (
              <CategoryPill
                key={cat.parent}
                name={cat.name}
                mastery={cat.mastery}
                questions={cat.questions}
                color={cat.color}
                href={`/play/category-drill?category=${cat.parent}`}
              />
            ))}
          </div>

          {categoryData.length > 8 && (
            <Link
              href="/play/category-drill"
              className="mt-4 block text-center py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-t border-gray-100"
            >
              View all {categoryData.length} categories
            </Link>
          )}
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
