'use client';

import { useState, useEffect, useCallback } from 'react';
import { UserStreak } from '@/data/types';

interface UseStreakReturn {
  streak: UserStreak | null;
  loading: boolean;
  recordAnswer: (isCorrect: boolean) => Promise<void>;
}

export function useStreak(visitorId: string | null): UseStreakReturn {
  const [streak, setStreak] = useState<UserStreak | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!visitorId) {
      setLoading(false);
      return;
    }

    async function fetchStreak() {
      try {
        const res = await fetch(`/api/streak?visitorId=${visitorId}`);
        const data = await res.json();
        if (data.success) {
          setStreak(data.streak);
        }
      } catch (error) {
        console.error('Error fetching streak:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStreak();
  }, [visitorId]);

  const recordAnswer = useCallback(async (isCorrect: boolean) => {
    if (!visitorId) return;

    try {
      const res = await fetch('/api/streak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visitorId, isCorrect }),
      });
      const data = await res.json();
      if (data.success) {
        setStreak(data.streak);
      }
    } catch (error) {
      console.error('Error recording answer:', error);
    }
  }, [visitorId]);

  return { streak, loading, recordAnswer };
}
