'use client';

import { useState, useEffect, useCallback } from 'react';
import { CasebookQuestion, AnswerKey } from '@/data/types';

type SuddenDeathDifficulty = 'rookie' | 'veteran' | 'expert';
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
  const [difficultyReached, setDifficultyReached] = useState<SuddenDeathDifficulty>('rookie');

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

  const getCurrentDifficulty = useCallback((): SuddenDeathDifficulty => {
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

    const isCorrect = answer === currentQuestion.correct_answer;
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
    const base = 'w-full text-left p-4 rounded-lg border transition-all duration-200 ';

    if (!showResult) {
      return base + 'bg-rv-steel/50 border-white/10 hover:border-rv-danger/50 hover:bg-rv-steel cursor-pointer text-white';
    }

    if (option === currentQuestion?.correct_answer) {
      return base + 'border-rv-success bg-rv-success/20 text-rv-success';
    }

    if (option === selectedAnswer && option !== currentQuestion?.correct_answer) {
      return base + 'border-rv-danger bg-rv-danger/20 text-rv-danger';
    }

    return base + 'bg-rv-steel/30 border-white/5 opacity-50 text-rv-silver/60';
  };

  // Ready state
  if (gameState === 'ready') {
    return (
      <main className="min-h-screen bg-rv-navy">
        <header className="header-gradient py-5 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl">💀</span>
                  <h1 className="text-2xl font-bold tracking-tight text-white">Sudden Death</h1>
                </div>
                <p className="text-rv-silver/60 text-sm">One wrong answer ends it all</p>
              </div>
              <HomeButton />
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-rv-slate rounded-xl border border-white/5 p-8 text-center">
            <div className="text-6xl mb-4">💀</div>
            <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>

            <div className="text-left bg-rv-navy/50 rounded-lg p-6 mb-6 space-y-3 border border-white/5">
              <div className="flex items-start gap-3">
                <span className="text-xl">⏱️</span>
                <p className="text-rv-silver"><strong className="text-white">10 seconds</strong> per question</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📈</span>
                <p className="text-rv-silver">Difficulty <strong className="text-white">increases</strong> as you progress</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">❌</span>
                <p className="text-rv-silver"><strong className="text-white">One wrong answer</strong> or timeout = Game Over</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🏆</span>
                <p className="text-rv-silver">Score 10+ to join the <strong className="text-white">leaderboard</strong></p>
              </div>
            </div>

            {bestScore !== null && bestScore > 0 && (
              <div className="bg-rv-danger/10 border border-rv-danger/20 rounded-lg p-4 mb-6">
                <div className="text-sm text-rv-silver/60">Your Best</div>
                <div className="text-3xl font-bold text-rv-danger">{bestScore}</div>
              </div>
            )}

            <button
              onClick={startGame}
              className="bg-rv-danger text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-600 transition-colors shadow-lg"
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
      <main className="min-h-screen bg-rv-navy">
        <NamePrompt
          isOpen={showNamePrompt}
          onSubmit={handleNameSubmit}
          onClose={() => setShowNamePrompt(false)}
          title="Impressive run!"
          subtitle="Add your name to the leaderboard:"
        />

        <header className="header-gradient py-5 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl">💀</span>
                  <h1 className="text-2xl font-bold tracking-tight text-white">Game Over</h1>
                </div>
              </div>
              <HomeButton />
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-rv-slate rounded-xl border border-white/5 p-8 text-center">
            <div className="text-6xl mb-4">
              {score >= 20 ? '🏆' : score >= 10 ? '🎉' : score >= 5 ? '👏' : '💪'}
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">{score}</h2>
            <p className="text-rv-silver/60 mb-2">Questions Answered</p>

            {isNewBest && (
              <div className="text-lg font-bold text-rv-success mb-4">
                🎉 New Personal Best!
              </div>
            )}

            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-rv-navy/50 border border-white/5 rounded-lg px-4 py-2">
                <div className="text-sm text-rv-silver/50">Difficulty Reached</div>
                <DifficultyBadge difficulty={difficultyReached} />
              </div>
              {bestScore !== null && (
                <div className="bg-rv-navy/50 border border-white/5 rounded-lg px-4 py-2">
                  <div className="text-sm text-rv-silver/50">Personal Best</div>
                  <div className="font-bold text-rv-danger">{Math.max(score, bestScore)}</div>
                </div>
              )}
            </div>

            <button
              onClick={startGame}
              className="bg-rv-danger text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-600 transition-colors shadow-lg"
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
    <main className="min-h-screen bg-rv-navy">
      <ResultFeedback
        isCorrect={lastAnswerCorrect}
        streak={score}
        show={showFeedback}
        onAnimationComplete={() => setShowFeedback(false)}
      />

      <header className="header-gradient py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{score}</div>
                <div className="text-xs text-rv-silver/60">Score</div>
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
          <div className="bg-rv-slate rounded-xl border border-white/5 overflow-hidden">
            <div className="bg-rv-navy/50 px-5 py-3 flex items-center justify-between border-b border-white/5">
              <span className="text-rv-silver text-sm font-medium">{currentQuestion.category}</span>
              <DifficultyBadge difficulty={currentQuestion.difficulty} />
            </div>

            <div className="p-5 border-b border-white/5">
              <h2 className="text-xs uppercase tracking-wider text-rv-silver/50 mb-2">Scenario</h2>
              <p className="text-white leading-relaxed">{currentQuestion.scenario}</p>
            </div>

            <div className="p-5 bg-rv-navy/30">
              <h2 className="text-xs uppercase tracking-wider text-rv-silver/50 mb-2">Question</h2>
              <p className="text-lg font-semibold text-white">{currentQuestion.question}</p>
            </div>

            <div className="p-5 space-y-3">
              {(Object.entries(currentQuestion.options) as [AnswerKey, string][])
                .filter(([key, value]) => value && key === key.toUpperCase())
                .map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => handleAnswer(key)}
                    disabled={showResult}
                    className={getButtonClass(key)}
                  >
                    <span className="font-bold text-rv-danger mr-3 uppercase">{key}.</span>
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
