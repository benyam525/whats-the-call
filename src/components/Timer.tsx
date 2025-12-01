'use client';

import { useEffect, useState, useCallback } from 'react';

interface TimerProps {
  seconds: number;
  onTimeUp: () => void;
  isRunning: boolean;
  onTick?: (secondsLeft: number) => void;
}

export function Timer({ seconds, onTimeUp, isRunning, onTick }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  // Reset timer when seconds prop changes
  useEffect(() => {
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        if (onTick) onTick(next);
        if (next <= 0) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, onTimeUp, onTick]);

  // Color based on time remaining
  const getColor = () => {
    if (timeLeft <= 3) return 'text-rv-danger';
    if (timeLeft <= 5) return 'text-rv-warning';
    return 'text-rv-accent-bright';
  };

  const getStrokeColor = () => {
    if (timeLeft <= 3) return 'stroke-rv-danger';
    if (timeLeft <= 5) return 'stroke-rv-warning';
    return 'stroke-rv-accent-bright';
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Background circle */}
      <svg className="w-16 h-16 transform -rotate-90">
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          className="text-rv-steel"
        />
        <circle
          cx="32"
          cy="32"
          r="28"
          strokeWidth="4"
          fill="none"
          strokeDasharray={2 * Math.PI * 28}
          strokeDashoffset={(2 * Math.PI * 28) - ((timeLeft / seconds) * 2 * Math.PI * 28)}
          className={`transition-all duration-1000 ${getStrokeColor()}`}
          strokeLinecap="round"
        />
      </svg>
      {/* Time display */}
      <div className={`absolute text-xl font-bold ${getColor()}`}>
        {timeLeft}
      </div>
      {/* Danger pulse */}
      {timeLeft <= 3 && isRunning && (
        <div className="absolute inset-0 rounded-full animate-ping bg-rv-danger/20" />
      )}
    </div>
  );
}

// Hook version for more control
export function useGameTimer(initialSeconds: number, onTimeUp: () => void) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const start = useCallback(() => {
    setTimeLeft(initialSeconds);
    setIsRunning(true);
  }, [initialSeconds]);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setTimeLeft(initialSeconds);
    setIsRunning(false);
  }, [initialSeconds]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, onTimeUp]);

  return { timeLeft, isRunning, start, stop, reset };
}
