'use client';

import { GameIQPillarData, CategoryMastery, ConfidenceLevel, Difficulty } from '@/data/dashboard-types';
import { ReadinessRing, MiniRing } from './ReadinessRing';

interface GameIQPillarProps {
  data: GameIQPillarData;
}

export function GameIQPillar({ data }: GameIQPillarProps) {
  const { overallScore, masteryGrid, topStrengths, blindSpots } = data;

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
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
          Category Mastery
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-brand-gray uppercase tracking-wide">
                <th className="text-left py-2 pr-4">Category</th>
                <th className="text-center py-2 px-2 w-20">Rookie</th>
                <th className="text-center py-2 px-2 w-20">Veteran</th>
                <th className="text-center py-2 px-2 w-20">Expert</th>
                <th className="text-center py-2 pl-4 w-24">Overall</th>
              </tr>
            </thead>
            <tbody>
              {masteryGrid.categories.map((cat) => (
                <CategoryRow key={cat.category} category={cat} />
              ))}
            </tbody>
          </table>
        </div>
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

  return (
    <tr className="border-t border-brand-border">
      <td className="py-3 pr-4">
        <div className="font-medium text-brand-black truncate max-w-[180px]" title={category.category}>
          {category.category}
        </div>
        <div className="text-xs text-brand-gray">
          {category.total} reps
        </div>
      </td>
      <td className="py-3 px-2">
        <MasteryCell data={getDifficultyData('rookie')} />
      </td>
      <td className="py-3 px-2">
        <MasteryCell data={getDifficultyData('veteran')} />
      </td>
      <td className="py-3 px-2">
        <MasteryCell data={getDifficultyData('expert')} />
      </td>
      <td className="py-3 pl-4">
        <div className="flex items-center justify-center gap-2">
          <MiniRing score={category.accuracy} color={getConfidenceColor(category.confidence)} size={32} />
          <span className="text-sm font-medium">{category.accuracy}%</span>
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
        <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
          --
        </div>
      </div>
    );
  }

  const bgColor = getHeatmapColor(data.accuracy, data.confidence);

  return (
    <div className="flex justify-center">
      <div
        className={`w-8 h-8 rounded flex items-center justify-center text-xs font-medium ${bgColor}`}
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
