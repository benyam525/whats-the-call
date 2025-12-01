'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LeaderboardEntry } from '@/data/types';
import { useVisitorId } from '@/hooks/useVisitorId';

type TabType = 'sudden-death' | 'daily-5' | 'category-masters';

export default function LeaderboardPage() {
  const visitorId = useVisitorId();
  const [activeTab, setActiveTab] = useState<TabType>('sudden-death');
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      setLoading(true);
      try {
        const res = await fetch(`/api/leaderboard?limit=50&type=${activeTab}`);
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

    fetchLeaderboard();
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/rulevisionlogo_new.png"
              alt="RuleVision"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-brand-black font-semibold text-lg tracking-tight">RuleVision</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/about" className="text-brand-gray hover:text-brand-black transition-colors">
              About
            </Link>
            <Link href="/leaderboard" className="text-brand-black font-medium">
              Leaderboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-brand-black tracking-tighter mb-8">
          Leaderboard
        </h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-brand-border">
          <button
            onClick={() => setActiveTab('sudden-death')}
            className={`px-4 py-3 font-medium transition-colors border-b-2 ${
              activeTab === 'sudden-death'
                ? 'border-brand-black text-brand-black'
                : 'border-transparent text-brand-gray hover:text-brand-black'
            }`}
          >
            Sudden Death
          </button>
          <button
            onClick={() => setActiveTab('daily-5')}
            className={`px-4 py-3 font-medium transition-colors border-b-2 ${
              activeTab === 'daily-5'
                ? 'border-brand-black text-brand-black'
                : 'border-transparent text-brand-gray hover:text-brand-black'
            }`}
          >
            Daily 5
          </button>
          <button
            onClick={() => setActiveTab('category-masters')}
            className={`px-4 py-3 font-medium transition-colors border-b-2 ${
              activeTab === 'category-masters'
                ? 'border-brand-black text-brand-black'
                : 'border-transparent text-brand-gray hover:text-brand-black'
            }`}
          >
            Category Masters
          </button>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white border border-brand-border rounded-xl overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-black mx-auto"></div>
            </div>
          ) : leaderboard.length === 0 ? (
            <div className="p-12 text-center text-brand-gray">
              <p className="text-4xl mb-4">📋</p>
              <p>No officials on the board yet.</p>
              <p className="text-sm mt-2">Be the first to make your mark!</p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-brand-card border-b border-brand-border">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-brand-gray uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-brand-gray uppercase tracking-wider">
                    Official
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-brand-gray uppercase tracking-wider">
                    {activeTab === 'sudden-death' ? 'Best Streak' : activeTab === 'daily-5' ? 'Streak' : 'Mastery'}
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-brand-gray uppercase tracking-wider">
                    Accuracy
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {leaderboard.map((entry, index) => {
                  const isCurrentUser = entry.visitorId === visitorId;
                  const isTopThree = index < 3;

                  return (
                    <tr
                      key={entry.visitorId}
                      className={`${
                        isCurrentUser ? 'bg-blue-50' : ''
                      } ${
                        isTopThree ? 'font-medium' : ''
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`${isTopThree ? 'text-2xl' : 'text-brand-gray'}`}>
                          {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-brand-black">
                          {entry.displayName}
                          {isCurrentUser && (
                            <span className="text-xs text-blue-600 ml-2">(you)</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className="text-brand-black font-bold">
                          {entry.currentStreak > 0 && '🔥 '}
                          {entry.currentStreak}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-brand-gray">
                        {entry.accuracy}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-brand-gray">
          <p>Answer 5+ questions to appear on the leaderboard</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between text-sm text-brand-gray">
            <p>© 2024 RuleVision</p>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-brand-black transition-colors">
                About
              </Link>
              <Link href="/leaderboard" className="hover:text-brand-black transition-colors">
                Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
