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
    { id: 'sudden-death' as const, label: 'Sudden Death', icon: '💀', metric: 'Best Score' },
    { id: 'daily-5' as const, label: 'Daily 5', icon: '📅', metric: 'Longest Streak' },
    { id: 'general' as const, label: 'Film Room', icon: '🎬', metric: 'Streak' },
  ];

  const getMetricValue = (entry: LeaderboardEntry): string | number => {
    if (activeTab === 'sudden-death') {
      return entry.score || 0;
    }
    if (activeTab === 'daily-5') {
      return `${entry.longestStreak || 0}d`;
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
        className="flex items-center gap-2 bg-rv-slate/80 rounded-lg px-4 py-2.5 border border-white/10 hover:border-white/20 hover:bg-rv-steel/80 transition-all"
      >
        <span className="text-lg">🏆</span>
        <span className="font-medium text-white text-sm">Rankings</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="absolute right-0 top-12 w-96 bg-rv-slate rounded-xl border border-white/10 shadow-2xl z-50 overflow-hidden">
            {/* Header */}
            <div className="bg-rv-navy px-4 py-3 flex items-center justify-between border-b border-white/5">
              <h3 className="font-bold text-white flex items-center gap-2">
                <span>🏆</span>
                Leaderboard
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-rv-silver/60 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/5 bg-rv-navy/50">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-3 py-2.5 text-xs font-medium transition-all ${
                    activeTab === tab.id
                      ? 'text-white border-b-2 border-rv-accent bg-rv-accent/10'
                      : 'text-rv-silver/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="mr-1">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-4 max-h-96 overflow-y-auto scrollbar-hide">
              {loading ? (
                <div className="space-y-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="animate-pulse flex items-center gap-3">
                      <div className="w-6 h-6 bg-rv-steel rounded-full"></div>
                      <div className="flex-1 h-4 bg-rv-steel rounded"></div>
                    </div>
                  ))}
                </div>
              ) : leaderboard.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-3xl mb-2">📋</p>
                  <p className="text-rv-silver/60">No one on the board yet.</p>
                  <p className="text-sm mt-1 text-rv-silver/40">
                    {activeTab === 'sudden-death'
                      ? 'Score 10+ to qualify'
                      : activeTab === 'daily-5'
                      ? '3+ day streak to qualify'
                      : '5+ questions to qualify'}
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  {leaderboard.map((entry, index) => {
                    const isCurrentUser = entry.visitorId === currentVisitorId;
                    const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : null;

                    return (
                      <div
                        key={entry.visitorId}
                        className={`flex items-center gap-3 p-2.5 rounded-lg transition-colors ${
                          isCurrentUser
                            ? 'bg-rv-accent/10 border border-rv-accent/20'
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <span className="w-6 text-center font-bold text-rv-silver/60 text-sm">
                          {medal || (index + 1)}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-white text-sm truncate">
                            {entry.displayName}
                            {isCurrentUser && (
                              <span className="text-xs text-rv-accent ml-1.5">(you)</span>
                            )}
                          </div>
                          {entry.accuracy !== undefined && (
                            <div className="text-xs text-rv-silver/50">
                              {entry.accuracy}% accuracy
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-rv-accent-bright flex items-center gap-1 text-sm">
                            {activeTab === 'daily-5' && entry.longestStreak && entry.longestStreak > 0 && (
                              <span className="text-rv-gold">🔥</span>
                            )}
                            {activeTab === 'general' && entry.currentStreak && entry.currentStreak > 0 && (
                              <span className="text-rv-gold">🔥</span>
                            )}
                            {getMetricValue(entry)}
                          </div>
                          <div className="text-xs text-rv-silver/40">{getMetricLabel()}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-white/5 text-center text-xs text-rv-silver/40">
                {activeTab === 'sudden-death'
                  ? 'Score 10+ to appear on the leaderboard'
                  : activeTab === 'daily-5'
                  ? '3+ consecutive days to qualify'
                  : '5+ questions to appear on the leaderboard'}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
