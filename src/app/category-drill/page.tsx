'use client';

import { useState, useEffect, useCallback } from 'react';
import { CasebookQuestion, AnswerKey } from '@/data/types';
import { casebookQuestions, getCategories } from '@/data/casebook';
import { useVisitorId } from '@/hooks/useVisitorId';
import { DifficultyBadge } from '@/components/DifficultyBadge';
import { RuleCitation } from '@/components/RuleCitation';
import { HomeButton } from '@/components/HomeButton';
import { ResultFeedback, ResultHeader } from '@/components/ResultFeedback';

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryQuestions, setCategoryQuestions] = useState<CasebookQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
  const [categoryStats, setCategoryStats] = useState<CategoryStats>({});

  const categories = getCategories();

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

  const startCategory = (category: string) => {
    const questions = casebookQuestions.filter(q => q.category === category);
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
    const isCorrect = answer === currentQuestion.correctAnswer;
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
    if (percentage >= 90) return 'text-green-600 bg-green-100';
    if (percentage >= 70) return 'text-yellow-600 bg-yellow-100';
    if (percentage > 0) return 'text-orange-600 bg-orange-100';
    return 'text-gray-400 bg-gray-100';
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

  // Category selection state
  if (gameState === 'select-category') {
    return (
      <main className="min-h-screen bg-gray-50">
        <header className="bg-nba-blue text-white py-6 px-4 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">📚</span>
                  <h1 className="text-3xl font-bold tracking-tight">Category Drill</h1>
                </div>
                <p className="text-blue-200">Master each rule category</p>
              </div>
              <HomeButton className="text-white hover:text-blue-200" />
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Select a Category</h2>
            <p className="text-gray-600">Answer all questions to reach 100% mastery</p>
          </div>

          <div className="space-y-3">
            {categories.map(category => {
              const questionCount = casebookQuestions.filter(q => q.category === category).length;
              const mastery = getMasteryPercentage(category);
              const stats = categoryStats[category];

              return (
                <button
                  key={category}
                  onClick={() => startCategory(category)}
                  className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-left hover:shadow-md hover:border-nba-blue transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">{category}</h3>
                      <p className="text-sm text-gray-500">
                        {questionCount} questions
                        {stats && stats.total > 0 && (
                          <span className="ml-2">• {stats.correct}/{stats.total} correct</span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {mastery > 0 && (
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${getMasteryColor(mastery)}`}>
                          {mastery}%
                        </span>
                      )}
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        mastery >= 90 ? 'bg-green-500' : mastery >= 70 ? 'bg-yellow-500' : 'bg-nba-blue'
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
      <main className="min-h-screen bg-gray-50">
        <header className="bg-nba-blue text-white py-6 px-4 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">📚</span>
                  <h1 className="text-3xl font-bold tracking-tight">Drill Complete!</h1>
                </div>
                <p className="text-blue-200">{selectedCategory}</p>
              </div>
              <HomeButton className="text-white hover:text-blue-200" />
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">
              {percentage === 100 ? '🏆' : percentage >= 80 ? '🎉' : percentage >= 60 ? '👏' : '📚'}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {score.correct}/{score.total}
            </h2>
            <p className="text-xl text-gray-600 mb-4">{percentage}% Accuracy</p>

            <p className="text-gray-600 mb-6">
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
                className="bg-nba-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => setGameState('select-category')}
                className="border-2 border-gray-200 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
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
    <main className="min-h-screen bg-gray-50">
      <ResultFeedback
        isCorrect={lastAnswerCorrect}
        streak={score.correct}
        show={showFeedback}
        onAnimationComplete={() => setShowFeedback(false)}
      />

      <header className="bg-nba-blue text-white py-6 px-4 shadow-lg">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl">📚</span>
                <h1 className="text-2xl font-bold tracking-tight">{selectedCategory}</h1>
              </div>
              <p className="text-blue-200">
                Question {currentIndex + 1} of {categoryQuestions.length}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{score.correct}/{score.total}</div>
              <div className="text-xs text-blue-200">Score</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-2 bg-blue-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${((currentIndex + (showResult ? 1 : 0)) / categoryQuestions.length) * 100}%` }}
            />
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

            {showResult && selectedAnswer && (
              <div
                className={`p-6 border-t-4 ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                }`}
              >
                <ResultHeader
                  isCorrect={selectedAnswer === currentQuestion.correctAnswer}
                  streakCount={score.correct}
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
              className="bg-nba-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
            >
              {currentIndex < categoryQuestions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
