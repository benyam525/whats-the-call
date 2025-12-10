'use client';

import { useState } from 'react';
import { useRefGod } from '@/hooks/useRefGod';
import Link from 'next/link';

interface AskRefGodButtonProps {
  question: string;
  scenario?: string;
  variant?: 'inline' | 'modal';
  className?: string;
}

/**
 * Button to ask Ref God about a specific question/scenario
 * Can be used inline (shows answer below) or opens full page
 */
export function AskRefGodButton({
  question,
  scenario,
  variant = 'inline',
  className = '',
}: AskRefGodButtonProps) {
  const { askRefGod, loading, response } = useRefGod();
  const [showAnswer, setShowAnswer] = useState(false);

  const fullQuestion = scenario
    ? `In this scenario: ${scenario}\n\nQuestion: ${question}`
    : question;

  const handleAsk = async () => {
    if (variant === 'modal') {
      // Navigate to Ref God page with pre-filled question
      window.location.href = `/ref-god?q=${encodeURIComponent(fullQuestion)}`;
      return;
    }

    setShowAnswer(true);
    await askRefGod(fullQuestion);
  };

  if (variant === 'modal') {
    return (
      <Link
        href={`/ref-god?q=${encodeURIComponent(fullQuestion)}`}
        className={`inline-flex items-center gap-2 px-4 py-2 bg-rv-slate border border-white/10 rounded-lg text-rv-silver hover:border-rv-gold/50 hover:text-white transition-colors ${className}`}
      >
        <span>🏀</span>
        <span>Ask Ref God</span>
      </Link>
    );
  }

  return (
    <div className={className}>
      {!showAnswer ? (
        <button
          onClick={handleAsk}
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2 bg-rv-slate border border-white/10 rounded-lg text-rv-silver hover:border-rv-gold/50 hover:text-white transition-colors disabled:opacity-50"
        >
          <span>🏀</span>
          <span>{loading ? 'Asking...' : 'Ask Ref God'}</span>
        </button>
      ) : (
        <div className="bg-rv-slate border border-white/10 rounded-xl p-5 mt-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🏀</span>
            <span className="text-sm font-semibold text-rv-gold">Ref God</span>
          </div>

          {loading ? (
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-rv-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-rv-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-rv-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-sm text-rv-silver/60">Consulting the rulebook...</span>
            </div>
          ) : response ? (
            <>
              <p className="text-white whitespace-pre-wrap leading-relaxed">
                {response.answer}
              </p>

              {response.sources && response.sources.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-rv-silver/40 uppercase tracking-wider mb-2">
                    Sources
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {response.sources.map((source, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-rv-navy/50 rounded text-xs text-rv-silver"
                      >
                        <span className="text-rv-gold">{source.section_id}</span>
                        <span className="text-rv-silver/40">|</span>
                        <span>{source.section_name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-white/10">
                <Link
                  href="/ref-god"
                  className="text-sm text-rv-gold hover:underline"
                >
                  Ask more questions →
                </Link>
              </div>
            </>
          ) : (
            <p className="text-rv-silver/60">Couldn't get an answer. Please try again.</p>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Compact inline link to Ref God
 */
export function RefGodLink({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/ref-god"
      className={`inline-flex items-center gap-1 text-rv-gold hover:underline ${className}`}
    >
      <span>🏀</span>
      <span>Ask Ref God</span>
    </Link>
  );
}
