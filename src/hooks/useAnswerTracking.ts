import { useCallback, useRef } from 'react';
import { AnswerRecord, GameMode, Difficulty } from '@/data/dashboard-types';

interface TrackAnswerParams {
  visitorId: string;
  questionId: string;
  category: string;
  difficulty: Difficulty;
  mode: GameMode;
  answerGiven: string;
  correctAnswer: string;
  isCorrect: boolean;
  responseTimeMs?: number;
  timeAllowedMs?: number;
  streakPosition?: number;
}

export function useAnswerTracking() {
  const sessionIdRef = useRef<string | null>(null);

  // Generate session ID on first use
  const getSessionId = useCallback(() => {
    if (!sessionIdRef.current) {
      sessionIdRef.current = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    }
    return sessionIdRef.current;
  }, []);

  // Reset session (e.g., when starting a new game)
  const resetSession = useCallback(() => {
    sessionIdRef.current = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    return sessionIdRef.current;
  }, []);

  const trackAnswer = useCallback(async (params: TrackAnswerParams): Promise<void> => {
    const sessionId = getSessionId();

    try {
      await fetch('/api/dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'recordAnswer',
          visitorId: params.visitorId,
          questionId: params.questionId,
          category: params.category,
          difficulty: params.difficulty,
          mode: params.mode,
          answerGiven: params.answerGiven,
          correctAnswer: params.correctAnswer,
          isCorrect: params.isCorrect,
          responseTimeMs: params.responseTimeMs,
          timeAllowedMs: params.timeAllowedMs,
          streakPosition: params.streakPosition,
          sessionId,
        }),
      });
    } catch (error) {
      console.error('Error tracking answer:', error);
      // Non-blocking - don't throw
    }
  }, [getSessionId]);

  return { trackAnswer, resetSession, getSessionId };
}

// Utility function for calculating response time
export function createResponseTimeTracker() {
  let startTime: number | null = null;

  return {
    start: () => {
      startTime = Date.now();
    },
    getElapsed: (): number | null => {
      if (startTime === null) return null;
      return Date.now() - startTime;
    },
    reset: () => {
      startTime = null;
    },
  };
}
