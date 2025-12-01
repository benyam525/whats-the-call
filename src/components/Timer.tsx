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
    if (timeLeft <= 3) return 'text-red-600 bg-red-100';
    if (timeLeft <= 5) return 'text-yellow-600 bg-yellow-100';
    return 'text-nba-blue bg-blue-100';
  };

  // Size of progress circle
  const progress = (timeLeft / seconds) * 100;
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Background circle */}
      <svg className="w-20 h-20 transform -rotate-90">
        <circle
          cx="40"
          cy="40"
          r="35"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          className="text-gray-200"
        />
        <circle
          cx="40"
          cy="40"
          r="35"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeDasharray={2 * Math.PI * 35}
          strokeDashoffset={(2 * Math.PI * 35) - ((timeLeft / seconds) * 2 * Math.PI * 35)}
          className={`transition-all duration-1000 ${
            timeLeft <= 3 ? 'text-red-500' : timeLeft <= 5 ? 'text-yellow-500' : 'text-nba-blue'
          }`}
          strokeLinecap="round"
        />
      </svg>
      {/* Time display */}
      <div className={`absolute text-2xl font-bold ${
        timeLeft <= 3 ? 'text-red-600' : timeLeft <= 5 ? 'text-yellow-600' : 'text-nba-blue'
      }`}>
        {timeLeft}
      </div>
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
