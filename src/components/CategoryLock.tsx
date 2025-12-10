'use client';

import Link from 'next/link';
import { ParentCategory, PARENT_CATEGORY_NAMES, LOCK_MESSAGES } from '@/data/types';

interface LockedCategoryCardProps {
  category: ParentCategory;
  onClick?: () => void;
}

/**
 * Card for a locked category in selection screens
 */
export function LockedCategoryCard({ category, onClick }: LockedCategoryCardProps) {
  const categoryName = PARENT_CATEGORY_NAMES[category] || category;
  const lockInfo = LOCK_MESSAGES['CATEGORY_LOCKED'];

  return (
    <div
      className="relative bg-rv-slate/50 rounded-xl border border-white/5 p-5 cursor-not-allowed opacity-75"
      onClick={onClick}
    >
      {/* Lock badge */}
      <div className="absolute -top-2 -right-2 bg-rv-gold/20 text-rv-gold px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1">
        <LockIcon className="w-3 h-3" />
        Pro
      </div>

      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-rv-navy/50 flex items-center justify-center">
          <LockIcon className="w-5 h-5 text-rv-silver/40" />
        </div>
        <h3 className="text-white/60 font-semibold">{categoryName}</h3>
      </div>

      <p className="text-rv-silver/40 text-sm">{lockInfo?.message || 'Upgrade to unlock'}</p>
    </div>
  );
}

/**
 * Unlock prompt overlay when user tries to access locked category
 */
export function CategoryUnlockPrompt({
  category,
  isOpen,
  onClose,
}: {
  category: ParentCategory;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  const categoryName = PARENT_CATEGORY_NAMES[category] || category;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-rv-slate rounded-xl border border-white/10 p-8 max-w-md w-full mx-4">
        <div className="text-center">
          {/* Lock icon */}
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-rv-gold/10 flex items-center justify-center">
            <LockIcon className="w-8 h-8 text-rv-gold" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Category Locked</h2>
          <p className="text-rv-silver mb-6">
            <span className="text-white font-medium">{categoryName}</span> requires a Pro subscription.
          </p>

          <p className="text-sm text-rv-silver/60 mb-6">
            Upgrade to Pro to unlock all 29 rule categories and train without limits.
          </p>

          <div className="space-y-3">
            <Link
              href="/marketing#pricing"
              className="block w-full bg-rv-gold text-rv-navy font-bold py-3 px-6 rounded-lg hover:bg-rv-gold/90 transition-colors"
            >
              Upgrade to Pro
            </Link>
            <button
              onClick={onClose}
              className="block w-full text-rv-silver hover:text-white py-2 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Category selection with lock states
 */
export function CategoryGrid({
  categories,
  unlockedCategories,
  onSelectCategory,
  onLockedCategoryClick,
}: {
  categories: ParentCategory[];
  unlockedCategories: ParentCategory[] | 'all';
  onSelectCategory: (category: ParentCategory) => void;
  onLockedCategoryClick?: (category: ParentCategory) => void;
}) {
  const isUnlocked = (category: ParentCategory) =>
    unlockedCategories === 'all' || unlockedCategories.includes(category);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {categories.map((category) => {
        if (isUnlocked(category)) {
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className="bg-rv-slate rounded-xl border border-white/5 p-5 text-left hover:border-rv-gold/50 transition-colors"
            >
              <h3 className="text-white font-semibold mb-1">
                {PARENT_CATEGORY_NAMES[category] || category}
              </h3>
              <p className="text-rv-silver/60 text-sm">Practice this category</p>
            </button>
          );
        }

        return (
          <LockedCategoryCard
            key={category}
            category={category}
            onClick={() => onLockedCategoryClick?.(category)}
          />
        );
      })}
    </div>
  );
}

// Icon component
function LockIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}
