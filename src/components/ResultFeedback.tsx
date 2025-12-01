'use client';

import { useEffect, useState } from 'react';
import { getCorrectMessage, getWrongMessage, getMilestoneMessage } from '@/lib/celebrations';

interface ResultFeedbackProps {
  isCorrect: boolean;
  streak?: number;
  show: boolean;
  onAnimationComplete?: () => void;
}

export function ResultFeedback({ isCorrect, streak = 0, show, onAnimationComplete }: ResultFeedbackProps) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (show) {
      setMessage(isCorrect ? getCorrectMessage() : getWrongMessage());
      setVisible(true);

      if (!isCorrect) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }

      // Hide after animation
      const timer = setTimeout(() => {
        setVisible(false);
        onAnimationComplete?.();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [show, isCorrect, onAnimationComplete]);

  const milestone = isCorrect ? getMilestoneMessage(streak) : null;

  if (!show) return null;

  return (
    <>
      {/* Screen overlay flash */}
      <div
        className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-200 ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'}`}
      />

      {/* Shake effect via CSS class */}
      {shake && (
        <style jsx global>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
          }
          .shake-animation {
            animation: shake 0.5s ease-in-out;
          }
        `}</style>
      )}

      {/* Floating message */}
      <div
        className={`fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        <div
          className={`px-8 py-4 rounded-2xl shadow-2xl text-2xl font-bold ${
            isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {isCorrect ? '✓' : '✗'} {message}
        </div>

        {/* Milestone message */}
        {milestone && (
          <div className="mt-4 text-center animate-bounce">
            <span className="text-4xl">{milestone.emoji}</span>
            <div className="text-xl font-bold text-gray-800 mt-2">{milestone.message}</div>
          </div>
        )}
      </div>
    </>
  );
}

// Simple inline result header for question cards
interface ResultHeaderProps {
  isCorrect: boolean;
  message?: string;
  streakCount?: number;
}

export function ResultHeader({ isCorrect, message, streakCount }: ResultHeaderProps) {
  const displayMessage = message || (isCorrect ? getCorrectMessage() : getWrongMessage());

  return (
    <div className="flex items-center gap-2 mb-4">
      {isCorrect ? (
        <>
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-800 font-bold text-xl">{displayMessage}</span>
          {streakCount && streakCount > 1 && (
            <span className="ml-2 text-green-600 text-sm">
              🔥 {streakCount} streak!
            </span>
          )}
        </>
      ) : (
        <>
          <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="text-red-800 font-bold text-xl">{displayMessage}</span>
        </>
      )}
    </div>
  );
}
