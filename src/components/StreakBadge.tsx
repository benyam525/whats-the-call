'use client';

import { UserStreak } from '@/data/types';

interface StreakBadgeProps {
  streak: UserStreak | null;
  loading: boolean;
}

export function StreakBadge({ streak, loading }: StreakBadgeProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg px-4 py-2 shadow-sm animate-pulse">
        <div className="h-5 w-24 bg-gray-200 rounded"></div>
      </div>
    );
  }

  if (!streak) return null;

  const accuracy = streak.totalAnswered > 0
    ? Math.round((streak.totalCorrect / streak.totalAnswered) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
      <div className="flex items-center gap-4">
        {/* Streak */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">
            {streak.currentStreak > 0 ? '🔥' : '📊'}
          </span>
          <div>
            <div className="text-sm text-gray-500">Streak</div>
            <div className="font-bold text-nba-blue">
              {streak.currentStreak} {streak.currentStreak === 1 ? 'day' : 'days'}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-10 w-px bg-gray-200"></div>

        {/* Accuracy */}
        <div>
          <div className="text-sm text-gray-500">Accuracy</div>
          <div className="font-bold text-nba-blue">{accuracy}%</div>
        </div>

        {/* Best Streak */}
        {streak.longestStreak > streak.currentStreak && (
          <>
            <div className="h-10 w-px bg-gray-200"></div>
            <div>
              <div className="text-sm text-gray-500">Best</div>
              <div className="font-bold text-whistle-gold">{streak.longestStreak} days</div>
            </div>
          </>
        )}
      </div>

      {/* Motivational message */}
      {streak.currentStreak >= 3 && (
        <div className="mt-2 text-sm text-green-600 font-medium">
          🎯 {getStreakMessage(streak.currentStreak)}
        </div>
      )}
    </div>
  );
}

function getStreakMessage(streak: number): string {
  if (streak >= 30) return "Hall of Fame material! 30+ day streak!";
  if (streak >= 14) return "Two weeks strong! You're a rules expert!";
  if (streak >= 7) return "A full week! You're on fire!";
  if (streak >= 5) return "5 days in a row! Keep it going!";
  if (streak >= 3) return "3 day streak! Building momentum!";
  return "";
}
