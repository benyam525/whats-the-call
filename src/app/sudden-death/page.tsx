'use client';

import { useState, useEffect, useCallback } from 'react';
import { CasebookQuestion, AnswerKey, Difficulty } from '@/data/types';
import { casebookQuestions } from '@/data/casebook';
import { useVisitorId } from '@/hooks/useVisitorId';
import { DifficultyBadge } from '@/components/DifficultyBadge';
import { HomeButton, ResetButton } from '@/components/HomeButton';
import { Timer } from '@/components/Timer';
import { ResultFeedback } from '@/components/ResultFeedback';
import { NamePrompt } from '@/components/NamePrompt';
import { getSuddenDeathDifficulty } from '@/lib/celebrations';

type GameState = 'ready' | 'playing' | 'game-over';

const TIMER_SECONDS = 10;

export default function SuddenDeath() {
  const visitorId = useVisitorId();

  const [gameState, setGameState] = useState<GameState>('ready');
  const [currentQuestion, setCurrentQuestion] = useState<CasebookQuestion | null>(null);
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const [difficultyReached, setDifficultyReached] = useState<Difficulty>('rookie');

  // Fetch best score
  useEffect(() => {
    if (!visitorId) return;

    const fetchBestScore = async () => {
      try {
        const res = await fetch(`/api/sudden-death/best?visitorId=${visitorId}`);
        const data = await res.json();
        if (data.bestScore !== undefined) {
          setBestScore(data.bestScore);
        }
      } catch (error) {
        console.error('Error fetching best score:', error);
      }
    };

    fetchBestScore();
  }, [visitorId]);

  const getCurrentDifficulty = useCallback((): Difficulty => {
    return getSuddenDeathDifficulty(score);
  }, [score]);

  const loadNewQuestion = useCallback(() => {
    const difficulty = getCurrentDifficulty();
    setDifficultyReached(difficulty);

    // Filter by current difficulty
    const filtered = casebookQuestions.filter(q => q.difficulty === difficulty);
    const available = filtered.filter(q => !usedQuestionIds.has(q.id));

    // If no questions left at this difficulty, use any available
    const pool = available.length > 0 ? available : filtered;

    if (pool.length === 0) {
      // Fallback to all questions
      const allAvailable = casebookQuestions.filter(q => !usedQuestionIds.has(q.id));
      if (allAvailable.length === 0) {
        setUsedQuestionIds(new Set());
        const randomIndex = Math.floor(Math.random() * casebookQuestions.length);
        setCurrentQuestion(casebookQuestions[randomIndex]);
        setUsedQuestionIds(new Set([casebookQuestions[randomIndex].id]));
      } else {
        const randomIndex = Math.floor(Math.random() * allAvailable.length);
        setCurrentQuestion(allAvailable[randomIndex]);
        setUsedQuestionIds(prev => new Set([...prev, allAvailable[randomIndex].id]));
      }
    } else {
      const randomIndex = Math.floor(Math.random() * pool.length);
      setCurrentQuestion(pool[randomIndex]);
      setUsedQuestionIds(prev => new Set([...prev, pool[randomIndex].id]));
    }

    setSelectedAnswer(null);
    setShowResult(false);
    setShowFeedback(false);
    setTimerRunning(true);
    setTimerKey(prev => prev + 1);
  }, [getCurrentDifficulty, usedQuestionIds]);

  const startGame = () => {
    setScore(0);
    setUsedQuestionIds(new Set());
    setGameState('playing');
    setDifficultyReached('rookie');
    loadNewQuestion();
  };

  const endGame = useCallback(async (finalScore: number) => {
    setGameState('game-over');
    setTimerRunning(false);

    if (visitorId && finalScore > 0) {
      try {
        const res = await fetch('/api/sudden-death/score', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            visitorId,
            score: finalScore,
            difficultyReached,
          }),
        });
        const data = await res.json();

        if (data.isNewBest) {
          setBestScore(finalScore);
        }

        // Show name prompt if score >= 10 and no display name
        if (finalScore >= 10 && data.needsDisplayName) {
          setShowNamePrompt(true);
        }
      } catch (error) {
        console.error('Error saving score:', error);
      }
    }
  }, [visitorId, difficultyReached]);

  const handleTimeUp = useCallback(() => {
    setShowResult(true);
    setLastAnswerCorrect(false);
    setShowFeedback(true);

    // End game after showing feedback
    setTimeout(() => {
      endGame(score);
    }, 1500);
  }, [score, endGame]);

  const handleAnswer = async (answer: AnswerKey) => {
    if (showResult || !currentQuestion) return;

    setTimerRunning(false);
    setSelectedAnswer(answer);

    const isCorrect = answer === currentQuestion.correctAnswer;
    setLastAnswerCorrect(isCorrect);
    setShowFeedback(true);
    setShowResult(true);

    if (isCorrect) {
      const newScore = score + 1;
      setScore(newScore);

      // Brief delay before next question
      setTimeout(() => {
        loadNewQuestion();
      }, 1000);
    } else {
      // Wrong answer - game over
      setTimeout(() => {
        endGame(score);
      }, 1500);
    }
  };

  const handleNameSubmit = async (name: string) => {
    if (visitorId) {
      try {
        await fetch('/api/user/display-name', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ visitorId, displayName: name }),
        });
      } catch (error) {
        console.error('Error saving name:', error);
      }
    }
    setShowNamePrompt(false);
  };

  const getButtonClass = (option: AnswerKey) => {
    const base = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ';

    if (!showResult) {
      return base + 'border-gray-200 hover:border-nba-blue hover:bg-blue-50 cursor-pointer';
    }

    if (option === currentQuestion?.correctAnswer) {
      return base + 'border-green-500 bg-green-50 text-green-800';
    }

    if (option === selectedAnswer && option !== currentQuestion?.correctAnswer) {
      return base + 'border-red-500 bg-red-50 text-red-800';
    }

    return base + 'border-gray-200 opacity-50';
  };

  // Ready state
  if (gameState === 'ready') {
    return (
      <main className="min-h-screen bg-gray-50">
        <header className="bg-nba-blue text-white py-6 px-4 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">💀</span>
                  <h1 className="text-3xl font-bold tracking-tight">Sudden Death</h1>
                </div>
                <p className="text-blue-200">One wrong answer ends it all</p>
              </div>
              <HomeButton className="text-white hover:text-blue-200" />
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">💀</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>

            <div className="text-left bg-gray-50 rounded-lg p-6 mb-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">⏱️</span>
                <p className="text-gray-700"><strong>10 seconds</strong> per question</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📈</span>
                <p className="text-gray-700">Difficulty <strong>increases</strong> as you progress</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">❌</span>
                <p className="text-gray-700"><strong>One wrong answer</strong> or timeout = Game Over</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🏆</span>
                <p className="text-gray-700">Score 10+ to join the <strong>leaderboard</strong></p>
              </div>
            </div>

            {bestScore !== null && bestScore > 0 && (
              <div className="bg-orange-50 rounded-lg p-4 mb-6">
                <div className="text-sm text-orange-600">Your Best</div>
                <div className="text-3xl font-bold text-orange-600">{bestScore}</div>
              </div>
            )}

            <button
              onClick={startGame}
              className="bg-nba-blue text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-800 transition-colors shadow-lg"
            >
              Start Game
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Game Over state
  if (gameState === 'game-over') {
    const isNewBest = bestScore !== null && score > bestScore;

    return (
      <main className="min-h-screen bg-gray-50">
        <NamePrompt
          isOpen={showNamePrompt}
          onSubmit={handleNameSubmit}
          onClose={() => setShowNamePrompt(false)}
          title="Impressive run!"
          subtitle="Add your name to the leaderboard:"
        />

        <header className="bg-nba-blue text-white py-6 px-4 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">💀</span>
                  <h1 className="text-3xl font-bold tracking-tight">Game Over</h1>
                </div>
              </div>
              <HomeButton className="text-white hover:text-blue-200" />
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">
              {score >= 20 ? '🏆' : score >= 10 ? '🎉' : score >= 5 ? '👏' : '💪'}
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{score}</h2>
            <p className="text-gray-600 mb-2">Questions Answered</p>

            {isNewBest && (
              <div className="text-lg font-bold text-green-600 mb-4">
                🎉 New Personal Best!
              </div>
            )}

            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-gray-100 rounded-lg px-4 py-2">
                <div className="text-sm text-gray-500">Difficulty Reached</div>
                <DifficultyBadge difficulty={difficultyReached} />
              </div>
              {bestScore !== null && (
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <div className="text-sm text-gray-500">Personal Best</div>
                  <div className="font-bold text-nba-blue">{Math.max(score, bestScore)}</div>
                </div>
              )}
            </div>

            <button
              onClick={startGame}
              className="bg-nba-blue text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-800 transition-colors shadow-lg"
            >
              Play Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Playing state
  return (
    <main className="min-h-screen bg-gray-50">
      <ResultFeedback
        isCorrect={lastAnswerCorrect}
        streak={score}
        show={showFeedback}
        onAnimationComplete={() => setShowFeedback(false)}
      />

      <header className="bg-nba-blue text-white py-4 px-4 shadow-lg">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">{score}</div>
                <div className="text-xs text-blue-200">Score</div>
              </div>
              <DifficultyBadge difficulty={getCurrentDifficulty()} />
            </div>

            <Timer
              key={timerKey}
              seconds={TIMER_SECONDS}
              onTimeUp={handleTimeUp}
              isRunning={timerRunning}
            />

            <ResetButton onClick={() => endGame(score)} label="End Game" />
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {currentQuestion && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-nba-red px-6 py-2 flex items-center justify-between">
              <span className="text-white text-sm font-medium">{currentQuestion.category}</span>
              <DifficultyBadge difficulty={currentQuestion.difficulty} />
            </div>

            <div className="p-6 border-b border-gray-100">
              <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Scenario</h2>
              <p className="text-lg text-gray-800 leading-relaxed">{currentQuestion.scenario}</p>
            </div>

            <div className="p-6 bg-gray-50">
              <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Question</h2>
              <p className="text-xl font-semibold text-gray-900">{currentQuestion.question}</p>
            </div>

            <div className="p-6 space-y-3">
              {(Object.entries(currentQuestion.options) as [AnswerKey, string][])
                .filter(([, value]) => value)
                .map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => handleAnswer(key)}
                    disabled={showResult}
                    className={getButtonClass(key)}
                  >
                    <span className="font-bold text-nba-blue mr-3 uppercase">{key}.</span>
                    <span>{value}</span>
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
