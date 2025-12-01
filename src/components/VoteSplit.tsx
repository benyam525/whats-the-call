'use client';

import { VoteStats, AnswerKey } from '@/data/types';

interface VoteSplitProps {
  stats: VoteStats;
  options: { a: string; b: string; c: string; d?: string };
  selectedAnswer: AnswerKey;
  correctAnswer: AnswerKey;
}

export function VoteSplit({ stats, options, selectedAnswer, correctAnswer }: VoteSplitProps) {
  const availableOptions = (Object.entries(options) as [AnswerKey, string][])
    .filter(([, value]) => value);

  const getPercentage = (key: AnswerKey): number => {
    if (stats.totalVotes === 0) return 0;
    return Math.round((stats.votes[key] / stats.totalVotes) * 100);
  };

  const maxVotes = Math.max(...availableOptions.map(([key]) => stats.votes[key]));

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
          <span>📊</span>
          How Other Refs Ruled
        </h3>
        <span className="text-sm text-gray-500">
          {stats.totalVotes.toLocaleString()} {stats.totalVotes === 1 ? 'vote' : 'votes'}
        </span>
      </div>

      <div className="space-y-2">
        {availableOptions.map(([key, value]) => {
          const percentage = getPercentage(key);
          const isCorrect = key === correctAnswer;
          const isSelected = key === selectedAnswer;
          const isPopular = stats.votes[key] === maxVotes && maxVotes > 0;

          return (
            <div key={key} className="relative">
              {/* Bar background */}
              <div
                className={`absolute inset-0 rounded transition-all ${
                  isCorrect
                    ? 'bg-green-100'
                    : isSelected
                    ? 'bg-red-100'
                    : 'bg-gray-100'
                }`}
                style={{ width: `${percentage}%` }}
              />

              {/* Content */}
              <div className="relative flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-bold uppercase ${
                      isCorrect ? 'text-green-700' : isSelected ? 'text-red-700' : 'text-gray-600'
                    }`}
                  >
                    {key}.
                  </span>
                  <span
                    className={`text-sm ${
                      isCorrect ? 'text-green-800' : isSelected ? 'text-red-800' : 'text-gray-700'
                    }`}
                  >
                    {value.length > 40 ? value.substring(0, 40) + '...' : value}
                  </span>
                  {isCorrect && (
                    <span className="text-green-600 text-sm">✓</span>
                  )}
                  {isSelected && !isCorrect && (
                    <span className="text-red-600 text-sm">✗</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {isPopular && stats.totalVotes > 5 && (
                    <span className="text-xs text-gray-500">Most popular</span>
                  )}
                  <span
                    className={`font-bold ${
                      isCorrect ? 'text-green-700' : isSelected ? 'text-red-700' : 'text-gray-600'
                    }`}
                  >
                    {percentage}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Insight message */}
      {stats.totalVotes >= 10 && (
        <div className="mt-3 text-sm text-gray-600 italic">
          {getInsightMessage(stats, selectedAnswer, correctAnswer)}
        </div>
      )}
    </div>
  );
}

function getInsightMessage(
  stats: VoteStats,
  selectedAnswer: AnswerKey,
  correctAnswer: AnswerKey
): string {
  const correctPercentage = Math.round((stats.votes[correctAnswer] / stats.totalVotes) * 100);
  const selectedPercentage = Math.round((stats.votes[selectedAnswer] / stats.totalVotes) * 100);

  if (selectedAnswer === correctAnswer) {
    if (correctPercentage < 30) {
      return `Only ${correctPercentage}% got this right. You're among the elite officials!`;
    }
    if (correctPercentage < 50) {
      return `${correctPercentage}% ruled correctly. You've got sharp instincts!`;
    }
    return `You agreed with the majority (${correctPercentage}%). Good call!`;
  } else {
    if (selectedPercentage > 50) {
      return `${selectedPercentage}% made the same call. This one trips up a lot of refs!`;
    }
    return `${correctPercentage}% of refs got this one right. Tricky scenario!`;
  }
}
