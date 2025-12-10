'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  canAccessFeature,
  canAccessCategory,
  canAccessGameMode,
  hasRemainingQuestions,
  hasRemainingSuddenDeath,
  getRemainingQuestions,
  getRemainingSuddenDeath,
  getDevTierOverride,
  DEFAULT_TIER,
  DAILY_LIMITS,
  SubscriptionTier,
  GatedFeature,
} from '@/lib/subscription';
import type { ParentCategory } from '@/data/types';

// Storage keys
const STORAGE_KEYS = {
  QUESTIONS_TODAY: 'rv_questions_today',
  SUDDEN_DEATH_TODAY: 'rv_sudden_death_today',
  LAST_RESET_DATE: 'rv_last_reset_date',
};

function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}

export interface SubscriptionState {
  tier: SubscriptionTier;
  questionsAnsweredToday: number;
  suddenDeathAttemptsToday: number;
  isLoading: boolean;
}

export interface SubscriptionActions {
  incrementQuestionsAnswered: () => void;
  incrementSuddenDeathAttempts: () => void;
  canAccessFeature: (feature: GatedFeature) => boolean;
  canAccessCategory: (category: ParentCategory) => boolean;
  canAccessGameMode: (mode: 'film-room' | 'category-drill' | 'sudden-death' | 'daily-5' | 'exam') => boolean;
  hasRemainingQuestions: () => boolean;
  hasRemainingSuddenDeath: () => boolean;
  getRemainingQuestions: () => number | 'unlimited';
  getRemainingSuddenDeath: () => number | 'unlimited';
  getDailyLimits: () => { questions: number; suddenDeath: number };
}

export function useSubscription(): SubscriptionState & SubscriptionActions {
  const [tier, setTier] = useState<SubscriptionTier>(DEFAULT_TIER);
  const [questionsAnsweredToday, setQuestionsAnsweredToday] = useState(0);
  const [suddenDeathAttemptsToday, setSuddenDeathAttemptsToday] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Reset counters if it's a new day
  const checkAndResetDaily = useCallback(() => {
    if (typeof window === 'undefined') return;

    const today = getTodayDate();
    const lastResetDate = localStorage.getItem(STORAGE_KEYS.LAST_RESET_DATE);

    if (lastResetDate !== today) {
      // New day - reset counters
      localStorage.setItem(STORAGE_KEYS.QUESTIONS_TODAY, '0');
      localStorage.setItem(STORAGE_KEYS.SUDDEN_DEATH_TODAY, '0');
      localStorage.setItem(STORAGE_KEYS.LAST_RESET_DATE, today);
      setQuestionsAnsweredToday(0);
      setSuddenDeathAttemptsToday(0);
    }
  }, []);

  // Initialize on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check for dev override or fetch real tier
    const devOverride = getDevTierOverride();
    if (devOverride) {
      setTier(devOverride);
    }
    // TODO: Fetch actual tier from auth/API when available
    // For now, default to 'free'

    // Load today's usage
    checkAndResetDaily();

    const questionsToday = parseInt(localStorage.getItem(STORAGE_KEYS.QUESTIONS_TODAY) || '0', 10);
    const suddenDeathToday = parseInt(localStorage.getItem(STORAGE_KEYS.SUDDEN_DEATH_TODAY) || '0', 10);

    setQuestionsAnsweredToday(questionsToday);
    setSuddenDeathAttemptsToday(suddenDeathToday);
    setIsLoading(false);
  }, [checkAndResetDaily]);

  // Increment question count
  const incrementQuestionsAnswered = useCallback(() => {
    if (typeof window === 'undefined') return;

    const newCount = questionsAnsweredToday + 1;
    setQuestionsAnsweredToday(newCount);
    localStorage.setItem(STORAGE_KEYS.QUESTIONS_TODAY, newCount.toString());
  }, [questionsAnsweredToday]);

  // Increment sudden death attempts
  const incrementSuddenDeathAttempts = useCallback(() => {
    if (typeof window === 'undefined') return;

    const newCount = suddenDeathAttemptsToday + 1;
    setSuddenDeathAttemptsToday(newCount);
    localStorage.setItem(STORAGE_KEYS.SUDDEN_DEATH_TODAY, newCount.toString());
  }, [suddenDeathAttemptsToday]);

  // Access check functions bound to current tier
  const canAccessFeatureFn = useCallback(
    (feature: GatedFeature) => canAccessFeature(tier, feature),
    [tier]
  );

  const canAccessCategoryFn = useCallback(
    (category: ParentCategory) => canAccessCategory(tier, category),
    [tier]
  );

  const canAccessGameModeFn = useCallback(
    (mode: 'film-room' | 'category-drill' | 'sudden-death' | 'daily-5' | 'exam') =>
      canAccessGameMode(tier, mode),
    [tier]
  );

  const hasRemainingQuestionsFn = useCallback(
    () => hasRemainingQuestions(tier, questionsAnsweredToday),
    [tier, questionsAnsweredToday]
  );

  const hasRemainingSuddenDeathFn = useCallback(
    () => hasRemainingSuddenDeath(tier, suddenDeathAttemptsToday),
    [tier, suddenDeathAttemptsToday]
  );

  const getRemainingQuestionsFn = useCallback(
    () => getRemainingQuestions(tier, questionsAnsweredToday),
    [tier, questionsAnsweredToday]
  );

  const getRemainingSuddenDeathFn = useCallback(
    () => getRemainingSuddenDeath(tier, suddenDeathAttemptsToday),
    [tier, suddenDeathAttemptsToday]
  );

  const getDailyLimits = useCallback(() => DAILY_LIMITS[tier], [tier]);

  return {
    tier,
    questionsAnsweredToday,
    suddenDeathAttemptsToday,
    isLoading,
    incrementQuestionsAnswered,
    incrementSuddenDeathAttempts,
    canAccessFeature: canAccessFeatureFn,
    canAccessCategory: canAccessCategoryFn,
    canAccessGameMode: canAccessGameModeFn,
    hasRemainingQuestions: hasRemainingQuestionsFn,
    hasRemainingSuddenDeath: hasRemainingSuddenDeathFn,
    getRemainingQuestions: getRemainingQuestionsFn,
    getRemainingSuddenDeath: getRemainingSuddenDeathFn,
    getDailyLimits,
  };
}
