'use client';

import { Difficulty } from '@/data/types';

interface DifficultyBadgeProps {
  difficulty: Difficulty;
}

const difficultyConfig: Record<Difficulty, { label: string; color: string; icon: string }> = {
  beginner: {
    label: 'Beginner',
    color: 'bg-rv-success/20 text-rv-success border-rv-success/30',
    icon: '🌱',
  },
  intermediate: {
    label: 'Intermediate',
    color: 'bg-rv-warning/20 text-rv-warning border-rv-warning/30',
    icon: '⭐',
  },
  advanced: {
    label: 'Advanced',
    color: 'bg-rv-accent/20 text-rv-accent border-rv-accent/30',
    icon: '🎯',
  },
  expert: {
    label: 'Expert',
    color: 'bg-rv-danger/20 text-rv-danger border-rv-danger/30',
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
