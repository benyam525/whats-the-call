'use client';

import Link from 'next/link';

interface ModeCardProps {
  mode: 'film-room' | 'daily-5' | 'sudden-death' | 'category-drill';
  title: string;
  description: string;
  icon: string;
  stat?: {
    label: string;
    value: string | number;
  };
  href: string;
  disabled?: boolean;
  highlight?: boolean;
}

export function ModeCard({
  title,
  description,
  icon,
  stat,
  href,
  disabled = false,
  highlight = false,
}: ModeCardProps) {
  const content = (
    <div
      className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-200 h-full ${
        disabled
          ? 'opacity-60 cursor-not-allowed'
          : 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
      } ${highlight ? 'ring-2 ring-nba-blue ring-offset-2' : ''}`}
    >
      {/* Icon & Title Header */}
      <div className="bg-gradient-to-r from-nba-blue to-blue-700 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>

      {/* Description */}
      <div className="p-5">
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        {/* Stat Display */}
        {stat && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{stat.label}</span>
              <span className="font-bold text-nba-blue text-lg">{stat.value}</span>
            </div>
          </div>
        )}
      </div>

      {/* Play indicator */}
      {!disabled && (
        <div className="absolute bottom-4 right-4">
          <div className="w-10 h-10 rounded-full bg-nba-blue/10 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-nba-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );

  if (disabled) {
    return content;
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}

// Mode configuration
export const modeConfig = {
  'film-room': {
    title: 'Film Room',
    icon: '🎬',
    description: 'Practice at your own pace. No timer, full explanations with rule references and community voting stats.',
    href: '/film-room',
  },
  'daily-5': {
    title: 'Daily 5',
    icon: '📅',
    description: '5 new questions every day. Same for everyone. Complete daily to build your streak!',
    href: '/daily-5',
  },
  'sudden-death': {
    title: 'Sudden Death',
    icon: '💀',
    description: 'How far can you go? 10 seconds per question. One wrong answer ends the game. Difficulty ramps up as you progress.',
    href: '/sudden-death',
  },
  'category-drill': {
    title: 'Category Drill',
    icon: '📚',
    description: 'Master each rule category. Answer all questions in a category to reach 100% mastery.',
    href: '/category-drill',
  },
} as const;
