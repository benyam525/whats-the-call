'use client';

import Link from 'next/link';
import { SubscriptionTier, LOCK_MESSAGES } from '@/data/types';

interface DailyLimitReachedProps {
  type: 'questions' | 'sudden-death';
  remaining?: number | 'unlimited';
  limit?: number;
  resetTime?: string;
}

/**
 * Full-page component shown when user hits daily limit
 */
export function DailyLimitReached({
  type,
  remaining,
  limit,
  resetTime = 'midnight',
}: DailyLimitReachedProps) {
  const lockKey = type === 'questions' ? 'DAILY_LIMIT' : 'SUDDEN_DEATH_LIMIT';
  const lockInfo = LOCK_MESSAGES[lockKey];

  const title = type === 'questions'
    ? "You've used all your daily questions!"
    : "You've used your Sudden Death attempt!";

  const subtitle = type === 'questions'
    ? `You've answered ${limit || 5} questions today.`
    : "Free users get 1 Sudden Death attempt per day.";

  return (
    <main className="min-h-screen bg-rv-navy flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-rv-slate rounded-xl border border-white/5 p-8 text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-rv-gold/10 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-rv-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-rv-silver/60 mb-6">{subtitle}</p>

          {/* Reset time info */}
          <div className="bg-rv-navy/50 rounded-lg p-4 mb-6">
            <p className="text-sm text-rv-silver/60">
              Questions reset at <span className="text-white font-semibold">{resetTime}</span>
            </p>
          </div>

          {/* Upgrade CTA */}
          <div className="space-y-4">
            <p className="text-rv-gold text-sm font-medium">{lockInfo?.message}</p>
            <Link
              href="/marketing#pricing"
              className="block w-full bg-rv-gold text-rv-navy font-bold py-3 px-6 rounded-lg hover:bg-rv-gold/90 transition-colors"
            >
              Upgrade to Pro
            </Link>
          </div>

          {/* Back link */}
          <Link
            href="/"
            className="inline-block mt-6 text-rv-silver/60 hover:text-white transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>

        {/* What you get with Pro */}
        <div className="mt-6 bg-rv-slate/50 rounded-xl border border-white/5 p-6">
          <h3 className="text-white font-semibold mb-4 text-center">With Pro, you get:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 text-rv-silver">
              <span className="text-rv-gold">✓</span>
              Unlimited questions per day
            </li>
            <li className="flex items-center gap-2 text-rv-silver">
              <span className="text-rv-gold">✓</span>
              Unlimited Sudden Death attempts
            </li>
            <li className="flex items-center gap-2 text-rv-silver">
              <span className="text-rv-gold">✓</span>
              All 29 rule categories unlocked
            </li>
            <li className="flex items-center gap-2 text-rv-silver">
              <span className="text-rv-gold">✓</span>
              Full rulebook explanations
            </li>
            <li className="flex items-center gap-2 text-rv-silver">
              <span className="text-rv-gold">✓</span>
              Mastery dashboard
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

/**
 * Inline banner for showing remaining questions
 */
export function DailyLimitBanner({
  remaining,
  total,
  type = 'questions',
}: {
  remaining: number | 'unlimited';
  total: number;
  type?: 'questions' | 'sudden-death';
}) {
  if (remaining === 'unlimited') return null;

  const isLow = remaining <= 2;
  const label = type === 'questions' ? 'questions' : 'attempts';

  return (
    <div
      className={`flex items-center justify-between px-4 py-2 rounded-lg ${
        isLow ? 'bg-rv-danger/10 border border-rv-danger/20' : 'bg-rv-slate border border-white/5'
      }`}
    >
      <span className={`text-sm ${isLow ? 'text-rv-danger' : 'text-rv-silver/60'}`}>
        {remaining} of {total} daily {label} remaining
      </span>
      {isLow && (
        <Link
          href="/marketing#pricing"
          className="text-rv-gold text-sm font-medium hover:underline"
        >
          Get unlimited →
        </Link>
      )}
    </div>
  );
}
