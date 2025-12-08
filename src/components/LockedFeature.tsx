'use client';

import { ReactNode } from 'react';
import { GatedFeature, SubscriptionTier, canAccess, getLockMessage, getUpgradeTier } from '@/lib/subscription';

interface LockedFeatureProps {
  feature: GatedFeature;
  userTier: SubscriptionTier;
  children: ReactNode;
  /** Show content as blurred instead of hiding */
  blurMode?: boolean;
  /** Custom lock message */
  lockMessage?: string;
  /** Show only the header with lock icon (for sections) */
  headerOnly?: boolean;
  /** Section header text when using headerOnly */
  headerText?: string;
  /** Show teaser content (e.g., 1 of 3 items) */
  teaserContent?: ReactNode;
  /** Additional className */
  className?: string;
}

export function LockedFeature({
  feature,
  userTier,
  children,
  blurMode = false,
  lockMessage,
  headerOnly = false,
  headerText,
  teaserContent,
  className = '',
}: LockedFeatureProps) {
  const hasAccess = canAccess(feature, userTier);
  const upgradeTier = getUpgradeTier(feature, userTier);
  const message = lockMessage || getLockMessage(feature);

  if (hasAccess) {
    return <>{children}</>;
  }

  // Header only mode - show section title with lock
  if (headerOnly && headerText) {
    return (
      <div className={`${className}`}>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="font-semibold">{headerText}</span>
          <LockIcon />
        </div>
        <p className="text-sm text-gray-500 mt-1">{message}</p>
      </div>
    );
  }

  // Blur mode - show content with blur overlay
  if (blurMode) {
    return (
      <div className={`relative ${className}`}>
        <div className="blur-sm pointer-events-none select-none">
          {children}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 rounded-lg">
          <LockIcon size="lg" />
          <p className="text-sm text-white text-center mt-2 px-4 max-w-xs">
            {message}
          </p>
          <UpgradeButton tier={upgradeTier} />
        </div>
      </div>
    );
  }

  // Teaser mode - show partial content with upgrade prompt
  if (teaserContent) {
    return (
      <div className={className}>
        {teaserContent}
        <div className="mt-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
          <div className="flex items-center gap-2">
            <LockIcon />
            <p className="text-sm text-gray-400">{message}</p>
          </div>
          <UpgradeButton tier={upgradeTier} className="mt-2" />
        </div>
      </div>
    );
  }

  // Default - locked card with message
  return (
    <div className={`p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 ${className}`}>
      <div className="flex items-center gap-2 text-gray-400">
        <LockIcon />
        <p className="text-sm">{message}</p>
      </div>
      <UpgradeButton tier={upgradeTier} className="mt-3" />
    </div>
  );
}

// Lock icon component
function LockIcon({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-8 h-8',
  };

  return (
    <svg
      className={`${sizeClasses[size]} text-gray-400`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

// Upgrade button component
function UpgradeButton({
  tier,
  className = ''
}: {
  tier: SubscriptionTier | null;
  className?: string;
}) {
  if (!tier) return null;

  const tierLabel = tier === 'pro' ? 'Pro' : 'Elite';

  return (
    <button
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors
        ${tier === 'pro'
          ? 'bg-orange-500 hover:bg-orange-600 text-white'
          : 'bg-purple-500 hover:bg-purple-600 text-white'
        } ${className}`}
      onClick={() => {
        // TODO: Navigate to pricing/checkout
        window.location.href = '/marketing#pricing';
      }}
    >
      Upgrade to {tierLabel}
    </button>
  );
}

// Blurred value component for inline use
export function BlurredValue({
  value,
  userTier,
  feature,
  placeholder = '??'
}: {
  value: string | number;
  userTier: SubscriptionTier;
  feature: GatedFeature;
  placeholder?: string;
}) {
  const hasAccess = canAccess(feature, userTier);

  if (hasAccess) {
    return <span>{value}</span>;
  }

  return (
    <span className="relative inline-flex items-center gap-1">
      <span className="blur-sm select-none">{placeholder}</span>
      <LockIcon size="sm" />
    </span>
  );
}

// Locked row component for tables/lists
export function LockedRow({
  userTier,
  feature,
  columns,
  className = '',
}: {
  userTier: SubscriptionTier;
  feature: GatedFeature;
  columns: number;
  className?: string;
}) {
  const hasAccess = canAccess(feature, userTier);

  if (hasAccess) {
    return null; // Caller should render actual row
  }

  return (
    <tr className={`text-gray-500 ${className}`}>
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="py-2 px-3">
          {i === 0 ? (
            <span className="flex items-center gap-1">
              <LockIcon size="sm" />
              <span className="text-gray-600">—</span>
            </span>
          ) : (
            <span className="text-gray-600">—</span>
          )}
        </td>
      ))}
    </tr>
  );
}
