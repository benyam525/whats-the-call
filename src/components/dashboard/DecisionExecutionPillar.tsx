'use client';

import { DecisionExecutionPillarData, ComposureCurvePoint } from '@/data/dashboard-types';
import { ReadinessRing } from './ReadinessRing';
import { SubscriptionTier, canAccess } from '@/lib/subscription';

interface DecisionExecutionPillarProps {
  data: DecisionExecutionPillarData;
  userTier?: SubscriptionTier;
}

export function DecisionExecutionPillar({ data, userTier = 'elite' }: DecisionExecutionPillarProps) {
  const { overallScore, pressurePerformance, decisionSpeed, composureCurve, clutchSituations, composureDropPoint } = data;

  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-brand-black">Decision Execution</h2>
          <p className="text-sm text-brand-gray">How you perform under pressure</p>
        </div>
        <ReadinessRing score={overallScore} size="sm" color="#8B5CF6" showLabel={false} />
      </div>

      {/* Pressure vs Calm Accuracy */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
          Pressure Accuracy
        </h3>
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-brand-gray">Calm (Film Room)</span>
              <span className="font-bold text-brand-black">{pressurePerformance.calmAccuracy}%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full transition-all duration-500"
                style={{ width: `${pressurePerformance.calmAccuracy}%` }}
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-brand-gray">Under Pressure</span>
              <span className="font-bold text-brand-black">{pressurePerformance.pressureAccuracy}%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${pressurePerformance.pressureAccuracy}%` }}
              />
            </div>
          </div>
        </div>
        {pressurePerformance.gap > 0 && (
          <div className="mt-3 text-sm text-amber-600 flex items-center gap-2">
            <span>⚠️</span>
            <span>Gap: {pressurePerformance.gap} points drop under pressure</span>
          </div>
        )}
      </div>

      {/* Decision Speed */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
          Decision Speed
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <SpeedStat
            label="Avg Response"
            value={`${(decisionSpeed.avgResponseTimeMs / 1000).toFixed(1)}s`}
            subValue={`of ${(decisionSpeed.avgTimeAllowedMs / 1000).toFixed(0)}s allowed`}
          />
          <SpeedStat
            label="Time to Spare"
            value={`${decisionSpeed.percentWithTimeRemaining}%`}
            subValue=">3s remaining"
          />
          <SpeedStat
            label="Fastest"
            value={`${(decisionSpeed.fastestResponseMs / 1000).toFixed(1)}s`}
            subValue="best response"
          />
        </div>
      </div>

      {/* Composure Curve */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
          Composure Curve
        </h3>
        <div className="text-xs text-brand-gray mb-3">
          Accuracy by streak length in Sudden Death
        </div>
        <ComposureCurveChart data={composureCurve} />
        {composureDropPoint && (
          <div className="mt-3 text-sm text-amber-600 flex items-center gap-2">
            <span>📉</span>
            <span>{composureDropPoint}</span>
          </div>
        )}
      </div>

      {/* Clutch Situations */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
          Clutch Situations
        </h3>
        <div className="space-y-2">
          {clutchSituations.map((situation) => (
            <ClutchSituationRow key={situation.scenarioType} situation={situation} />
          ))}
        </div>
      </div>

      {/* Coach's Note */}
      {pressurePerformance.gap > 10 && (
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">🎯</span>
            <div className="text-sm text-purple-900">
              <p>
                Your knowledge is there, but once you hit pressure your accuracy drops {pressurePerformance.gap} points.
              </p>
              <p className="mt-2 text-purple-700">
                Build composure: 3×/week Clutch Packs (10 questions, all late-game scenarios).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface SpeedStatProps {
  label: string;
  value: string;
  subValue: string;
}

function SpeedStat({ label, value, subValue }: SpeedStatProps) {
  return (
    <div className="text-center p-3 bg-brand-card rounded-lg">
      <div className="text-xs text-brand-gray uppercase tracking-wide mb-1">
        {label}
      </div>
      <div className="text-lg font-bold text-brand-black">
        {value}
      </div>
      <div className="text-xs text-brand-gray">
        {subValue}
      </div>
    </div>
  );
}

interface ComposureCurveChartProps {
  data: ComposureCurvePoint[];
}

function ComposureCurveChart({ data }: ComposureCurveChartProps) {
  if (data.length === 0 || data.every(d => d.total === 0)) {
    return (
      <div className="h-32 flex items-center justify-center text-sm text-brand-gray bg-brand-card rounded-lg">
        Play more Sudden Death to see your composure curve
      </div>
    );
  }

  const maxAccuracy = Math.max(...data.filter(d => d.total > 0).map(d => d.accuracy), 100);

  return (
    <div className="h-32 flex items-end gap-2">
      {data.map((point, index) => {
        const hasData = point.total > 0;
        const height = hasData ? (point.accuracy / maxAccuracy) * 100 : 10;
        const color = getComposureColor(point.accuracy);

        return (
          <div key={point.streakRange} className="flex-1 flex flex-col items-center gap-1">
            <div
              className={`w-full rounded-t ${color} transition-all duration-500 relative group`}
              style={{ height: `${height}%`, minHeight: hasData ? '20px' : '8px' }}
            >
              {hasData && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-brand-black">
                  {point.accuracy}%
                </div>
              )}
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-8 px-2 py-1 bg-brand-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {point.correct}/{point.total} correct
              </div>
            </div>
            <div className="text-xs text-brand-gray">Q{point.streakRange}</div>
          </div>
        );
      })}
    </div>
  );
}

interface ClutchSituationRowProps {
  situation: {
    label: string;
    accuracy: number;
    total: number;
  };
}

function ClutchSituationRow({ situation }: ClutchSituationRowProps) {
  const hasData = situation.total > 0;

  return (
    <div className="flex items-center justify-between p-3 bg-brand-card rounded-lg">
      <span className="text-sm font-medium text-brand-black">{situation.label}</span>
      {hasData ? (
        <div className="flex items-center gap-3">
          <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${getClutchColor(situation.accuracy)}`}
              style={{ width: `${situation.accuracy}%` }}
            />
          </div>
          <span className="text-sm font-bold text-brand-black w-12 text-right">
            {situation.accuracy}%
          </span>
        </div>
      ) : (
        <span className="text-sm text-brand-gray">No data</span>
      )}
    </div>
  );
}

function getComposureColor(accuracy: number): string {
  if (accuracy >= 85) return 'bg-green-500';
  if (accuracy >= 70) return 'bg-green-400';
  if (accuracy >= 55) return 'bg-yellow-400';
  if (accuracy >= 40) return 'bg-orange-400';
  return 'bg-red-400';
}

function getClutchColor(accuracy: number): string {
  if (accuracy >= 80) return 'bg-green-500';
  if (accuracy >= 65) return 'bg-yellow-500';
  return 'bg-red-500';
}
