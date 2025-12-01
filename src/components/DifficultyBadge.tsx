'use client';

import { Difficulty } from '@/data/types';

interface DifficultyBadgeProps {
  difficulty: Difficulty;
}

const difficultyConfig: Record<Difficulty, { label: string; color: string; icon: string }> = {
  rookie: {
    label: 'Rookie',
    color: 'bg-green-100 text-green-800 border-green-200',
    icon: '🌱',
  },
  veteran: {
    label: 'Veteran',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    icon: '⭐',
  },
  expert: {
    label: 'Expert',
    color: 'bg-red-100 text-red-800 border-red-200',
    icon: '🔥',
  },
};

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const config = difficultyConfig[difficulty];

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${config.color}`}
    >
      <span>{config.icon}</span>
      {config.label}
    </span>
  );
}
