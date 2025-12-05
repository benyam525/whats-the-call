'use client';

import { Suspense, useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { CasebookQuestion, AnswerKey, Difficulty, VoteStats } from '@/data/types';
import { casebookQuestions, getCategories } from '@/data/casebook';
import { useVisitorId } from '@/hooks/useVisitorId';
import { useStreak } from '@/hooks/useStreak';
import { useAnswerTracking } from '@/hooks/useAnswerTracking';
import { StreakBadge } from '@/components/StreakBadge';
import { VoteSplit } from '@/components/VoteSplit';
import { DifficultyBadge } from '@/components/DifficultyBadge';
import { RuleCitation } from '@/components/RuleCitation';
import { HomeButton } from '@/components/HomeButton';
import { ResultFeedback, ResultHeader } from '@/components/ResultFeedback';

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-rv-navy">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rv-accent"></div>
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

    const isCorrect = answer === currentQuestion.correctAnswer;
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
      category: currentQuestion.category,
      difficulty: currentQuestion.difficulty,
      mode: 'film_room',
      answerGiven: answer,
      correctAnswer: currentQuestion.correctAnswer,
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
    const base = 'w-full text-left p-4 rounded-lg border transition-all duration-200 ';

    if (!showResult) {
      return base + 'bg-rv-steel/50 border-white/10 hover:border-rv-accent/50 hover:bg-rv-steel cursor-pointer text-white';
    }

    if (option === currentQuestion?.correctAnswer) {
      return base + 'border-rv-success bg-rv-success/20 text-rv-success';
    }

    if (option === selectedAnswer && option !== currentQuestion?.correctAnswer) {
      return base + 'border-rv-danger bg-rv-danger/20 text-rv-danger';
    }

    return base + 'bg-rv-steel/30 border-white/5 opacity-50 text-rv-silver/60';
  };

  if (!currentQuestion) {
    return <LoadingSpinner />;
  }

  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <main className="min-h-screen bg-rv-navy">
      {/* Feedback overlay */}
      <ResultFeedback
        isCorrect={lastAnswerCorrect}
        streak={score.correct}
        show={showFeedback}
        onAnimationComplete={() => setShowFeedback(false)}
      />

      {/* Header */}
      <header className="header-gradient py-5 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xl">🎬</span>
                <h1 className="text-2xl font-bold tracking-tight text-white">Film Room</h1>
              </div>
              <p className="text-rv-silver/60 text-sm">Practice at your own pace</p>
            </div>
            <HomeButton />
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
          <div className="bg-rv-slate/50 rounded-lg px-4 py-2 border border-white/5">
            <span className="text-rv-silver/60 text-sm">Session: </span>
            <span className="font-bold text-white">{score.correct}/{score.total}</span>
            {score.total > 0 && (
              <span className="text-rv-silver/40 ml-2 text-sm">({percentage}%)</span>
            )}
          </div>

          <div className="flex gap-2 flex-wrap">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
              className="bg-rv-slate border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-rv-accent/50 focus:border-rv-accent/50"
            >
              <option value="all">All Levels</option>
              <option value="rookie">🌱 Rookie</option>
              <option value="veteran">⭐ Veteran</option>
              <option value="expert">🔥 Expert</option>
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-rv-slate border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-rv-accent/50 focus:border-rv-accent/50"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-rv-slate rounded-xl border border-white/5 overflow-hidden">
          {/* Category & Difficulty Badge */}
          <div className="bg-rv-navy/50 px-5 py-3 flex items-center justify-between border-b border-white/5">
            <span className="text-rv-silver text-sm font-medium">{currentQuestion.category}</span>
            <DifficultyBadge difficulty={currentQuestion.difficulty} />
          </div>

          {/* Scenario */}
          <div className="p-5 border-b border-white/5">
            <h2 className="text-xs uppercase tracking-wider text-rv-silver/50 mb-2">Scenario</h2>
            <p className="text-white leading-relaxed">{currentQuestion.scenario}</p>
          </div>

          {/* Question */}
          <div className="p-5 bg-rv-navy/30">
            <h2 className="text-xs uppercase tracking-wider text-rv-silver/50 mb-2">Question</h2>
            <p className="text-lg font-semibold text-white">{currentQuestion.question}</p>
          </div>

          {/* Answer Options */}
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
                  <span className="font-bold text-rv-accent mr-3 uppercase">{key}.</span>
                  <span>{value}</span>
                </button>
              ))}
          </div>

          {/* Result Section */}
          {showResult && selectedAnswer && (
            <div className={`p-5 border-t ${
              selectedAnswer === currentQuestion.correctAnswer
                ? 'border-rv-success/30 bg-rv-success/10'
                : 'border-rv-danger/30 bg-rv-danger/10'
            }`}>
              {/* Result Header */}
              <ResultHeader
                isCorrect={selectedAnswer === currentQuestion.correctAnswer}
                streakCount={streak?.currentStreak}
              />

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
                casebookReference={currentQuestion.casebookReference}
              />
            </div>
          )}
        </div>

        {/* Next Question Button */}
        {showResult && (
          <div className="mt-6 text-center">
            <button
              onClick={loadNewQuestion}
              className="btn-primary"
            >
              Next Scenario
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-10 text-center text-rv-silver/40 text-xs">
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
