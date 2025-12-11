'use client';

import { Suspense, useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CasebookQuestion, AnswerKey, Difficulty, VoteStats } from '@/data/types';
import { casebookQuestions, getCategories } from '@/data/casebook';
import { useVisitorId } from '@/hooks/useVisitorId';
import { useStreak } from '@/hooks/useStreak';
import { useAnswerTracking } from '@/hooks/useAnswerTracking';
import { StreakBadge } from '@/components/StreakBadge';
import { VoteSplit } from '@/components/VoteSplit';
import { DifficultyBadge } from '@/components/DifficultyBadge';
import { RuleCitation } from '@/components/RuleCitation';
import { ResultFeedback, ResultHeader } from '@/components/ResultFeedback';
import { RefGodPanel, GoDeeperButton } from '@/components/RefGodPanel';

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );
}

function FilmRoomContent() {
  const searchParams = useSearchParams();
  const visitorId = useVisitorId();
  const { streak, loading: streakLoading, recordAnswer } = useStreak(visitorId);
  const { trackAnswer } = useAnswerTracking();
  const questionStartTime = useRef<number>(Date.now());

  const [currentQuestion, setCurrentQuestion] = useState<CasebookQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [voteStats, setVoteStats] = useState<VoteStats | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(new Set());
  const [isFromEmail, setIsFromEmail] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
  const [showRefGodPanel, setShowRefGodPanel] = useState(false);

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
    setShowFeedback(false);
    setShowRefGodPanel(false);
    questionStartTime.current = Date.now();
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
    if (showResult || !currentQuestion || !visitorId) return;

    const responseTimeMs = Date.now() - questionStartTime.current;
    setSelectedAnswer(answer);

    const isCorrect = answer === currentQuestion.correct_answer;
    setLastAnswerCorrect(isCorrect);
    setShowFeedback(true);

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

    // Track answer for dashboard
    trackAnswer({
      visitorId,
      questionId: currentQuestion.id,
      category: currentQuestion.category || currentQuestion.parent_category || 'unknown',
      difficulty: currentQuestion.difficulty as 'rookie' | 'veteran' | 'expert',
      mode: 'film_room',
      answerGiven: answer,
      correctAnswer: currentQuestion.correct_answer,
      isCorrect,
      responseTimeMs,
    });

    // Update local score
    if (isCorrect) {
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }

    setShowResult(true);
  };

  const getButtonClass = (option: AnswerKey) => {
    const base = 'w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ';

    if (!showResult) {
      return base + 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 cursor-pointer text-gray-900';
    }

    if (option === currentQuestion?.correct_answer) {
      return base + 'border-emerald-500 bg-emerald-50 text-emerald-900';
    }

    if (option === selectedAnswer && option !== currentQuestion?.correct_answer) {
      return base + 'border-red-500 bg-red-50 text-red-900';
    }

    return base + 'bg-gray-50 border-gray-100 opacity-50 text-gray-400';
  };

  if (!currentQuestion) {
    return <LoadingSpinner />;
  }

  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Feedback overlay */}
      <ResultFeedback
        isCorrect={lastAnswerCorrect}
        streak={score.correct}
        show={showFeedback}
        onAnimationComplete={() => setShowFeedback(false)}
      />

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-xl">
                🎬
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Film Room</h1>
                <p className="text-gray-500 text-sm">Practice at your own pace</p>
              </div>
            </div>
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Streak Badge */}
        <div className="mb-5">
          <StreakBadge streak={streak} loading={streakLoading} />
        </div>

        {/* Score & Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
          <div className="bg-white rounded-xl px-4 py-2.5 border border-gray-200 shadow-sm">
            <span className="text-gray-500 text-sm">Session: </span>
            <span className="font-bold text-gray-900">{score.correct}/{score.total}</span>
            {score.total > 0 && (
              <span className="text-gray-400 ml-2 text-sm">({percentage}%)</span>
            )}
          </div>

          <div className="flex gap-2 flex-wrap">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
              className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm"
            >
              <option value="all">All Levels</option>
              <option value="rookie">🌱 Rookie</option>
              <option value="veteran">⭐ Veteran</option>
              <option value="expert">🔥 Expert</option>
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Category & Difficulty Badge */}
          <div className="bg-gray-50 px-5 py-3 flex items-center justify-between border-b border-gray-100">
            <span className="text-gray-600 text-sm font-medium">{currentQuestion.category}</span>
            <DifficultyBadge difficulty={currentQuestion.difficulty} />
          </div>

          {/* Scenario */}
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">Scenario</h2>
            <p className="text-gray-800 leading-relaxed">{currentQuestion.scenario}</p>
          </div>

          {/* Question */}
          <div className="p-5 bg-blue-50/50">
            <h2 className="text-xs uppercase tracking-wider text-blue-600/70 mb-2 font-medium">Question</h2>
            <p className="text-lg font-semibold text-gray-900">{currentQuestion.question}</p>
          </div>

          {/* Answer Options */}
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
                  <span className="font-bold text-blue-600 mr-3 uppercase">{key}.</span>
                  <span>{value}</span>
                </button>
              ))}
          </div>

          {/* Result Section */}
          {showResult && selectedAnswer && (
            <div className={`p-5 border-t-2 ${
              selectedAnswer === currentQuestion.correct_answer
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-red-500 bg-red-50'
            }`}>
              {/* Result Header */}
              <ResultHeader
                isCorrect={selectedAnswer === currentQuestion.correct_answer}
                streakCount={streak?.currentStreak}
              />

              {/* Community Vote Split */}
              {voteStats && voteStats.totalVotes > 1 && (
                <VoteSplit
                  stats={voteStats}
                  options={currentQuestion.options}
                  selectedAnswer={selectedAnswer}
                  correctAnswer={currentQuestion.correct_answer}
                />
              )}

              {/* Rule Citation - The "aha" moment */}
              <RuleCitation
                ruling={currentQuestion.ruling}
                ruleReference={currentQuestion.ruleReference}
                casebookReference={currentQuestion.casebookReference}
                questionText={currentQuestion.question}
                scenarioText={currentQuestion.scenario}
              />

              {/* Go Deeper Button */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <GoDeeperButton onClick={() => setShowRefGodPanel(true)} className="w-full" />
              </div>
            </div>
          )}
        </div>

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

        {/* Next Question Button */}
        {showResult && (
          <div className="mt-6 text-center">
            <button
              onClick={loadNewQuestion}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              Next Scenario
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-10 text-center text-gray-400 text-xs">
          <p>Questions sourced from the NBA Official Case Book</p>
          <p className="mt-1">
            {casebookQuestions.length} scenarios available
          </p>
        </footer>
      </div>
    </main>
  );
}

export default function FilmRoom() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <FilmRoomContent />
    </Suspense>
  );
}
