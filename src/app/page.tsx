'use client';

import { useState, useEffect } from 'react';
import { ModeCard, modeConfig } from '@/components/ModeCard';
import { Leaderboard } from '@/components/Leaderboard';
import { useVisitorId } from '@/hooks/useVisitorId';
import { casebookQuestions, getCategories } from '@/data/casebook';

interface UserStats {
  filmRoom: { totalAnswered: number; accuracy: number; streak: number } | null;
  daily5: { currentStreak: number; longestStreak: number; completedToday: boolean } | null;
  suddenDeath: { bestScore: number } | null;
  categoryMastery: { totalMastered: number; totalCategories: number } | null;
}

export default function Home() {
  const visitorId = useVisitorId();
  const [stats, setStats] = useState<UserStats>({
    filmRoom: null,
    daily5: null,
    suddenDeath: null,
    categoryMastery: null,
  });
  const [loading, setLoading] = useState(true);

  const categories = getCategories();

  // Fetch all user stats
  useEffect(() => {
    if (!visitorId) return;

    const fetchAllStats = async () => {
      try {
        // Fetch all stats in parallel
        const [streakRes, daily5Res, suddenDeathRes, categoryRes] = await Promise.all([
          fetch(`/api/streak?visitorId=${visitorId}`),
          fetch(`/api/daily-5/status?visitorId=${visitorId}`),
          fetch(`/api/sudden-death/best?visitorId=${visitorId}`),
          fetch(`/api/category/progress?visitorId=${visitorId}`),
        ]);

        const [streakData, daily5Data, suddenDeathData, categoryData] = await Promise.all([
          streakRes.json(),
          daily5Res.json(),
          suddenDeathRes.json(),
          categoryRes.json(),
        ]);

        // Process Film Room stats
        if (streakData.streak) {
          const { totalCorrect, totalAnswered, currentStreak } = streakData.streak;
          setStats(prev => ({
            ...prev,
            filmRoom: {
              totalAnswered,
              accuracy: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0,
              streak: currentStreak || 0,
            },
          }));
        }

        // Process Daily 5 stats
        if (daily5Data) {
          setStats(prev => ({
            ...prev,
            daily5: {
              currentStreak: daily5Data.currentStreak || 0,
              longestStreak: daily5Data.longestStreak || 0,
              completedToday: daily5Data.completedToday || false,
            },
          }));
        }

        // Process Sudden Death stats
        if (suddenDeathData.bestScore !== undefined) {
          setStats(prev => ({
            ...prev,
            suddenDeath: { bestScore: suddenDeathData.bestScore },
          }));
        }

        // Process Category stats
        if (categoryData.stats) {
          const totalCategories = categories.length;
          const mastered = categoryData.stats.filter(
            (s: { correct: number; total: number }) =>
              s.total >= 5 && s.correct / s.total >= 0.9
          ).length;
          setStats(prev => ({
            ...prev,
            categoryMastery: { totalMastered: mastered, totalCategories },
          }));
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllStats();
  }, [visitorId, categories.length]);

  const hasAnyStats =
    (stats.filmRoom && stats.filmRoom.totalAnswered > 0) ||
    (stats.daily5 && stats.daily5.currentStreak > 0) ||
    (stats.suddenDeath && stats.suddenDeath.bestScore > 0);

  return (
    <main className="min-h-screen bg-rv-navy">
      {/* Header */}
      <header className="header-gradient py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">
                RuleVision
              </h1>
              <p className="text-rv-silver/70 text-sm mt-1">
                NBA Officials Training System
              </p>
            </div>
            <Leaderboard currentVisitorId={visitorId} />
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Stats Summary - Shows when user has any stats */}
        {!loading && hasAnyStats && (
          <div className="mb-6 p-4 rounded-xl bg-rv-slate/50 border border-white/5">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">
                  {stats.filmRoom?.totalAnswered || 0}
                </div>
                <div className="text-xs text-rv-silver/60 uppercase tracking-wider">Calls</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rv-success">
                  {stats.filmRoom?.accuracy || 0}%
                </div>
                <div className="text-xs text-rv-silver/60 uppercase tracking-wider">Accuracy</div>
              </div>
              <div className={stats.daily5?.currentStreak && stats.daily5.currentStreak > 0 ? 'streak-active' : ''}>
                <div className="text-2xl font-bold text-rv-gold">
                  {stats.daily5?.currentStreak || 0}
                </div>
                <div className="text-xs text-rv-silver/60 uppercase tracking-wider">Streak</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rv-danger">
                  {stats.suddenDeath?.bestScore || 0}
                </div>
                <div className="text-xs text-rv-silver/60 uppercase tracking-wider">Best Run</div>
              </div>
            </div>
          </div>
        )}

        {/* Mode description */}
        <div className="mb-5">
          <p className="text-rv-silver/60 text-sm">
            {casebookQuestions.length} scenarios • {categories.length} categories
          </p>
        </div>

        {/* Mode Cards Grid - Tighter spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Film Room */}
          <ModeCard
            mode="film-room"
            {...modeConfig['film-room']}
            stat={
              stats.filmRoom && stats.filmRoom.totalAnswered > 0
                ? { label: 'Accuracy', value: `${stats.filmRoom.accuracy}%` }
                : undefined
            }
          />

          {/* Daily 5 */}
          <ModeCard
            mode="daily-5"
            {...modeConfig['daily-5']}
            stat={
              stats.daily5 && stats.daily5.currentStreak > 0
                ? { label: 'Streak', value: `${stats.daily5.currentStreak} days` }
                : stats.daily5?.completedToday
                ? { label: 'Status', value: 'Done today' }
                : undefined
            }
            highlight={!stats.daily5?.completedToday}
          />

          {/* Sudden Death */}
          <ModeCard
            mode="sudden-death"
            {...modeConfig['sudden-death']}
            stat={
              stats.suddenDeath && stats.suddenDeath.bestScore > 0
                ? { label: 'Best', value: stats.suddenDeath.bestScore }
                : undefined
            }
          />

          {/* Category Drill */}
          <ModeCard
            mode="category-drill"
            {...modeConfig['category-drill']}
            stat={
              stats.categoryMastery
                ? {
                    label: 'Mastered',
                    value: `${stats.categoryMastery.totalMastered}/${stats.categoryMastery.totalCategories}`,
                  }
                : undefined
            }
          />
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center">
          <p className="text-rv-silver/40 text-xs">
            Questions sourced from the NBA Official Case Book
          </p>
        </footer>
      </div>
    </main>
  );
}
