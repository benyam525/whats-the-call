'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { CaseQuestion, AnswerKey } from '@/data/types';
import { casebookQuestions } from '@/data/casebook';

export default function SuddenDeathPage() {
  const [currentQuestion, setCurrentQuestion] = useState<CaseQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(new Set());

  const loadNewQuestion = useCallback(() => {
    const available = casebookQuestions.filter(q => !usedQuestionIds.has(q.id));

    if (available.length === 0) {
      setUsedQuestionIds(new Set());
      const randomIndex = Math.floor(Math.random() * casebookQuestions.length);
      setCurrentQuestion(casebookQuestions[randomIndex]);
      setUsedQuestionIds(new Set([casebookQuestions[randomIndex].id]));
    } else {
      const randomIndex = Math.floor(Math.random() * available.length);
      setCurrentQuestion(available[randomIndex]);
      setUsedQuestionIds(prev => new Set([...prev, available[randomIndex].id]));
    }

    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(10);
  }, [usedQuestionIds]);

  useEffect(() => {
    loadNewQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Timer
  useEffect(() => {
    if (gameOver || showResult || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showResult, gameOver]);

  const handleAnswer = (answer: AnswerKey) => {
    if (showResult || gameOver) return;

    const isCorrect = answer === currentQuestion?.correctAnswer;
    setSelectedAnswer(answer);
    setShowResult(true);

    if (isCorrect) {
      setTimeout(() => {
        setScore(score + 1);
        loadNewQuestion();
      }, 1500);
    } else {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setGameOver(false);
    setUsedQuestionIds(new Set());
    loadNewQuestion();
  };

  if (gameOver) {
    return (
      <div className="min-h-screen bg-white">
        <div className="border-b border-brand-border">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link href="/" className="text-brand-gray hover:text-brand-black">
              ← Home
            </Link>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-brand-black tracking-tighter mb-4">
            Game Over
          </h1>
          <div className="text-6xl font-bold text-brand-black mb-4">
            {score}
          </div>
          <p className="text-brand-gray mb-8">
            {score === 0 ? 'Keep practicing!' : score < 5 ? 'Good start!' : score < 10 ? 'Nice run!' : 'Impressive streak!'}
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="bg-brand-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-block border-2 border-brand-black text-brand-black px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Exit
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-black"></div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-brand-gray hover:text-brand-black">
              ← Exit
            </Link>
            <span className="text-brand-black font-medium">Sudden Death</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-brand-gray text-sm">
              Score: <span className="text-brand-black font-bold">{score}</span>
            </div>
            <div className={`text-2xl font-bold ${timeLeft <= 3 ? 'text-red-500' : 'text-brand-black'}`}>
              {timeLeft}s
            </div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white border border-brand-border rounded-xl overflow-hidden">
          {/* Category */}
          <div className="px-6 py-3 border-b border-brand-border">
            <span className="text-sm text-brand-gray font-medium">{currentQuestion.category}</span>
          </div>

          {/* Scenario */}
          <div className="p-6 border-b border-brand-border">
            <p className="text-brand-black leading-relaxed">{currentQuestion.scenario}</p>
          </div>

          {/* Question */}
          <div className="p-6 bg-brand-card border-b border-brand-border">
            <p className="text-lg font-medium text-brand-black">{currentQuestion.question}</p>
          </div>

          {/* Answer Options */}
          <div className="p-6 space-y-3">
            {(Object.entries(currentQuestion.options) as [AnswerKey, string][])
              .filter(([, value]) => value)
              .map(([key, value]) => {
                let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all ';

                if (!showResult) {
                  buttonClass += 'border-brand-border hover:border-brand-black cursor-pointer';
                } else if (key === currentQuestion.correctAnswer) {
                  buttonClass += 'border-green-500 bg-green-50';
                } else if (key === selectedAnswer) {
                  buttonClass += 'border-red-500 bg-red-50 animate-shake';
                } else {
                  buttonClass += 'border-brand-border opacity-50';
                }

                if (selectedAnswer === key && !showResult) {
                  buttonClass += ' border-brand-black bg-brand-black text-white';
                }

                return (
                  <button
                    key={key}
                    onClick={() => handleAnswer(key)}
                    disabled={showResult}
                    className={buttonClass}
                  >
                    <span className="font-bold mr-3 uppercase">{key}.</span>
                    <span>{value}</span>
                  </button>
                );
              })}
          </div>

          {/* Quick Feedback */}
          {showResult && (
            <div className={`p-6 border-t-2 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
              <p className="text-2xl font-bold" style={{ color: isCorrect ? '#16a34a' : '#dc2626' }}>
                {isCorrect ? 'Good eye.' : 'Not quite.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
