'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { CaseQuestion, AnswerKey, ParentCategory, PARENT_CATEGORY_NAMES } from '@/data/types';
import { casebookQuestions, getParentCategories } from '@/data/casebook';
import { RefGodPanel, GoDeeperButton } from '@/components/RefGodPanel';

interface CategoryStats {
  correct: number;
  total: number;
}

interface MasteryData {
  // Parent category stats
  parents: Record<string, CategoryStats>;
  // Sub-category stats (keyed by "parent::subCategory")
  subs: Record<string, CategoryStats>;
}

interface SubCategoryData {
  name: string;
  questionCount: number;
  mastery: number;
  stats: CategoryStats;
}

interface CategoryData {
  parent: ParentCategory;
  displayName: string;
  subCategories: SubCategoryData[];
  totalQuestions: number;
  mastery: number;
  stats: CategoryStats;
}

const STORAGE_KEY = 'rulevision-category-mastery';

function loadMasteryData(): MasteryData {
  if (typeof window === 'undefined') return { parents: {}, subs: {} };
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error loading mastery data:', e);
  }
  return { parents: {}, subs: {} };
}

function saveMasteryData(data: MasteryData) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving mastery data:', e);
  }
}

function getMasteryColor(percentage: number): string {
  if (percentage >= 90) return 'text-green-600 bg-green-100';
  if (percentage >= 70) return 'text-yellow-600 bg-yellow-100';
  if (percentage > 0) return 'text-orange-600 bg-orange-100';
  return 'text-brand-gray bg-brand-card';
}

function getMasteryBarColor(percentage: number): string {
  if (percentage >= 90) return 'bg-green-500';
  if (percentage >= 70) return 'bg-yellow-500';
  if (percentage > 0) return 'bg-orange-500';
  return 'bg-gray-300';
}

