'use client';

import { useState, useEffect } from 'react';
import { CasebookQuestion, AnswerKey } from '@/data/types';

interface RefGodExplanation {
  ruling: string;
  rule: string;
  whyItMatters: string;
  commonMistakes: string;
  proTip: string;
}

interface RefGodPanelProps {
  isOpen: boolean;
  onClose: () => void;
  question: CasebookQuestion;
  userAnswer: AnswerKey;
  wasCorrect: boolean;
}

export function RefGodPanel({ isOpen, onClose, question, userAnswer, wasCorrect }: RefGodPanelProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [explanation, setExplanation] = useState<RefGodExplanation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showFullRule, setShowFullRule] = useState(false);

  useEffect(() => {
    if (isOpen && !explanation && !isLoading) {
      fetchExplanation();
    }
  }, [isOpen]);

  const fetchExplanation = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/ref-god/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: question.question,
          correctAnswer: `${question.correct_answer}. ${question.options[question.correct_answer]}`,
          explanation: question.explanation,
          ruleReference: question.ruleReference,
          userAnswer: `${userAnswer}. ${question.options[userAnswer]}`,
          wasCorrect,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get explanation');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.details || data.error);
      }
      setExplanation(data.sections);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      setError(`Failed to load Ref God explanation: ${errorMsg}`);
      console.error('Ref God error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-rv-slate rounded-t-3xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '85vh' }}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-white/20 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏀</span>
            <h2 className="text-xl font-bold text-white tracking-tight">REF GOD</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-5 py-4" style={{ maxHeight: 'calc(85vh - 80px)' }}>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-12 h-12 border-3 border-rv-success/30 border-t-rv-success rounded-full animate-spin mb-4" />
              <p className="text-white/60 text-sm">Ref God is reviewing the play...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-rv-danger mb-4">{error}</p>
              <button
                onClick={fetchExplanation}
                className="px-4 py-2 bg-rv-success text-white rounded-lg text-sm font-medium hover:bg-rv-success/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : explanation ? (
            <div className="space-y-6">
              {/* The Ruling */}
              <section>
                <h3 className="text-xs font-bold uppercase tracking-wider text-rv-success mb-2">
                  THE RULING
                </h3>
                <p className="text-white leading-relaxed">{explanation.ruling}</p>
              </section>

              {/* The Rule */}
              <section>
                <h3 className="text-xs font-bold uppercase tracking-wider text-rv-warning mb-2">
                  THE RULE
                </h3>
                <div className="bg-rv-navy/50 rounded-xl p-4 border border-white/5">
                  <p className="text-white/90 leading-relaxed italic">
                    {showFullRule ? explanation.rule : truncateText(explanation.rule, 200)}
                  </p>
                  {explanation.rule.length > 200 && (
                    <button
                      onClick={() => setShowFullRule(!showFullRule)}
                      className="text-rv-success text-sm mt-2 hover:underline"
                    >
                      {showFullRule ? 'Show less' : 'View full rule text'}
                    </button>
                  )}
                </div>
              </section>

              {/* Why It Matters */}
              <section>
                <h3 className="text-xs font-bold uppercase tracking-wider text-rv-accent mb-2">
                  WHY IT MATTERS
                </h3>
                <p className="text-white/80 leading-relaxed">{explanation.whyItMatters}</p>
              </section>

              {/* Common Mistakes */}
              <section>
                <h3 className="text-xs font-bold uppercase tracking-wider text-rv-danger mb-2">
                  COMMON MISTAKES
                </h3>
                <p className="text-white/80 leading-relaxed">{explanation.commonMistakes}</p>
              </section>

              {/* Pro Tip */}
              <section className="bg-gradient-to-r from-rv-success/20 to-rv-success/5 rounded-xl p-4 border border-rv-success/30">
                <h3 className="text-xs font-bold uppercase tracking-wider text-rv-success mb-2 flex items-center gap-2">
                  <span>💡</span> PRO TIP
                </h3>
                <p className="text-white leading-relaxed">{explanation.proTip}</p>
              </section>

              {/* Rule reference if available */}
              {question.ruleReference && (
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-white/40">
                    Reference: {question.ruleReference}
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </div>

        {/* Bottom safe area padding for mobile */}
        <div className="h-6 bg-rv-slate" />
      </div>
    </>
  );
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Button component to trigger the panel
interface GoDeeeperButtonProps {
  onClick: () => void;
  className?: string;
}

export function GoDeeperButton({ onClick, className = '' }: GoDeeeperButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-medium text-sm hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-orange-500/25 ${className}`}
    >
      <span>🏀</span>
      <span>Go Deeper</span>
    </button>
  );
}
