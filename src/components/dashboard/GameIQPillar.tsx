'use client';

import { useState } from 'react';
import { GameIQPillarData, CategoryMastery, ConfidenceLevel, Difficulty } from '@/data/dashboard-types';
import { ReadinessRing, MiniRing } from './ReadinessRing';
import { SubscriptionTier, canAccess } from '@/lib/subscription';

interface GameIQPillarProps {
  data: GameIQPillarData;
  userTier?: SubscriptionTier;
}

export function GameIQPillar({ data, userTier = 'elite' }: GameIQPillarProps) {
  const { overallScore, masteryGrid, topStrengths, blindSpots } = data;
  const [isExpanded, setIsExpanded] = useState(false);

  // Show first 6 categories when collapsed, all when expanded
  const visibleCategories = isExpanded
    ? masteryGrid.categories
    : masteryGrid.categories.slice(0, 6);

  const hasMore = masteryGrid.categories.length > 6;

  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-brand-black">Game IQ</h2>
          <p className="text-sm text-brand-gray">How well you know the rules</p>
        </div>
        <ReadinessRing score={overallScore} size="sm" color="#3B82F6" showLabel={false} />
      </div>

      {/* Category Mastery Grid / Heatmap */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-brand-black uppercase tracking-wide">
            Category Mastery
          </h3>
          <span className="text-xs text-brand-gray">
            {masteryGrid.categories.length} categories
          </span>
        </div>
        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr className="text-xs text-brand-gray uppercase tracking-wide">
                <th className="text-left py-2 pr-2">Category</th>
                <th className="text-center py-2 px-1 w-14">Rk</th>
                <th className="text-center py-2 px-1 w-14">Vet</th>
                <th className="text-center py-2 px-1 w-14">Exp</th>
                <th className="text-center py-2 pl-2 w-20">Total</th>
              </tr>
            </thead>
            <tbody>
              {visibleCategories.map((cat) => (
                <CategoryRow key={cat.category} category={cat} />
              ))}
            </tbody>
          </table>
        </div>

        {hasMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-3 py-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors flex items-center justify-center gap-1"
          >
            {isExpanded ? (
              <>
                Show Less
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                Show All {masteryGrid.categories.length} Categories
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>

      {/* Concept Coverage */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
          Concept Coverage
        </h3>
        <div className="space-y-2">
          {masteryGrid.conceptCoverage.slice(0, 5).map((coverage) => (
            <ConceptCoverageBar key={coverage.category} coverage={coverage} />
          ))}
        </div>
      </div>

      {/* Coach's Note */}
      {topStrengths.length > 0 && blindSpots.length > 0 && (
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div className="text-sm text-blue-900">
              <p>
                You're <strong>elite on {topStrengths[0]?.category}</strong> ({topStrengths[0]?.accuracy}%, {topStrengths[0]?.total} reps).
                {blindSpots[0] && (
                  <>
                    {' '}<strong>{blindSpots[0].category}</strong> is your blind spot ({blindSpots[0].accuracy}%, {blindSpots[0].total} reps).
                  </>
                )}
              </p>
              {blindSpots[0] && (
                <p className="mt-2 text-blue-700">
                  Next 2 weeks should lean into {blindSpots[0].category} drills.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface CategoryRowProps {
  category: CategoryMastery;
}

function CategoryRow({ category }: CategoryRowProps) {
  const getDifficultyData = (difficulty: Difficulty) => {
    return category.difficultyBreakdown.find(d => d.difficulty === difficulty);
  };

  // Truncate long category names
  const shortName = category.category.length > 20
    ? category.category.substring(0, 18) + '...'
    : category.category;

  return (
    <tr className="border-t border-brand-border">
      <td className="py-2 pr-2">
        <div className="font-medium text-brand-black text-xs" title={category.category}>
          {shortName}
        </div>
        <div className="text-xs text-brand-gray">
          {category.total} reps
        </div>
      </td>
      <td className="py-2 px-1">
        <MasteryCell data={getDifficultyData('rookie')} />
      </td>
      <td className="py-2 px-1">
        <MasteryCell data={getDifficultyData('veteran')} />
      </td>
      <td className="py-2 px-1">
        <MasteryCell data={getDifficultyData('expert')} />
      </td>
      <td className="py-2 pl-2">
        <div className="flex items-center justify-center gap-1">
          <MiniRing score={category.accuracy} color={getConfidenceColor(category.confidence)} size={24} />
          <span className="text-xs font-bold">{category.accuracy}%</span>
        </div>
      </td>
    </tr>
  );
}

interface MasteryCellProps {
  data?: {
    accuracy: number;
    total: number;
    confidence: ConfidenceLevel;
  };
}

function MasteryCell({ data }: MasteryCellProps) {
  if (!data || data.total === 0) {
    return (
      <div className="flex justify-center">
        <div className="w-7 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-400 text-[10px]">
          --
        </div>
      </div>
    );
  }

  const bgColor = getHeatmapColor(data.accuracy, data.confidence);

  return (
    <div className="flex justify-center">
      <div
        className={`w-7 h-6 rounded flex items-center justify-center text-[10px] font-bold ${bgColor}`}
        title={`${data.accuracy}% (${data.total} reps)`}
      >
        {data.accuracy}
      </div>
    </div>
  );
}

interface ConceptCoverageBarProps {
  coverage: {
    category: string;
    percentSeen: number;
    totalAvailable: number;
    totalAttempted: number;
  };
}

function ConceptCoverageBar({ coverage }: ConceptCoverageBarProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-32 text-xs text-brand-gray truncate" title={coverage.category}>
        {coverage.category}
      </div>
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${coverage.percentSeen}%` }}
        />
      </div>
      <div className="w-16 text-xs text-brand-gray text-right">
        {coverage.percentSeen}% seen
      </div>
    </div>
  );
}

function getConfidenceColor(confidence: ConfidenceLevel): string {
  switch (confidence) {
    case 'reliable':
      return '#22C55E';
    case 'unproven':
      return '#3B82F6';
    case 'needs_work':
      return '#F59E0B';
    case 'blind_spot':
      return '#EF4444';
  }
}

function getHeatmapColor(accuracy: number, confidence: ConfidenceLevel): string {
  if (confidence === 'blind_spot' || accuracy === 0) {
    return 'bg-red-100 text-red-700';
  }
  if (accuracy >= 90) {
    return 'bg-green-500 text-white';
  }
  if (accuracy >= 80) {
    return 'bg-green-400 text-white';
  }
  if (accuracy >= 70) {
    return 'bg-green-300 text-green-900';
  }
  if (accuracy >= 60) {
    return 'bg-yellow-300 text-yellow-900';
  }
  if (accuracy >= 50) {
    return 'bg-orange-300 text-orange-900';
  }
  return 'bg-red-300 text-red-900';
}
