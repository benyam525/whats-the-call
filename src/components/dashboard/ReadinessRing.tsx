'use client';

import { useEffect, useState } from 'react';
import { getReadinessLabel } from '@/data/dashboard-types';

interface ReadinessRingProps {
  score: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  label?: string;
  showLabel?: boolean;
  strokeWidth?: number;
  animated?: boolean;
  color?: string;
}

const sizeConfig = {
  sm: { width: 80, fontSize: 'text-lg', labelSize: 'text-xs' },
  md: { width: 120, fontSize: 'text-2xl', labelSize: 'text-sm' },
  lg: { width: 180, fontSize: 'text-4xl', labelSize: 'text-base' },
  xl: { width: 240, fontSize: 'text-5xl', labelSize: 'text-lg' },
};

export function ReadinessRing({
  score,
  size = 'lg',
  label,
  showLabel = true,
  strokeWidth,
  animated = true,
  color,
}: ReadinessRingProps) {
  const [displayScore, setDisplayScore] = useState(animated ? 0 : score);
  const [mounted, setMounted] = useState(false);

  const config = sizeConfig[size];
  const width = config.width;
  const defaultStrokeWidth = size === 'sm' ? 6 : size === 'md' ? 8 : size === 'lg' ? 10 : 12;
  const stroke = strokeWidth || defaultStrokeWidth;
  const radius = (width - stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const readinessLabel = getReadinessLabel(score);
  const ringColor = color || readinessLabel.color;

  useEffect(() => {
    setMounted(true);
    if (animated) {
      const duration = 1000;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        setDisplayScore(Math.round(score * eased));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [score, animated]);

  const offset = circumference - (displayScore / 100) * circumference;

  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center" style={{ width, height: width }}>
        <div className="animate-pulse bg-gray-200 rounded-full" style={{ width, height: width }} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width, height: width }}>
        <svg className="transform -rotate-90" width={width} height={width}>
          {/* Background ring */}
          <circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={stroke}
          />
          {/* Progress ring */}
          <circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke={ringColor}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-bold text-brand-black ${config.fontSize}`}>
            {displayScore}
          </span>
          {showLabel && (
            <span className={`text-brand-gray ${config.labelSize} mt-1`}>
              {label || readinessLabel.label}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

interface ThreePillarRingsProps {
  gameIQ: number;
  execution: number;
  commitment: number;
  size?: 'sm' | 'md';
}

export function ThreePillarRings({ gameIQ, execution, commitment, size = 'sm' }: ThreePillarRingsProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex flex-col items-center">
        <ReadinessRing
          score={gameIQ}
          size={size}
          label="Game IQ"
          color="#3B82F6"
          animated
        />
      </div>
      <div className="flex flex-col items-center">
        <ReadinessRing
          score={execution}
          size={size}
          label="Execution"
          color="#8B5CF6"
          animated
        />
      </div>
      <div className="flex flex-col items-center">
        <ReadinessRing
          score={commitment}
          size={size}
          label="Commitment"
          color="#10B981"
          animated
        />
      </div>
    </div>
  );
}

interface MiniRingProps {
  score: number;
  color: string;
  size?: number;
}

export function MiniRing({ score, color, size = 40 }: MiniRingProps) {
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  return (
    <svg className="transform -rotate-90" width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#E5E7EB"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  );
}
