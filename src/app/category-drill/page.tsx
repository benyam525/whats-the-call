'use client';

import { useState, useEffect, useCallback } from 'react';
import { CasebookQuestion, AnswerKey, ParentCategory, PARENT_CATEGORY_NAMES } from '@/data/types';
import { casebookQuestions, getParentCategories } from '@/data/casebook';
import { useVisitorId } from '@/hooks/useVisitorId';
import { DifficultyBadge } from '@/components/DifficultyBadge';
import { RuleCitation } from '@/components/RuleCitation';
import { HomeButton } from '@/components/HomeButton';
import { ResultFeedback, ResultHeader } from '@/components/ResultFeedback';
import { RefGodPanel, GoDeeperButton } from '@/components/RefGodPanel';

type GameState = 'select-category' | 'playing' | 'completed';

interface CategoryProgress {
  correct: number;
  total: number;
}

interface CategoryStats {
  [category: string]: CategoryProgress;
}

export default function CategoryDrill() {
  const visitorId = useVisitorId();

  const [gameState, setGameState] = useState<GameState>('select-category');
  const [selectedCategory, setSelectedCategory] = useState<ParentCategory | null>(null);
  const [categoryQuestions, setCategoryQuestions] = useState<CasebookQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
  const [categoryStats, setCategoryStats] = useState<CategoryStats>({});
  const [showRefGodPanel, setShowRefGodPanel] = useState(false);

  const categories = getParentCategories();

  // Fetch category stats
  useEffect(() => {
    if (!visitorId) return;

    const fetchStats = async () => {
      try {
        const res = await fetch(`/api/category/progress?visitorId=${visitorId}`);
        const data = await res.json();
        if (data.stats) {
          const statsMap: CategoryStats = {};
          data.stats.forEach((s: { category: string; correct: number; total: number }) => {
            statsMap[s.category] = { correct: s.correct, total: s.total };
          });
          setCategoryStats(statsMap);
        }
      } catch (error) {
        console.error('Error fetching category stats:', error);
      }
    };

    fetchStats();
  }, [visitorId]);

  const startCategory = (category: ParentCategory) => {
    const questions = casebookQuestions.filter(q => q.parent_category === category);
    // Shuffle questions
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setCategoryQuestions(shuffled);
    setSelectedCategory(category);
    setCurrentIndex(0);
    setScore({ correct: 0, total: 0 });
    setSelectedAnswer(null);
    setShowResult(false);
    setGameState('playing');
  };

  const currentQuestion = categoryQuestions[currentIndex];

  const handleAnswer = async (answer: AnswerKey) => {
    if (showResult || !currentQuestion) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuestion.correct_answer;
    setLastAnswerCorrect(isCorrect);
    setShowFeedback(true);

    const newScore = {
      correct: isCorrect ? score.correct + 1 : score.correct,
      total: score.total + 1,
    };
    setScore(newScore);
    setShowResult(true);

    // Record progress
    if (visitorId && selectedCategory) {
      try {
        await fetch('/api/category/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            visitorId,
            category: selectedCategory,
            isCorrect,
          }),
        });
      } catch (error) {
        console.error('Error saving progress:', error);
      }
    }
  };

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= categoryQuestions.length) {
      setGameState('completed');

      // Update local stats
      if (selectedCategory) {
        setCategoryStats(prev => ({
          ...prev,
          [selectedCategory]: {
            correct: (prev[selectedCategory]?.correct || 0) + score.correct,
            total: (prev[selectedCategory]?.total || 0) + score.total,
          },
        }));
      }
    } else {
      setCurrentIndex(nextIndex);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowFeedback(false);
    }
  }, [currentIndex, categoryQuestions.length, selectedCategory, score]);

  const getMasteryPercentage = (category: string): number => {
    const stats = categoryStats[category];
    if (!stats || stats.total === 0) return 0;
    return Math.round((stats.correct / stats.total) * 100);
  };

  const getMasteryColor = (percentage: number): string => {
    if (percentage >= 90) return 'text-rv-success bg-rv-success/10 border-rv-success/20';
    if (percentage >= 70) return 'text-rv-warning bg-rv-warning/10 border-rv-warning/20';
    if (percentage > 0) return 'text-rv-accent-bright bg-rv-accent/10 border-rv-accent/20';
    return 'text-rv-silver/40 bg-rv-steel/50 border-white/5';
  };

  const getButtonClass = (option: AnswerKey) => {
    const base = 'w-full text-left p-4 rounded-lg border transition-all duration-200 ';

    if (!showResult) {
      return base + 'bg-rv-steel/50 border-white/10 hover:border-rv-success/50 hover:bg-rv-steel cursor-pointer text-white';
    }

    if (option === currentQuestion?.correct_answer) {
      return base + 'border-rv-success bg-rv-success/20 text-rv-success';
    }

    if (option === selectedAnswer && option !== currentQuestion?.correct_answer) {
      return base + 'border-rv-danger bg-rv-danger/20 text-rv-danger';
    }

    return base + 'bg-rv-steel/30 border-white/5 opacity-50 text-rv-silver/60';
  };

  // Category selection state
  if (gameState === 'select-category') {
    return (
      <main className="min-h-screen bg-rv-navy">
        <header className="header-gradient py-5 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl">📚</span>
                  <h1 className="text-2xl font-bold tracking-tight text-white">Category Drill</h1>
                </div>
                <p className="text-rv-silver/60 text-sm">Master each rule category</p>
              </div>
              <HomeButton />
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="mb-5">
            <p className="text-rv-silver/60 text-sm">Select a category to practice</p>
          </div>

          <div className="space-y-3">
            {categories.map(category => {
              const questionCount = casebookQuestions.filter(q => q.parent_category === category).length;
              const mastery = getMasteryPercentage(category);
              const stats = categoryStats[category];
              const displayName = PARENT_CATEGORY_NAMES[category] || category;

              return (
                <button
                  key={category}
                  onClick={() => startCategory(category)}
                  className="w-full bg-rv-slate rounded-xl border border-white/5 p-4 text-left hover:border-rv-success/30 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-rv-success transition-colors">{displayName}</h3>
                      <p className="text-sm text-rv-silver/60">
                        {questionCount} questions
                        {stats && stats.total > 0 && (
                          <span className="ml-2">• {stats.correct}/{stats.total} correct</span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {mastery > 0 && (
                        <span className={`px-3 py-1 rounded-full text-sm font-bold border ${getMasteryColor(mastery)}`}>
                          {mastery}%
                        </span>
                      )}
                      <svg className="w-5 h-5 text-rv-silver/40 group-hover:text-rv-success transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3 h-1.5 bg-rv-navy/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        mastery >= 90 ? 'bg-rv-success' : mastery >= 70 ? 'bg-rv-warning' : 'bg-rv-accent'
                      }`}
                      style={{ width: `${mastery}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  // Completed state
  if (gameState === 'completed') {
    const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

    return (
      <main className="min-h-screen bg-rv-navy">
        <header className="header-gradient py-5 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl">📚</span>
                  <h1 className="text-2xl font-bold tracking-tight text-white">Drill Complete!</h1>
                </div>
                <p className="text-rv-silver/60 text-sm">{selectedCategory ? PARENT_CATEGORY_NAMES[selectedCategory] : ''}</p>
              </div>
              <HomeButton />
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-rv-slate rounded-xl border border-white/5 p-8 text-center">
            <div className="text-6xl mb-4">
              {percentage === 100 ? '🏆' : percentage >= 80 ? '🎉' : percentage >= 60 ? '👏' : '📚'}
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {score.correct}/{score.total}
            </h2>
            <p className="text-xl text-rv-silver/60 mb-4">{percentage}% Accuracy</p>

            <p className="text-rv-silver/60 mb-6">
              {percentage === 100
                ? 'Perfect! You\'ve mastered this category!'
                : percentage >= 80
                ? 'Excellent work! Almost there!'
                : percentage >= 60
                ? 'Good progress! Keep practicing!'
                : 'Keep studying! You\'ll get there!'}
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => startCategory(selectedCategory!)}
                className="btn-primary"
              >
                Try Again
              </button>
              <button
                onClick={() => setGameState('select-category')}
                className="btn-secondary"
              >
                Other Categories
              </button>
            </div>
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
        streak={score.correct}
        show={showFeedback}
        onAnimationComplete={() => setShowFeedback(false)}
      />

      <header className="header-gradient py-5 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xl">📚</span>
                <h1 className="text-xl font-bold tracking-tight text-white">{selectedCategory ? PARENT_CATEGORY_NAMES[selectedCategory] : ''}</h1>
              </div>
              <p className="text-rv-silver/60 text-sm">
                Question {currentIndex + 1} of {categoryQuestions.length}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{score.correct}/{score.total}</div>
              <div className="text-xs text-rv-silver/60">Score</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-1.5 bg-rv-steel rounded-full overflow-hidden">
            <div
              className="h-full bg-rv-success transition-all duration-300"
              style={{ width: `${((currentIndex + (showResult ? 1 : 0)) / categoryQuestions.length) * 100}%` }}
            />
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
                    <span className="font-bold text-rv-success mr-3 uppercase">{key}.</span>
                    <span>{value}</span>
                  </button>
                ))}
            </div>

            {showResult && selectedAnswer && (
              <div
                className={`p-5 border-t ${
                  selectedAnswer === currentQuestion.correct_answer
                    ? 'border-rv-success/30 bg-rv-success/10'
                    : 'border-rv-danger/30 bg-rv-danger/10'
                }`}
              >
                <ResultHeader
                  isCorrect={selectedAnswer === currentQuestion.correct_answer}
                  streakCount={score.correct}
                />

                <RuleCitation
                  ruling={currentQuestion.ruling}
                  ruleReference={currentQuestion.ruleReference}
                  casebookReference={currentQuestion.casebookReference}
                  questionText={currentQuestion.question}
                  scenarioText={currentQuestion.scenario}
                />

                {/* Go Deeper Button */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <GoDeeperButton onClick={() => setShowRefGodPanel(true)} className="w-full" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Ref God Panel */}
        {currentQuestion && selectedAnswer && (
          <RefGodPanel
            isOpen={showRefGodPanel}
            onClose={() => setShowRefGodPanel(false)}
            question={currentQuestion}
            userAnswer={selectedAnswer}
            wasCorrect={selectedAnswer === currentQuestion.correct_answer}
          />
        )}

        {showResult && (
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setShowRefGodPanel(false);
                handleNext();
              }}
              className="btn-primary"
            >
              {currentIndex < categoryQuestions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
