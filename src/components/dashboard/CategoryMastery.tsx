'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { ParentCategory, PARENT_CATEGORY_NAMES } from '@/data/types';
import { casebookQuestions, getParentCategories } from '@/data/casebook';

interface CategoryStats {
  correct: number;
  total: number;
}

interface MasteryData {
  parents: Record<string, CategoryStats>;
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

function getMasteryColor(percentage: number): string {
  if (percentage >= 90) return 'text-green-600 bg-green-100';
  if (percentage >= 70) return 'text-yellow-600 bg-yellow-100';
  if (percentage > 0) return 'text-orange-600 bg-orange-100';
  return 'text-gray-500 bg-gray-100';
}

function getMasteryBarColor(percentage: number): string {
  if (percentage >= 90) return 'bg-green-500';
  if (percentage >= 70) return 'bg-yellow-500';
  if (percentage > 0) return 'bg-orange-500';
  return 'bg-gray-300';
}

export function CategoryMastery() {
  const [expandedCategories, setExpandedCategories] = useState<Set<ParentCategory>>(new Set());
  const [masteryData, setMasteryData] = useState<MasteryData>({ parents: {}, subs: {} });

  // Load mastery data on mount
  useEffect(() => {
    setMasteryData(loadMasteryData());
  }, []);

  // Build category data structure
  const categoryData = useMemo((): CategoryData[] => {
    const parentCategories = getParentCategories();

    return parentCategories.map(parent => {
      const parentQuestions = casebookQuestions.filter(q => q.parent_category === parent);

      // Get unique sub-categories
      const subCategoryMap = new Map<string, number>();
      parentQuestions.forEach(q => {
        const subCat = q.casebook_category || q.category;
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

      // Get parent stats
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

  // Calculate overall stats
  const overallStats = useMemo(() => {
    let totalCorrect = 0;
    let totalAnswered = 0;
    Object.values(masteryData.parents).forEach(stats => {
      totalCorrect += stats.correct;
      totalAnswered += stats.total;
    });
    const categoriesStarted = categoryData.filter(c => c.stats.total > 0).length;
    return {
      correct: totalCorrect,
      total: totalAnswered,
      mastery: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0,
      categoriesStarted,
    };
  }, [masteryData, categoryData]);

  return (
    <div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-brand-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-brand-black">Category Mastery</h2>
            <p className="text-sm text-brand-gray mt-1">
              {overallStats.categoriesStarted} of {categoryData.length} categories started
            </p>
          </div>
          {overallStats.total > 0 && (
            <div className="text-right">
              <div className={`text-2xl font-bold ${overallStats.mastery >= 70 ? 'text-green-600' : overallStats.mastery >= 50 ? 'text-yellow-600' : 'text-orange-600'}`}>
                {overallStats.mastery}%
              </div>
              <p className="text-xs text-brand-gray">Overall</p>
            </div>
          )}
        </div>

        {/* Overall progress bar */}
        {overallStats.total > 0 && (
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${getMasteryBarColor(overallStats.mastery)}`}
              style={{ width: `${overallStats.mastery}%` }}
            />
          </div>
        )}
      </div>

      {/* Category List */}
      <div className="divide-y divide-brand-border max-h-[500px] overflow-y-auto">
        {categoryData.map((data) => {
          const isExpanded = expandedCategories.has(data.parent);

          return (
            <div key={data.parent}>
              {/* Parent Category Row */}
              <button
                onClick={() => toggleCategory(data.parent)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <svg
                    className={`w-4 h-4 text-brand-gray transition-transform flex-shrink-0 ${isExpanded ? 'rotate-90' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-brand-black truncate">
                        {data.displayName}
                      </span>
                      {data.stats.total > 0 && (
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${getMasteryColor(data.mastery)}`}>
                          {data.mastery}%
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-brand-gray">
                      {data.totalQuestions} questions
                      {data.stats.total > 0 && ` · ${data.stats.correct}/${data.stats.total} correct`}
                    </p>
                  </div>
                </div>

                {/* Mini progress bar */}
                <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden ml-4 flex-shrink-0">
                  <div
                    className={`h-full ${getMasteryBarColor(data.mastery)}`}
                    style={{ width: `${data.stats.total > 0 ? data.mastery : 0}%` }}
                  />
                </div>
              </button>

              {/* Expanded Sub-Categories */}
              {isExpanded && (
                <div className="bg-gray-50 px-4 pb-4">
                  <div className="grid grid-cols-1 gap-1.5 pt-2">
                    {data.subCategories.map((sub) => (
                      <div
                        key={sub.name}
                        className="flex items-center justify-between py-2 px-3 bg-white rounded-lg text-sm"
                      >
                        <span className="text-brand-black truncate flex-1 mr-2">
                          {sub.name}
                        </span>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {sub.stats.total > 0 ? (
                            <>
                              <span className="text-xs text-brand-gray">
                                {sub.stats.correct}/{sub.stats.total}
                              </span>
                              <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${getMasteryColor(sub.mastery)}`}>
                                {sub.mastery}%
                              </span>
                            </>
                          ) : (
                            <span className="text-xs text-brand-gray">{sub.questionCount} Q</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Practice Button */}
                  <Link
                    href={`/play/category-drill?category=${data.parent}`}
                    className="mt-3 block w-full text-center py-2 bg-brand-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Practice {data.displayName}
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 border-t border-brand-border">
        <Link
          href="/play/category-drill"
          className="block w-full text-center py-2.5 border border-brand-black text-brand-black rounded-lg text-sm font-medium hover:bg-white transition-colors"
        >
          View All Categories
        </Link>
      </div>
    </div>
  );
}
