'use client';

import Link from 'next/link';

interface HomeButtonProps {
  className?: string;
}

export function HomeButton({ className = '' }: HomeButtonProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-nba-blue transition-colors ${className}`}
    >
      <svg
        className="w-5 h-5"
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
      <span className="font-medium">Back to Modes</span>
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
      className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-red-600 transition-colors"
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
