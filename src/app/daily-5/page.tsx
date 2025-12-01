'use client';

import { useState, useEffect, useCallback } from 'react';
import { CasebookQuestion, AnswerKey } from '@/data/types';
import { useVisitorId } from '@/hooks/useVisitorId';
import { DifficultyBadge } from '@/components/DifficultyBadge';
import { RuleCitation } from '@/components/RuleCitation';
import { HomeButton } from '@/components/HomeButton';
import { ResultFeedback, ResultHeader } from '@/components/ResultFeedback';
import { NamePrompt } from '@/components/NamePrompt';
import { getDailyQuestions, getTodayDateString } from '@/lib/daily-questions';

type GameState = 'loading' | 'playing' | 'completed' | 'already-completed';

interface DailyProgress {
  currentIndex: number;
  answers: Record<string, AnswerKey>;
  score: number;
}

export default function Daily5() {
  const visitorId = useVisitorId();

  const [gameState, setGameState] = useState<GameState>('loading');
  const [questions, setQuestions] = useState<CasebookQuestion[]>([]);
  const [progress, setProgress] = useState<DailyProgress>({
    currentIndex: 0,
    answers: {},
    score: 0,
  });
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
  const [streak, setStreak] = useState<{ current: number; longest: number } | null>(null);
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const [todayScore, setTodayScore] = useState<number | null>(null);

  // Load questions and check completion status
  useEffect(() => {
    const dailyQuestions = getDailyQuestions();
    setQuestions(dailyQuestions);

    // Check if already completed today
    const checkCompletion = async () => {
      if (!visitorId) return;

      try {
        const res = await fetch(`/api/daily-5/status?visitorId=${visitorId}`);
        const data = await res.json();

        if (data.completedToday) {
          setTodayScore(data.score);
          setStreak({ current: data.currentStreak, longest: data.longestStreak });
          setGameState('already-completed');
        } else {
          setStreak(data.streak ? { current: data.currentStreak || 0, longest: data.longestStreak || 0 } : null);
          setGameState('playing');
        }
      } catch (error) {
        console.error('Error checking completion:', error);
        setGameState('playing');
      }
    };

    if (visitorId) {
      checkCompletion();
    }
  }, [visitorId]);

  const currentQuestion = questions[progress.currentIndex];

  const handleAnswer = async (answer: AnswerKey) => {
    if (showResult || !currentQuestion) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuestion.correctAnswer;
    setLastAnswerCorrect(isCorrect);
    setShowFeedback(true);

    const newProgress = {
      ...progress,
      answers: { ...progress.answers, [currentQuestion.id]: answer },
      score: isCorrect ? progress.score + 1 : progress.score,
    };
    setProgress(newProgress);
    setShowResult(true);
  };

  const handleNext = useCallback(async () => {
    const nextIndex = progress.currentIndex + 1;

    if (nextIndex >= questions.length) {
      // Quiz complete - save result
      setGameState('completed');

      if (visitorId) {
        try {
          const res = await fetch('/api/daily-5/complete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              visitorId,
              score: progress.score + (lastAnswerCorrect ? 1 : 0),
              answers: progress.answers,
            }),
          });
          const data = await res.json();

          if (data.streak) {
            setStreak({ current: data.streak.current_streak, longest: data.streak.longest_streak });

            // Show name prompt if streak >= 3 and no display name
            if (data.streak.current_streak >= 3 && !data.streak.display_name) {
              setShowNamePrompt(true);
            }
          }
        } catch (error) {
          console.error('Error saving completion:', error);
        }
      }
    } else {
      setProgress(prev => ({ ...prev, currentIndex: nextIndex }));
      setSelectedAnswer(null);
      setShowResult(false);
      setShowFeedback(false);
    }
  }, [progress, questions.length, visitorId, lastAnswerCorrect]);

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

  const getShareText = () => {
    const finalScore = progress.score;
    const emojis = questions.map((q) => {
      const answer = progress.answers[q.id];
      return answer === q.correctAnswer ? '🟩' : '🟥';
    }).join('');

    return `RuleVision Daily 5 - ${getTodayDateString()}\n${emojis}\n${finalScore}/5\n\nPlay at: ${window.location.origin}`;
  };

  const handleShare = async () => {
    const text = getShareText();

    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch {
        // Fall back to clipboard
        navigator.clipboard.writeText(text);
      }
    } else {
      navigator.clipboard.writeText(text);
      alert('Results copied to clipboard!');
    }
  };

  const getButtonClass = (option: AnswerKey) => {
    const base = 'w-full text-left p-4 rounded-lg border transition-all duration-200 ';

    if (!showResult) {
      return base + 'bg-rv-steel/50 border-white/10 hover:border-rv-gold/50 hover:bg-rv-steel cursor-pointer text-white';
    }

    if (option === currentQuestion?.correctAnswer) {
      return base + 'border-rv-success bg-rv-success/20 text-rv-success';
    }

    if (option === selectedAnswer && option !== currentQuestion?.correctAnswer) {
      return base + 'border-rv-danger bg-rv-danger/20 text-rv-danger';
    }

    return base + 'bg-rv-steel/30 border-white/5 opacity-50 text-rv-silver/60';
  };

  // Loading state
  if (gameState === 'loading' || !questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rv-navy">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rv-gold"></div>
      </div>
    );
  }

  // Already completed today
  if (gameState === 'already-completed') {
    return (
      <main className="min-h-screen bg-rv-navy">
        <header className="header-gradient py-5 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl">📅</span>
                  <h1 className="text-2xl font-bold tracking-tight text-white">Daily 5</h1>
                </div>
                <p className="text-rv-silver/60 text-sm">Come back tomorrow!</p>
              </div>
              <HomeButton />
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-rv-slate rounded-xl border border-white/5 p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              You&apos;ve completed today&apos;s Daily 5!
            </h2>
            <p className="text-rv-silver/60 mb-6">
              You scored <span className="font-bold text-rv-gold">{todayScore}/5</span>
            </p>

            {streak && (
              <div className="bg-rv-gold/10 border border-rv-gold/20 rounded-lg p-4 mb-6">
                <div className="text-3xl mb-2">🔥</div>
                <div className="text-2xl font-bold text-rv-gold">{streak.current} day streak!</div>
                <div className="text-sm text-rv-silver/60">Best: {streak.longest} days</div>
              </div>
            )}

            <p className="text-rv-silver/40 mb-6">New questions at midnight</p>

            <button
              onClick={handleShare}
              className="btn-primary"
            >
              Share Results
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Completed state (just finished)
  if (gameState === 'completed') {
    const finalScore = progress.score;

    return (
      <main className="min-h-screen bg-rv-navy">
        <NamePrompt
          isOpen={showNamePrompt}
          onSubmit={handleNameSubmit}
          onClose={() => setShowNamePrompt(false)}
          title="Great streak!"
          subtitle="Add your name to the leaderboard:"
        />

        <header className="header-gradient py-5 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl">📅</span>
                  <h1 className="text-2xl font-bold tracking-tight text-white">Daily 5</h1>
                </div>
                <p className="text-rv-silver/60 text-sm">Complete!</p>
              </div>
              <HomeButton />
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-rv-slate rounded-xl border border-white/5 p-8 text-center">
            <div className="text-6xl mb-4">
              {finalScore === 5 ? '🏆' : finalScore >= 3 ? '🎉' : '📚'}
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {finalScore}/5
            </h2>
            <p className="text-rv-silver/60 mb-6">
              {finalScore === 5
                ? 'Perfect! You know the rulebook!'
                : finalScore >= 4
                ? 'Excellent work, ref!'
                : finalScore >= 3
                ? 'Solid performance!'
                : 'Keep studying the casebook!'}
            </p>

            {/* Result grid */}
            <div className="flex justify-center gap-2 mb-6">
              {questions.map((q) => {
                const answer = progress.answers[q.id];
                const isCorrect = answer === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl ${
                      isCorrect ? 'bg-rv-success text-white' : 'bg-rv-danger text-white'
                    }`}
                  >
                    {isCorrect ? '✓' : '✗'}
                  </div>
                );
              })}
            </div>

            {streak && (
              <div className="bg-rv-gold/10 border border-rv-gold/20 rounded-lg p-4 mb-6">
                <div className="text-3xl mb-2">🔥</div>
                <div className="text-2xl font-bold text-rv-gold">{streak.current} day streak!</div>
                {streak.current > streak.longest && (
                  <div className="text-sm text-rv-gold/80">New personal best!</div>
                )}
              </div>
            )}

            <button
              onClick={handleShare}
              className="btn-primary"
            >
              Share Results
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
        streak={progress.score}
        show={showFeedback}
        onAnimationComplete={() => setShowFeedback(false)}
      />

      <header className="header-gradient py-5 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xl">📅</span>
                <h1 className="text-2xl font-bold tracking-tight text-white">Daily 5</h1>
              </div>
              <p className="text-rv-silver/60 text-sm">{getTodayDateString()}</p>
            </div>
            <HomeButton />
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Progress indicator */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-rv-silver/60">
              Question {progress.currentIndex + 1} of 5
            </span>
            <span className="text-sm font-medium text-rv-gold">
              Score: {progress.score}/{progress.currentIndex + (showResult ? 1 : 0)}
            </span>
          </div>
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((i) => {
              const q = questions[i];
              const answer = progress.answers[q?.id];
              let bgColor = 'bg-rv-steel';

              if (i < progress.currentIndex || (i === progress.currentIndex && showResult)) {
                bgColor = answer === q?.correctAnswer ? 'bg-rv-success' : 'bg-rv-danger';
              } else if (i === progress.currentIndex) {
                bgColor = 'bg-rv-gold';
              }

              return <div key={i} className={`h-2 flex-1 rounded-full ${bgColor}`} />;
            })}
          </div>
        </div>

        {/* Question Card */}
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
                .filter(([, value]) => value)
                .map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => handleAnswer(key)}
                    disabled={showResult}
                    className={getButtonClass(key)}
                  >
                    <span className="font-bold text-rv-gold mr-3 uppercase">{key}.</span>
                    <span>{value}</span>
                  </button>
                ))}
            </div>

            {showResult && selectedAnswer && (
              <div
                className={`p-5 border-t ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? 'border-rv-success/30 bg-rv-success/10'
                    : 'border-rv-danger/30 bg-rv-danger/10'
                }`}
              >
                <ResultHeader
                  isCorrect={selectedAnswer === currentQuestion.correctAnswer}
                  streakCount={progress.score}
                />

                <RuleCitation
                  ruling={currentQuestion.ruling}
                  ruleReference={currentQuestion.ruleReference}
                  casebookReference={currentQuestion.casebookReference}
                />
              </div>
            )}
          </div>
        )}

        {showResult && (
          <div className="mt-6 text-center">
            <button
              onClick={handleNext}
              className="btn-primary"
            >
              {progress.currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
