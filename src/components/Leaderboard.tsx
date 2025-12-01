'use client';

import { useState, useEffect } from 'react';

interface LeaderboardEntry {
  visitorId: string;
  displayName: string;
  score?: number;
  currentStreak?: number;
  longestStreak?: number;
  accuracy?: number;
  totalCorrect?: number;
}

interface LeaderboardProps {
  currentVisitorId: string | null;
}

type LeaderboardTab = 'sudden-death' | 'daily-5' | 'general';

export function Leaderboard({ currentVisitorId }: LeaderboardProps) {
  const [activeTab, setActiveTab] = useState<LeaderboardTab>('sudden-death');
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchLeaderboard() {
      setLoading(true);
      try {
        const endpoint =
          activeTab === 'sudden-death'
            ? '/api/leaderboard/sudden-death'
            : activeTab === 'daily-5'
            ? '/api/leaderboard/daily-5'
            : '/api/leaderboard?limit=10';

        const res = await fetch(endpoint);
        const data = await res.json();
        if (data.success || data.leaderboard) {
          setLeaderboard(data.leaderboard || []);
        }
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
        setLeaderboard([]);
      } finally {
        setLoading(false);
      }
    }

    if (isOpen) {
      fetchLeaderboard();
    }
  }, [isOpen, activeTab]);

  const tabs = [
    { id: 'sudden-death' as const, label: '💀 Sudden Death', metric: 'Best Score' },
    { id: 'daily-5' as const, label: '📅 Daily 5', metric: 'Longest Streak' },
    { id: 'general' as const, label: '🎬 Film Room', metric: 'Streak' },
  ];

  const getMetricValue = (entry: LeaderboardEntry): string | number => {
    if (activeTab === 'sudden-death') {
      return entry.score || 0;
    }
    if (activeTab === 'daily-5') {
      return `${entry.longestStreak || 0} days`;
    }
    return entry.currentStreak || 0;
  };

  const getMetricLabel = (): string => {
    return tabs.find(t => t.id === activeTab)?.metric || 'Score';
  };

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
          <div className="absolute right-0 top-12 w-96 bg-white rounded-xl shadow-xl z-50 overflow-hidden">
            <div className="bg-nba-blue px-4 py-3 flex items-center justify-between">
              <h3 className="font-bold text-white flex items-center gap-2">
                <span>🏆</span>
                Leaderboard
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-nba-blue border-b-2 border-nba-blue bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
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
                  <p>No one on the board yet.</p>
                  <p className="text-sm mt-1">
                    {activeTab === 'sudden-death'
                      ? 'Score 10+ to qualify!'
                      : activeTab === 'daily-5'
                      ? 'Complete 3+ days to qualify!'
                      : 'Answer 5+ questions to qualify!'}
                  </p>
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
                          {entry.accuracy !== undefined && (
                            <div className="text-xs text-gray-500">
                              {entry.accuracy}% accuracy
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-nba-blue flex items-center gap-1">
                            {activeTab === 'daily-5' && entry.longestStreak && entry.longestStreak > 0 && <span>🔥</span>}
                            {activeTab === 'general' && entry.currentStreak && entry.currentStreak > 0 && <span>🔥</span>}
                            {getMetricValue(entry)}
                          </div>
                          <div className="text-xs text-gray-500">{getMetricLabel()}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-gray-100 text-center text-xs text-gray-500">
                {activeTab === 'sudden-death'
                  ? 'Score 10+ to appear on the leaderboard'
                  : activeTab === 'daily-5'
                  ? 'Complete 3+ consecutive days to qualify'
                  : 'Answer 5+ questions to appear on the leaderboard'}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
