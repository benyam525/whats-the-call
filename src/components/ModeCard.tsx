'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

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

const modeStyles = {
  'film-room': {
    gradient: 'from-blue-500/20 to-blue-600/5',
    accent: 'text-rv-accent-bright',
    border: 'border-blue-500/20',
    glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]',
    iconBg: 'bg-blue-500/10',
    pattern: 'bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.1)_0%,_transparent_50%)]',
  },
  'daily-5': {
    gradient: 'from-amber-500/20 to-amber-600/5',
    accent: 'text-rv-gold',
    border: 'border-amber-500/20',
    glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.3)]',
    iconBg: 'bg-amber-500/10',
    pattern: 'bg-[radial-gradient(ellipse_at_top_right,_rgba(251,191,36,0.1)_0%,_transparent_50%)]',
  },
  'sudden-death': {
    gradient: 'from-red-500/20 to-red-600/5',
    accent: 'text-rv-danger',
    border: 'border-red-500/20',
    glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]',
    iconBg: 'bg-red-500/10',
    pattern: 'bg-[radial-gradient(ellipse_at_top_right,_rgba(239,68,68,0.1)_0%,_transparent_50%)]',
  },
  'category-drill': {
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    accent: 'text-rv-success',
    border: 'border-emerald-500/20',
    glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]',
    iconBg: 'bg-emerald-500/10',
    pattern: 'bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.1)_0%,_transparent_50%)]',
  },
};

export function ModeCard({
  mode,
  title,
  description,
  icon,
  stat,
  href,
  disabled = false,
  highlight = false,
}: ModeCardProps) {
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const styles = modeStyles[mode];

  const handleClick = (e: React.MouseEvent) => {
    if (disabled || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setTimeout(() => setRipple(null), 600);
  };

  const content = (
    <div
      ref={cardRef}
      onClick={handleClick}
      className={`
        group relative h-full overflow-hidden rounded-xl
        bg-rv-slate border border-white/5
        transition-all duration-300 ease-out
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${!disabled ? 'hover:border-white/10 hover:-translate-y-1 hover:shadow-card-hover' : ''}
        ${!disabled ? styles.glow : ''}
        ${highlight ? 'ring-1 ring-rv-gold/40' : ''}
      `}
    >
      {/* Background gradient pattern */}
      <div className={`absolute inset-0 ${styles.pattern} opacity-60`} />

      {/* Court line watermark */}
      <div className="absolute inset-0 court-lines opacity-30" />

      {/* Top gradient bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${styles.gradient}`} />

      {/* Ripple effect */}
      {ripple && (
        <span
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '20px',
            height: '20px',
          }}
        />
      )}

      {/* Content */}
      <div className="relative p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className={`${styles.iconBg} p-2.5 rounded-lg`}>
            <span className="text-2xl">{icon}</span>
          </div>
          {highlight && (
            <span className="px-2 py-0.5 text-xs font-medium bg-rv-gold/20 text-rv-gold rounded-full">
              Daily
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-rv-silver/80 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Stat Display */}
        {stat && (
          <div className="mt-4 pt-3 border-t border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-rv-silver/60">
                {stat.label}
              </span>
              <span className={`font-bold ${styles.accent}`}>
                {stat.value}
              </span>
            </div>
          </div>
        )}

        {/* Arrow indicator */}
        {!disabled && (
          <div className={`
            absolute bottom-4 right-4
            w-8 h-8 rounded-full
            flex items-center justify-center
            bg-white/5 border border-white/10
            transition-all duration-300
            group-hover:bg-white/10 group-hover:border-white/20
            group-hover:translate-x-0.5
          `}>
            <svg
              className="w-4 h-4 text-rv-silver/60 group-hover:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </div>
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
    description: 'Practice at your pace. Full explanations, rule references, and community stats.',
    href: '/film-room',
  },
  'daily-5': {
    title: 'Daily 5',
    icon: '📅',
    description: '5 new questions daily. Same for everyone. Build your streak.',
    href: '/daily-5',
  },
  'sudden-death': {
    title: 'Sudden Death',
    icon: '💀',
    description: '10 seconds per call. One miss ends it. How far can you go?',
    href: '/sudden-death',
  },
  'category-drill': {
    title: 'Category Drill',
    icon: '📚',
    description: 'Master each rule category. Track your progress to 100%.',
    href: '/category-drill',
  },
} as const;
