'use client';

import { useState, useEffect } from 'react';
import { LeaderboardEntry } from '@/data/types';

interface LeaderboardProps {
  currentVisitorId: string | null;
}

export function Leaderboard({ currentVisitorId }: LeaderboardProps) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const res = await fetch('/api/leaderboard?limit=10');
        const data = await res.json();
        if (data.success) {
          setLeaderboard(data.leaderboard);
        }
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      } finally {
        setLoading(false);
      }
    }

    if (isOpen) {
      fetchLeaderboard();
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
      >
        <span className="text-xl">🏆</span>
        <span className="font-medium text-gray-700">Leaderboard</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-xl z-50 overflow-hidden">
            <div className="bg-nba-blue px-4 py-3 flex items-center justify-between">
              <h3 className="font-bold text-white flex items-center gap-2">
                <span>🏆</span>
                Top Officials
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-4">
              {loading ? (
                <div className="space-y-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="animate-pulse flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      <div className="flex-1 h-4 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              ) : leaderboard.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-3xl mb-2">📋</p>
                  <p>No officials on the board yet.</p>
                  <p className="text-sm mt-1">Answer 5+ questions to qualify!</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {leaderboard.map((entry, index) => {
                    const isCurrentUser = entry.visitorId === currentVisitorId;
                    const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : null;

                    return (
                      <div
                        key={entry.visitorId}
                        className={`flex items-center gap-3 p-2 rounded-lg ${
                          isCurrentUser ? 'bg-blue-50 border border-blue-200' : ''
                        }`}
                      >
                        <span className="w-6 text-center font-bold text-gray-400">
                          {medal || (index + 1)}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-800 truncate">
                            {entry.displayName}
                            {isCurrentUser && (
                              <span className="text-xs text-blue-600 ml-1">(you)</span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500">
                            {entry.accuracy}% accuracy
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-nba-blue flex items-center gap-1">
                            {entry.currentStreak > 0 && <span>🔥</span>}
                            {entry.currentStreak}
                          </div>
                          <div className="text-xs text-gray-500">streak</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-gray-100 text-center text-xs text-gray-500">
                Answer 5+ questions to appear on the leaderboard
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
