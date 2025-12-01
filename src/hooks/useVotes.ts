'use client';

import { useState, useCallback } from 'react';
import { VoteStats, AnswerKey } from '@/data/types';

interface UseVotesReturn {
  voteStats: VoteStats | null;
  loading: boolean;
  hasVoted: boolean;
  submitVote: (questionId: string, answer: AnswerKey) => Promise<VoteStats | null>;
  fetchVotes: (questionId: string) => Promise<void>;
}

export function useVotes(): UseVotesReturn {
  const [voteStats, setVoteStats] = useState<VoteStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const fetchVotes = useCallback(async (questionId: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/vote?questionId=${questionId}`);
      const data = await res.json();
      if (data.success) {
        setVoteStats(data.stats);
      }
    } catch (error) {
      console.error('Error fetching votes:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const submitVote = useCallback(async (questionId: string, answer: AnswerKey): Promise<VoteStats | null> => {
    setLoading(true);
    try {
      const res = await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId, answer }),
      });
      const data = await res.json();
      if (data.success) {
        setVoteStats(data.stats);
        setHasVoted(true);
        return data.stats;
      }
    } catch (error) {
      console.error('Error submitting vote:', error);
    } finally {
      setLoading(false);
    }
    return null;
  }, []);

  const reset = useCallback(() => {
    setVoteStats(null);
    setHasVoted(false);
  }, []);

  return { voteStats, loading, hasVoted, submitVote, fetchVotes };
}
