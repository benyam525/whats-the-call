'use client';

import { CasebookQuestion } from '@/data/types';
import { DifficultyBadge } from './DifficultyBadge';

interface QuestionCardProps {
  question: CasebookQuestion;
  showCategory?: boolean;
  showDifficulty?: boolean;
  compact?: boolean;
}

export function QuestionCard({
  question,
  showCategory = true,
  showDifficulty = true,
  compact = false,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Category & Difficulty Badge */}
      {(showCategory || showDifficulty) && (
        <div className="bg-nba-red px-6 py-2 flex items-center justify-between">
          {showCategory && (
            <span className="text-white text-sm font-medium">{question.category}</span>
          )}
          {showDifficulty && <DifficultyBadge difficulty={question.difficulty} />}
        </div>
      )}

      {/* Scenario */}
      <div className={`${compact ? 'p-4' : 'p-6'} border-b border-gray-100`}>
        <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Scenario</h2>
        <p className={`${compact ? 'text-base' : 'text-lg'} text-gray-800 leading-relaxed`}>
          {question.scenario}
        </p>
      </div>

      {/* Question */}
      <div className={`${compact ? 'p-4' : 'p-6'} bg-gray-50`}>
        <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Question</h2>
        <p className={`${compact ? 'text-lg' : 'text-xl'} font-semibold text-gray-900`}>
          {question.question}
        </p>
      </div>
    </div>
  );
}