export default function CategoryDrillPage() {
  const [selectedCategory, setSelectedCategory] = useState<ParentCategory | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<ParentCategory>>(new Set());
  const [currentQuestion, setCurrentQuestion] = useState<CaseQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(new Set());
  const [masteryData, setMasteryData] = useState<MasteryData>({ parents: {}, subs: {} });
  const [showRefGodPanel, setShowRefGodPanel] = useState(false);

  // Load mastery data on mount
  useEffect(() => {
    setMasteryData(loadMasteryData());
  }, []);

  // Build category data structure with parent -> sub-category mapping and mastery
  const categoryData = useMemo((): CategoryData[] => {
    const parentCategories = getParentCategories();

    return parentCategories.map(parent => {
      const parentQuestions = casebookQuestions.filter(q => q.parent_category === parent);

      // Get unique sub-categories (casebook_category) for this parent
      const subCategoryMap = new Map<string, number>();
      parentQuestions.forEach(q => {
        const subCat = q.casebook_category || q.category || 'unknown';
        subCategoryMap.set(subCat, (subCategoryMap.get(subCat) || 0) + 1);
      });

      // Build sub-category data with mastery
      const subCategories: SubCategoryData[] = Array.from(subCategoryMap.entries())
        .map(([name, count]) => {
          const subKey = `${parent}::${name}`;
          const stats = masteryData.subs[subKey] || { correct: 0, total: 0 };
          const mastery = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
          return { name, questionCount: count, mastery, stats };
        })
        .sort((a, b) => a.name.localeCompare(b.name));

      // Calculate parent mastery as weighted average of sub-categories
      const parentStats = masteryData.parents[parent] || { correct: 0, total: 0 };
      const parentMastery = parentStats.total > 0
        ? Math.round((parentStats.correct / parentStats.total) * 100)
        : 0;

      return {
        parent,
        displayName: PARENT_CATEGORY_NAMES[parent] || parent,
        subCategories,
        totalQuestions: parentQuestions.length,
        mastery: parentMastery,
        stats: parentStats,
      };
    });
  }, [masteryData]);

  const toggleCategory = (category: ParentCategory) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const getCategoryQuestions = useCallback(() => {
    if (!selectedCategory) return [];

    let questions = casebookQuestions.filter(q => q.parent_category === selectedCategory);

    // If a sub-category is selected, filter further
    if (selectedSubCategory) {
      questions = questions.filter(q =>
        (q.casebook_category || q.category) === selectedSubCategory
      );
    }

    return questions;
  }, [selectedCategory, selectedSubCategory]);

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
    setShowRefGodPanel(false);
  }, [getCategoryQuestions, usedQuestionIds]);

  useEffect(() => {
    if (selectedCategory) {
      loadNewQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, selectedSubCategory]);

  const handleAnswer = (answer: AnswerKey) => {
    if (showResult || !currentQuestion) return;

    const isCorrect = answer === currentQuestion.correct_answer;
    setSelectedAnswer(answer);
    setShowResult(true);

    // Update session score
    if (isCorrect) {
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }

    // Update persistent mastery data
    if (selectedCategory) {
      setMasteryData(prev => {
        const newData = { ...prev };

        // Update parent stats
        const parentStats = newData.parents[selectedCategory] || { correct: 0, total: 0 };
        newData.parents[selectedCategory] = {
          correct: parentStats.correct + (isCorrect ? 1 : 0),
          total: parentStats.total + 1,
        };

        // Update sub-category stats
        const subCat = currentQuestion.casebook_category || currentQuestion.category;
        const subKey = `${selectedCategory}::${subCat}`;
        const subStats = newData.subs[subKey] || { correct: 0, total: 0 };
        newData.subs[subKey] = {
          correct: subStats.correct + (isCorrect ? 1 : 0),
          total: subStats.total + 1,
        };

        // Save to localStorage
        saveMasteryData(newData);

        return newData;
      });
    }
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setCurrentQuestion(null);
    setScore({ correct: 0, total: 0 });
    setUsedQuestionIds(new Set());
  };

  const startDrill = (parent: ParentCategory, subCategory?: string) => {
    setSelectedCategory(parent);
    setSelectedSubCategory(subCategory || null);
    setScore({ correct: 0, total: 0 });
    setUsedQuestionIds(new Set());
  };

  // Calculate overall mastery
  const overallStats = useMemo(() => {
    let totalCorrect = 0;
    let totalAnswered = 0;
    Object.values(masteryData.parents).forEach(stats => {
      totalCorrect += stats.correct;
      totalAnswered += stats.total;
    });
    return {
      correct: totalCorrect,
      total: totalAnswered,
      mastery: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0,
    };
  }, [masteryData]);

  // Category Selection Screen
  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-white">
        <div className="border-b border-brand-border">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link href="/" className="text-brand-gray hover:text-brand-black">
              ← Home
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-brand-black tracking-tighter mb-2">
              Category Drill
            </h1>
            <p className="text-brand-gray">
              Master NBA rules by category. Click to expand and drill down into specific topics.
            </p>
          </div>

          {/* Overall Progress */}
          {overallStats.total > 0 && (
            <div className="mb-6 p-4 bg-brand-card rounded-xl border border-brand-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-brand-black">Overall Mastery</span>
                <span className={`text-sm font-bold px-2 py-0.5 rounded ${getMasteryColor(overallStats.mastery)}`}>
                  {overallStats.mastery}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${getMasteryBarColor(overallStats.mastery)}`}
                  style={{ width: `${overallStats.mastery}%` }}
                />
              </div>
              <p className="text-xs text-brand-gray mt-2">
                {overallStats.correct} correct out of {overallStats.total} answered
              </p>
            </div>
          )}

          <div className="space-y-3">
            {categoryData.map((data) => {
              const isExpanded = expandedCategories.has(data.parent);

              return (
                <div
                  key={data.parent}
                  className="border border-brand-border rounded-xl overflow-hidden"
                >
                  {/* Parent Category Header */}
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleCategory(data.parent)}
                      className="flex-1 flex items-center justify-between p-5 text-left hover:bg-brand-card transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <svg
                          className={`w-5 h-5 text-brand-gray transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-semibold text-brand-black">
                              {data.displayName}
                            </h3>
                            {data.stats.total > 0 && (
                              <span className={`text-xs font-bold px-2 py-0.5 rounded ${getMasteryColor(data.mastery)}`}>
                                {data.mastery}%
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-brand-gray">
                            {data.totalQuestions} questions · {data.subCategories.length} topics
                            {data.stats.total > 0 && (
                              <span className="ml-2">· {data.stats.correct}/{data.stats.total} correct</span>
                            )}
                          </p>
                          {/* Mini progress bar */}
                          {data.stats.total > 0 && (
                            <div className="mt-2 h-1 w-32 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${getMasteryBarColor(data.mastery)}`}
                                style={{ width: `${data.mastery}%` }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Drill All Button */}
                    <button
                      onClick={() => startDrill(data.parent)}
                      className="px-5 py-2 mr-4 text-sm font-medium text-brand-black border border-brand-border rounded-lg hover:bg-brand-card transition-colors"
                    >
                      Drill All
                    </button>
                  </div>

                  {/* Sub-Categories (Expanded) */}
                  {isExpanded && (
                    <div className="border-t border-brand-border bg-brand-card">
                      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                        {data.subCategories.map((sub) => (
                          <button
                            key={sub.name}
                            onClick={() => startDrill(data.parent, sub.name)}
                            className="flex items-center justify-between p-3 bg-white rounded-lg border border-brand-border hover:border-brand-black transition-all text-left"
                          >
                            <div className="flex-1 min-w-0">
                              <span className="text-sm font-medium text-brand-black block truncate">
                                {sub.name}
                              </span>
                              {sub.stats.total > 0 && (
                                <span className="text-xs text-brand-gray">
                                  {sub.stats.correct}/{sub.stats.total} correct
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 ml-2">
                              {sub.stats.total > 0 && (
                                <span className={`text-xs font-bold px-2 py-0.5 rounded ${getMasteryColor(sub.mastery)}`}>
                                  {sub.mastery}%
                                </span>
                              )}
                              <span className="text-xs text-brand-gray px-2 py-1 bg-brand-card rounded">
                                {sub.questionCount}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Summary Stats */}
          <div className="mt-8 p-4 bg-brand-card rounded-xl border border-brand-border">
            <div className="flex items-center justify-between text-sm">
              <span className="text-brand-gray">Total Questions Available</span>
              <span className="font-bold text-brand-black">{casebookQuestions.length}</span>
            </div>
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
  const isCorrect = selectedAnswer === currentQuestion.correct_answer;
  const displayCategoryName = selectedSubCategory || PARENT_CATEGORY_NAMES[selectedCategory];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={handleBack} className="text-brand-gray hover:text-brand-black">
              ← Back
            </button>
            <div>
              <span className="text-brand-black font-medium">{displayCategoryName}</span>
              {selectedSubCategory && (
                <span className="text-xs text-brand-gray ml-2">
                  ({PARENT_CATEGORY_NAMES[selectedCategory]})
                </span>
              )}
            </div>
          </div>
          <div className="text-brand-gray text-sm">
            <span className="text-brand-black font-bold">{score.correct}/{score.total}</span>
            {score.total > 0 && (
              <span className={`ml-2 px-2 py-0.5 rounded ${getMasteryColor(masteryPercent)}`}>
                {masteryPercent}%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white border border-brand-border rounded-xl overflow-hidden">
          {/* Category Badge */}
          <div className="px-6 py-3 border-b border-brand-border flex items-center justify-between">
            <span className="text-sm text-brand-gray font-medium">
              {currentQuestion.casebook_category || currentQuestion.category}
            </span>
            <span className="text-xs text-brand-gray">
              {categoryQuestions.length} questions in pool
            </span>
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
              .filter(([key, value]) => value && key === key.toUpperCase())
              .map(([key, value]) => {
                let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all ';

                if (!showResult) {
                  buttonClass += 'border-brand-border hover:border-brand-black cursor-pointer';
                } else if (key === currentQuestion.correct_answer) {
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

              {/* Go Deeper Button */}
              <div className="mt-4 pt-4 border-t border-brand-border">
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
