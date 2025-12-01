'use client';

import Link from 'next/link';

interface HomeButtonProps {
  className?: string;
}

export function HomeButton({ className = '' }: HomeButtonProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-rv-silver hover:text-white hover:bg-white/10 hover:border-white/20 transition-all ${className}`}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <span className="text-sm font-medium">Exit</span>
    </Link>
  );
}

// Floating reset button for during games
interface ResetButtonProps {
  onClick: () => void;
  label?: string;
}

export function ResetButton({ onClick, label = 'End Game' }: ResetButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-rv-silver/60 hover:text-rv-danger hover:bg-rv-danger/10 transition-all"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <span>{label}</span>
    </button>
  );
}
