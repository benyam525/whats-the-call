'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CaseQuestion, AnswerKey } from '@/data/types';
import { casebookQuestions } from '@/data/casebook';

export default function FilmRoomPage() {
  const [currentQuestion, setCurrentQuestion] = useState<CaseQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);
  const [showResult, setShowResult] = useState(false);
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
  }, [usedQuestionIds]);

  useEffect(() => {
    loadNewQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswer = (answer: AnswerKey) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);
  };

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
            <span className="text-brand-black font-medium">Film Room</span>
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
                  buttonClass += 'border-red-500 bg-red-50';
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

          {/* Result Section */}
          {showResult && (
            <div className={`p-6 border-t-2 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
              <div className="mb-4">
                <p className="text-2xl font-bold mb-2" style={{ color: isCorrect ? '#16a34a' : '#dc2626' }}>
                  {isCorrect ? 'Good eye.' : 'Not quite.'}
                </p>
              </div>

              {/* Explanation */}
              <div className="bg-white rounded-lg p-4 border border-brand-border">
                <h3 className="font-semibold text-brand-black mb-2">Ruling</h3>
                <p className="text-brand-black leading-relaxed mb-4">{currentQuestion.ruling}</p>

                {currentQuestion.ruleReference && (
                  <div className="text-sm">
                    <span className="text-brand-gray">Rule: </span>
                    {currentQuestion.ruleLink ? (
                      <a
                        href={currentQuestion.ruleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-black underline hover:text-gray-600"
                      >
                        {currentQuestion.ruleReference}
                      </a>
                    ) : (
                      <span className="text-brand-black">{currentQuestion.ruleReference}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Next Button */}
        {showResult && (
          <div className="mt-6 text-center">
            <button
              onClick={loadNewQuestion}
              className="bg-brand-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
