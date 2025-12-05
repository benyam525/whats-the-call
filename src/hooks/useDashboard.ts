import { useState, useEffect, useCallback } from 'react';
import { DashboardData, RefReadinessScores } from '@/data/dashboard-types';
import { useVisitorId } from './useVisitorId';

interface UseDashboardReturn {
  data: DashboardData | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function useDashboard(): UseDashboardReturn {
  const visitorId = useVisitorId();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboard = useCallback(async () => {
    if (!visitorId) return;

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/dashboard?visitorId=${visitorId}`);
      const result = await response.json();

      if (result.success) {
        setData(result.data);
      } else {
        setError(result.error || 'Failed to load dashboard');
      }
    } catch (err) {
      console.error('Error fetching dashboard:', err);
      setError('Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  }, [visitorId]);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  return { data, loading, error, refresh: fetchDashboard };
}

interface UseReadinessReturn {
  scores: RefReadinessScores | null;
  loading: boolean;
  error: string | null;
}

export function useReadinessScores(): UseReadinessReturn {
  const visitorId = useVisitorId();
  const [scores, setScores] = useState<RefReadinessScores | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchScores() {
      if (!visitorId) return;

      try {
        setLoading(true);
        const response = await fetch(`/api/dashboard?visitorId=${visitorId}&section=hero`);
        const result = await response.json();

        if (result.success && result.data) {
          setScores(result.data.readinessScores);
        } else {
          setError(result.error || 'Failed to load scores');
        }
      } catch (err) {
        console.error('Error fetching readiness scores:', err);
        setError('Failed to load scores');
      } finally {
        setLoading(false);
      }
    }

    fetchScores();
  }, [visitorId]);

  return { scores, loading, error };
}
