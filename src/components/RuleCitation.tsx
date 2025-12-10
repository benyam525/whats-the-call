'use client';

import Link from 'next/link';

interface RuleCitationProps {
  ruling?: string;
  ruleReference?: string;
  casebookReference?: string;
  questionText?: string;
  scenarioText?: string;
  showAskRefGod?: boolean;
}

export function RuleCitation({
  ruling,
  ruleReference,
  casebookReference,
  questionText,
  scenarioText,
  showAskRefGod = true
}: RuleCitationProps) {
  // Build the Ref IQ question from scenario and question
  const refIQQuestion = scenarioText && questionText
    ? `${scenarioText}\n\nQuestion: ${questionText}`
    : questionText || ruling || '';

  return (
    <div className="bg-rv-navy/50 rounded-lg overflow-hidden border border-white/5 mt-4">
      {/* Header */}
      <div className="bg-rv-accent/10 border-b border-rv-accent/20 px-4 py-2">
        <h3 className="font-bold text-rv-accent-bright flex items-center gap-2 text-sm">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          Official Ruling
        </h3>
      </div>

      {/* Ruling text */}
      {ruling && (
        <div className="p-4">
          <p className="text-rv-silver leading-relaxed text-sm">{ruling}</p>
        </div>
      )}

      {/* Rule reference */}
      {ruleReference && (
        <div className="bg-rv-gold/10 border-t border-rv-gold/20 px-4 py-3">
          <div className="flex items-start gap-3">
            <span className="text-xl">📖</span>
            <div className="flex-1">
              <div className="text-xs text-rv-gold/80 font-medium uppercase tracking-wider mb-0.5">
                Rule Reference
              </div>
              <div className="font-bold text-rv-gold">
                {ruleReference}
              </div>
              {casebookReference && (
                <div className="text-sm text-rv-silver/60 mt-1.5 flex items-center gap-1.5">
                  <span>📋</span>
                  {casebookReference}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Ask Ref IQ button */}
      {showAskRefGod && refIQQuestion && (
        <div className="border-t border-white/5 px-4 py-3">
          <Link
            href={`/ref-iq?q=${encodeURIComponent(refIQQuestion)}`}
            className="inline-flex items-center gap-2 text-sm text-rv-silver hover:text-rv-gold transition-colors"
          >
            <span>🏀</span>
            <span>Still confused? Ask Ref IQ</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
