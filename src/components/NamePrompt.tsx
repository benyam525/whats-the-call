'use client';

import { useState } from 'react';

interface NamePromptProps {
  isOpen: boolean;
  onSubmit: (name: string) => void;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export function NamePrompt({
  isOpen,
  onSubmit,
  onClose,
  title = "You made the leaderboard!",
  subtitle = "Enter your name to be displayed:",
}: NamePromptProps) {
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-nba-blue to-blue-700 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            <div>
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="text-blue-200 text-sm">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            maxLength={20}
            autoFocus
            className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:border-nba-blue focus:outline-none transition-colors"
          />

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Skip
            </button>
            <button
              type="submit"
              disabled={!name.trim()}
              className="flex-1 px-4 py-3 bg-nba-blue text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save Name
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
