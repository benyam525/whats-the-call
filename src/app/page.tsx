'use client';

import { useState, useEffect } from 'react';
import { ModeCard, modeConfig } from '@/components/ModeCard';
import { Leaderboard } from '@/components/Leaderboard';
import { useVisitorId } from '@/hooks/useVisitorId';
import { casebookQuestions, getCategories } from '@/data/casebook';

interface UserStats {
  filmRoom: { totalAnswered: number; accuracy: number } | null;
  daily5: { currentStreak: number; longestStreak: number } | null;
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

  // Fetch user stats
  useEffect(() => {
    if (!visitorId) return;

    const fetchStats = async () => {
      try {
        // Fetch general streak (for Film Room stats)
        const streakRes = await fetch(`/api/streak?visitorId=${visitorId}`);
        const streakData = await streakRes.json();

        if (streakData.streak) {
          const { totalCorrect, totalAnswered } = streakData.streak;
          setStats(prev => ({
            ...prev,
            filmRoom: {
              totalAnswered,
              accuracy: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0,
            },
          }));
        }

        // TODO: Fetch Daily 5 streak
        // TODO: Fetch Sudden Death best score
        // TODO: Fetch Category mastery

      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [visitorId]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-nba-blue text-white py-8 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">What&apos;s the Call?</h1>
              <p className="text-blue-200 mt-2 text-lg">NBA Rules Training Simulator</p>
            </div>
            <Leaderboard currentVisitorId={visitorId} />
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Training Mode</h2>
          <p className="text-gray-600">
            {casebookQuestions.length} scenarios across {categories.length} categories
          </p>
        </div>

        {/* Mode Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              stats.daily5
                ? { label: 'Current Streak', value: `${stats.daily5.currentStreak} days` }
                : undefined
            }
            highlight={true}
          />

          {/* Sudden Death */}
          <ModeCard
            mode="sudden-death"
            {...modeConfig['sudden-death']}
            stat={
              stats.suddenDeath
                ? { label: 'Best Score', value: stats.suddenDeath.bestScore }
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

        {/* Quick Stats Summary */}
        {!loading && stats.filmRoom && stats.filmRoom.totalAnswered > 0 && (
          <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Your Progress</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-nba-blue">
                  {stats.filmRoom.totalAnswered}
                </div>
                <div className="text-sm text-gray-500">Questions Answered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">
                  {stats.filmRoom.accuracy}%
                </div>
                <div className="text-sm text-gray-500">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">
                  {stats.daily5?.currentStreak || 0}
                </div>
                <div className="text-sm text-gray-500">Daily Streak</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">
                  {stats.suddenDeath?.bestScore || 0}
                </div>
                <div className="text-sm text-gray-500">Best Run</div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Questions sourced from the NBA Official Case Book</p>
          <p className="mt-1">Train like a pro. Make the right call.</p>
        </footer>
      </div>
    </main>
  );
}
