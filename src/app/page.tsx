'use client';

import { Suspense, useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { CaseQuestion, AnswerKey, Difficulty, VoteStats } from '@/data/types';
import { casebookQuestions, getCategories } from '@/data/casebook';
import { useVisitorId } from '@/hooks/useVisitorId';
import { useStreak } from '@/hooks/useStreak';
import { StreakBadge } from '@/components/StreakBadge';
import { VoteSplit } from '@/components/VoteSplit';
import { Leaderboard } from '@/components/Leaderboard';
import { DifficultyBadge } from '@/components/DifficultyBadge';
import { RuleCitation } from '@/components/RuleCitation';

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nba-blue"></div>
    </div>
  );
}

function CallSimulatorContent() {
  const searchParams = useSearchParams();
  const visitorId = useVisitorId();
  const { streak, loading: streakLoading, recordAnswer } = useStreak(visitorId);

  const [currentQuestion, setCurrentQuestion] = useState<CaseQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [voteStats, setVoteStats] = useState<VoteStats | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(new Set());
  const [isFromEmail, setIsFromEmail] = useState(false);

  const categories = getCategories();

  const getFilteredQuestions = useCallback(() => {
    let filtered = casebookQuestions;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(q => q.category === selectedCategory);
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty === selectedDifficulty);
    }

    return filtered;
  }, [selectedCategory, selectedDifficulty]);

  const loadNewQuestion = useCallback(() => {
    const filtered = getFilteredQuestions();
    const available = filtered.filter(q => !usedQuestionIds.has(q.id));

    // Reset if we've used all questions
    if (available.length === 0) {
      setUsedQuestionIds(new Set());
      const randomIndex = Math.floor(Math.random() * filtered.length);
      setCurrentQuestion(filtered[randomIndex]);
      setUsedQuestionIds(new Set([filtered[randomIndex].id]));
    } else {
      const randomIndex = Math.floor(Math.random() * available.length);
      setCurrentQuestion(available[randomIndex]);
      setUsedQuestionIds(prev => new Set([...prev, available[randomIndex].id]));
    }

    setSelectedAnswer(null);
    setShowResult(false);
    setVoteStats(null);
    setIsFromEmail(false);
  }, [getFilteredQuestions, usedQuestionIds]);

  // Handle deep link from email
  useEffect(() => {
    const caseId = searchParams.get('case');
    if (caseId) {
      const linkedQuestion = casebookQuestions.find(q => q.id === caseId);
      if (linkedQuestion) {
        setCurrentQuestion(linkedQuestion);
        setIsFromEmail(true);
        setSelectedAnswer(null);
        setShowResult(false);
        setVoteStats(null);
        return;
      }
    }
    loadNewQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle filter change (but not on initial mount)
  useEffect(() => {
    if (!isFromEmail && currentQuestion) {
      loadNewQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, selectedDifficulty]);

  const handleAnswer = async (answer: AnswerKey) => {
    if (showResult || !currentQuestion) return;

    setSelectedAnswer(answer);

    const isCorrect = answer === currentQuestion.correctAnswer;

    // Submit vote to get community stats
    try {
      const res = await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId: currentQuestion.id, answer }),
      });
      const data = await res.json();
      if (data.success) {
        setVoteStats(data.stats);
      }
    } catch (error) {
      console.error('Error submitting vote:', error);
    }

    // Record answer for streak
    await recordAnswer(isCorrect);

    // Update local score
    if (isCorrect) {
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }

    setShowResult(true);
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

  if (!currentQuestion) {
    return <LoadingSpinner />;
  }

  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-nba-blue text-white py-6 px-4 shadow-lg">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">What&apos;s the Call?</h1>
              <p className="text-blue-200 mt-1">NBA Rules Training Simulator</p>
            </div>
            <Leaderboard currentVisitorId={visitorId} />
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Streak Badge */}
        <div className="mb-6">
          <StreakBadge streak={streak} loading={streakLoading} />
        </div>

        {/* Score & Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
            <span className="text-gray-600">Session: </span>
            <span className="font-bold text-nba-blue">{score.correct}/{score.total}</span>
            {score.total > 0 && (
              <span className="text-gray-500 ml-2">({percentage}%)</span>
            )}
          </div>

          <div className="flex gap-2 flex-wrap">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-nba-blue text-sm"
            >
              <option value="all">All Levels</option>
              <option value="rookie">🌱 Rookie</option>
              <option value="veteran">⭐ Veteran</option>
              <option value="expert">🔥 Expert</option>
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-nba-blue text-sm"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Category & Difficulty Badge */}
          <div className="bg-nba-red px-6 py-2 flex items-center justify-between">
            <span className="text-white text-sm font-medium">{currentQuestion.category}</span>
            <DifficultyBadge difficulty={currentQuestion.difficulty} />
          </div>

          {/* Scenario */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Scenario</h2>
            <p className="text-lg text-gray-800 leading-relaxed">{currentQuestion.scenario}</p>
          </div>

          {/* Question */}
          <div className="p-6 bg-gray-50">
            <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Question</h2>
            <p className="text-xl font-semibold text-gray-900">{currentQuestion.question}</p>
          </div>

          {/* Answer Options */}
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

          {/* Result Section */}
          {showResult && selectedAnswer && (
            <div className={`p-6 border-t-4 ${
              selectedAnswer === currentQuestion.correctAnswer
                ? 'border-green-500 bg-green-50'
                : 'border-red-500 bg-red-50'
            }`}>
              {/* Result Header */}
              <div className="flex items-center gap-2 mb-4">
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <>
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-800 font-bold text-xl">Correct!</span>
                    {streak && streak.currentStreak > 1 && (
                      <span className="ml-2 text-green-600 text-sm">
                        🔥 {streak.currentStreak} day streak!
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-red-800 font-bold text-xl">Incorrect</span>
                  </>
                )}
              </div>

              {/* Community Vote Split */}
              {voteStats && voteStats.totalVotes > 1 && (
                <VoteSplit
                  stats={voteStats}
                  options={currentQuestion.options}
                  selectedAnswer={selectedAnswer}
                  correctAnswer={currentQuestion.correctAnswer}
                />
              )}

              {/* Rule Citation - The "aha" moment */}
              <RuleCitation
                ruling={currentQuestion.ruling}
                ruleReference={currentQuestion.ruleReference}
                ruleLink={currentQuestion.ruleLink}
              />
            </div>
          )}
        </div>

        {/* Next Question Button */}
        {showResult && (
          <div className="mt-6 text-center">
            <button
              onClick={loadNewQuestion}
              className="bg-nba-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Next Scenario
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Questions sourced from the NBA Official Case Book</p>
          <p className="mt-1">
            {casebookQuestions.length} scenarios available
          </p>
        </footer>
      </div>
    </main>
  );
}

export default function CallSimulator() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CallSimulatorContent />
    </Suspense>
  );
}
