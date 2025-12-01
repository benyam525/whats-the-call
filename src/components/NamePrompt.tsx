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
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-rv-slate rounded-xl border border-white/10 shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="bg-rv-navy px-6 py-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            <div>
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="text-rv-silver/60 text-sm">{subtitle}</p>
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
            className="w-full px-4 py-3 text-lg bg-rv-navy border border-white/10 rounded-lg text-white placeholder-rv-silver/40 focus:border-rv-accent/50 focus:outline-none focus:ring-2 focus:ring-rv-accent/20 transition-all"
          />

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary flex-1"
            >
              Skip
            </button>
            <button
              type="submit"
              disabled={!name.trim()}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
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
            transform: scale(0.95);
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
