'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { CaseQuestion, AnswerKey } from '@/data/types';
import { casebookQuestions, getCategories } from '@/data/casebook';

export default function CategoryDrillPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<CaseQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(new Set());

  const categories = getCategories();

  const getCategoryQuestions = useCallback(() => {
    if (!selectedCategory) return [];
    return casebookQuestions.filter(q => q.category === selectedCategory);
  }, [selectedCategory]);

  const loadNewQuestion = useCallback(() => {
    const categoryQuestions = getCategoryQuestions();
    const available = categoryQuestions.filter(q => !usedQuestionIds.has(q.id));

    if (available.length === 0) {
      // Completed all questions in category
      setUsedQuestionIds(new Set());
      const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
      setCurrentQuestion(categoryQuestions[randomIndex]);
      setUsedQuestionIds(new Set([categoryQuestions[randomIndex].id]));
    } else {
      const randomIndex = Math.floor(Math.random() * available.length);
      setCurrentQuestion(available[randomIndex]);
      setUsedQuestionIds(prev => new Set([...prev, available[randomIndex].id]));
    }

    setSelectedAnswer(null);
    setShowResult(false);
  }, [getCategoryQuestions, usedQuestionIds]);

  useEffect(() => {
    if (selectedCategory) {
      loadNewQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const handleAnswer = (answer: AnswerKey) => {
    if (showResult || !currentQuestion) return;

    const isCorrect = answer === currentQuestion.correctAnswer;
    setSelectedAnswer(answer);
    setShowResult(true);

    if (isCorrect) {
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setCurrentQuestion(null);
    setScore({ correct: 0, total: 0 });
    setUsedQuestionIds(new Set());
  };

  // Category Selection Screen
  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-white">
        <div className="border-b border-brand-border">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <Link href="/" className="text-brand-gray hover:text-brand-black">
              ← Home
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-brand-black tracking-tighter mb-8">
            Choose a Category
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => {
              const questionCount = casebookQuestions.filter(q => q.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="bg-white border border-brand-border rounded-xl p-6 text-left hover:border-brand-black transition-all"
                >
                  <h3 className="text-lg font-semibold text-brand-black mb-2">
                    {category}
                  </h3>
                  <p className="text-sm text-brand-gray">
                    {questionCount} questions
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Question Screen
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-black"></div>
      </div>
    );
  }

  const categoryQuestions = getCategoryQuestions();
  const masteryPercent = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={handleBack} className="text-brand-gray hover:text-brand-black">
              ← Back
            </button>
            <span className="text-brand-black font-medium">{selectedCategory}</span>
          </div>
          <div className="text-brand-gray text-sm">
            Mastery: <span className="text-brand-black font-bold">{masteryPercent}%</span> ({score.correct}/{score.total})
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
