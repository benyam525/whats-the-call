'use client';

import { AnswerKey } from '@/data/types';

interface AnswerOptionsProps {
  options: {
    a: string;
    b: string;
    c: string;
    d?: string;
  };
  onSelect: (answer: AnswerKey) => void;
  disabled?: boolean;
  selectedAnswer?: AnswerKey | null;
  correctAnswer?: AnswerKey | null;
  showResult?: boolean;
}

export function AnswerOptions({
  options,
  onSelect,
  disabled = false,
  selectedAnswer = null,
  correctAnswer = null,
  showResult = false,
}: AnswerOptionsProps) {
  const getButtonClass = (option: AnswerKey) => {
    const base = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ';

    if (!showResult) {
      if (disabled) {
        return base + 'border-gray-200 opacity-50 cursor-not-allowed';
      }
      return base + 'border-gray-200 hover:border-nba-blue hover:bg-blue-50 cursor-pointer';
    }

    if (option === correctAnswer) {
      return base + 'border-green-500 bg-green-50 text-green-800';
    }

    if (option === selectedAnswer && option !== correctAnswer) {
      return base + 'border-red-500 bg-red-50 text-red-800';
    }

    return base + 'border-gray-200 opacity-50';
  };

  return (
    <div className="p-6 space-y-3">
      {(Object.entries(options) as [AnswerKey, string][])
        .filter(([, value]) => value)
        .map(([key, value]) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            disabled={disabled || showResult}
            className={getButtonClass(key)}
          >
            <span className="font-bold text-nba-blue mr-3 uppercase">{key}.</span>
            <span>{value}</span>
          </button>
        ))}
    </div>
  );
}
