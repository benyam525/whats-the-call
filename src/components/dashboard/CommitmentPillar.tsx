'use client';

import { CommitmentPillarData, ModeBreakdown } from '@/data/dashboard-types';
import { ReadinessRing } from './ReadinessRing';
import { SubscriptionTier, canAccess } from '@/lib/subscription';

interface CommitmentPillarProps {
  data: CommitmentPillarData;
  userTier?: SubscriptionTier;
}

export function CommitmentPillar({ data, userTier = 'elite' }: CommitmentPillarProps) {
  const { overallScore, consistency, trainingLoad, focusQuality } = data;

  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-brand-black">Commitment</h2>
          <p className="text-sm text-brand-gray">How consistently you're doing the work</p>
        </div>
        <ReadinessRing score={overallScore} size="sm" color="#10B981" showLabel={false} />
      </div>

      {/* Consistency Metrics */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
          Consistency
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ConsistencyStat
            label="Current Streak"
            value={`${consistency.currentStreak}`}
            subValue="days"
            highlight={consistency.currentStreak >= 7}
            icon="🔥"
          />
          <ConsistencyStat
            label="Longest Streak"
            value={`${consistency.longestStreak}`}
            subValue="days"
            icon="🏆"
          />
          <ConsistencyStat
            label="Sessions/Week"
            value={`${consistency.avgSessionsPerWeek}`}
            subValue={`target: ${consistency.targetDaysPerWeek}+`}
            highlight={consistency.avgSessionsPerWeek >= consistency.targetDaysPerWeek}
          />
          <ConsistencyStat
            label="Zero Days"
            value={`${consistency.daysWithZeroRepsLast30}`}
            subValue="last 30 days"
            highlight={consistency.daysWithZeroRepsLast30 <= 5}
            invertHighlight
          />
        </div>
      </div>

      {/* Training Load */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
          Training Load
        </h3>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-brand-gray">This Week</span>
              <span className="font-bold text-brand-black">{trainingLoad.questionsThisWeek} questions</span>
            </div>
            <TrainingLoadBar
              current={trainingLoad.questionsThisWeek}
              min={trainingLoad.recommendedMin}
              max={trainingLoad.recommendedMax}
            />
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-brand-gray">
          <span>Last week: {trainingLoad.questionsLastWeek} questions</span>
          <span>Time in app: {trainingLoad.minutesInApp} min</span>
        </div>
      </div>

      {/* Mode Mix */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
          Mode Mix
        </h3>
        <ModeBreakdownChart breakdown={trainingLoad.modeBreakdown} />
      </div>

      {/* Focus Quality */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
          Focus Quality
        </h3>
        <div className="space-y-3">
          <FocusBar
            label="Time in Strengths"
            value={focusQuality.strengthsRepsPercent}
            color="bg-green-500"
            warning={focusQuality.strengthsRepsPercent > 60}
            warningText="Consider shifting focus"
          />
          <FocusBar
            label="Time in Weaknesses"
            value={focusQuality.weaknessRepsPercent}
            color="bg-amber-500"
            target={focusQuality.recommendedWeaknessPercent}
            targetLabel={`Target: ${focusQuality.recommendedWeaknessPercent}%`}
          />
        </div>
        {focusQuality.bottom2Categories.length > 0 && (
          <div className="mt-3 text-xs text-brand-gray">
            Bottom categories: {focusQuality.bottom2Categories.join(', ')}
          </div>
        )}
      </div>

      {/* Coach's Note */}
      {focusQuality.strengthsRepsPercent > 60 && (
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">📊</span>
            <div className="text-sm text-green-900">
              <p>
                You're putting in volume (great!) but {focusQuality.strengthsRepsPercent}% of your reps are in areas where you're already strong.
              </p>
              <p className="mt-2 text-green-700">
                Shift at least 25% of next week's reps into {focusQuality.bottom2Categories[0] || 'your weak categories'}.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface ConsistencyStatProps {
  label: string;
  value: string;
  subValue: string;
  highlight?: boolean;
  invertHighlight?: boolean;
  icon?: string;
}

function ConsistencyStat({ label, value, subValue, highlight, invertHighlight, icon }: ConsistencyStatProps) {
  const isGood = invertHighlight ? !highlight : highlight;

  return (
    <div className={`text-center p-3 rounded-lg ${isGood ? 'bg-green-50' : 'bg-brand-card'}`}>
      <div className="text-xs text-brand-gray uppercase tracking-wide mb-1">
        {label}
      </div>
      <div className={`text-xl font-bold flex items-center justify-center gap-1 ${isGood ? 'text-green-600' : 'text-brand-black'}`}>
        {icon && <span>{icon}</span>}
        {value}
      </div>
      <div className="text-xs text-brand-gray">
        {subValue}
      </div>
    </div>
  );
}

interface TrainingLoadBarProps {
  current: number;
  min: number;
  max: number;
}

function TrainingLoadBar({ current, min, max }: TrainingLoadBarProps) {
  const percentage = Math.min((current / max) * 100, 100);
  const minPercentage = (min / max) * 100;
  const isInRange = current >= min && current <= max;
  const isBelowMin = current < min;

  return (
    <div className="relative h-4 bg-gray-100 rounded-full overflow-visible">
      {/* Recommended range indicator */}
      <div
        className="absolute top-0 h-full bg-green-100 rounded-full"
        style={{ left: `${minPercentage}%`, right: '0%' }}
      />
      {/* Current progress */}
      <div
        className={`absolute top-0 h-full rounded-full transition-all duration-500 ${
          isInRange ? 'bg-green-500' : isBelowMin ? 'bg-amber-500' : 'bg-blue-500'
        }`}
        style={{ width: `${percentage}%` }}
      />
      {/* Min marker */}
      <div
        className="absolute top-0 h-full w-0.5 bg-green-600"
        style={{ left: `${minPercentage}%` }}
      />
      {/* Labels */}
      <div className="absolute -bottom-5 left-0 text-xs text-brand-gray">0</div>
      <div
        className="absolute -bottom-5 text-xs text-green-600"
        style={{ left: `${minPercentage}%`, transform: 'translateX(-50%)' }}
      >
        {min}
      </div>
      <div className="absolute -bottom-5 right-0 text-xs text-brand-gray">{max}</div>
    </div>
  );
}

interface ModeBreakdownChartProps {
  breakdown: ModeBreakdown;
}

function ModeBreakdownChart({ breakdown }: ModeBreakdownChartProps) {
  const modes = [
    { key: 'filmRoom', label: 'Film Room', color: 'bg-blue-500', value: breakdown.filmRoom },
    { key: 'daily5', label: 'Daily 5', color: 'bg-green-500', value: breakdown.daily5 },
    { key: 'suddenDeath', label: 'Sudden Death', color: 'bg-purple-500', value: breakdown.suddenDeath },
    { key: 'categoryDrill', label: 'Category Drill', color: 'bg-amber-500', value: breakdown.categoryDrill },
  ];

  const total = modes.reduce((sum, m) => sum + m.value, 0);

  if (total === 0) {
    return (
      <div className="h-16 flex items-center justify-center text-sm text-brand-gray bg-brand-card rounded-lg">
        Start training to see your mode breakdown
      </div>
    );
  }

  return (
    <div>
      {/* Stacked bar */}
      <div className="h-6 flex rounded-full overflow-hidden mb-3">
        {modes.map((mode) => (
          mode.value > 0 && (
            <div
              key={mode.key}
              className={`${mode.color} transition-all duration-500`}
              style={{ width: `${mode.value}%` }}
              title={`${mode.label}: ${mode.value}%`}
            />
          )
        ))}
      </div>
      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {modes.map((mode) => (
          <div key={mode.key} className="flex items-center gap-1.5 text-xs">
            <div className={`w-2.5 h-2.5 rounded-full ${mode.color}`} />
            <span className="text-brand-gray">{mode.label}</span>
            <span className="font-medium text-brand-black">{mode.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface FocusBarProps {
  label: string;
  value: number;
  color: string;
  target?: number;
  targetLabel?: string;
  warning?: boolean;
  warningText?: string;
}

function FocusBar({ label, value, color, target, targetLabel, warning, warningText }: FocusBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-brand-gray">{label}</span>
        <div className="flex items-center gap-2">
          {warning && <span className="text-xs text-amber-600">{warningText}</span>}
          <span className="font-bold text-brand-black">{value}%</span>
        </div>
      </div>
      <div className="relative h-2 bg-gray-100 rounded-full overflow-visible">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${Math.min(value, 100)}%` }}
        />
        {target && (
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-0.5 h-4 bg-brand-black"
            style={{ left: `${target}%` }}
            title={targetLabel}
          />
        )}
      </div>
      {targetLabel && (
        <div className="text-xs text-brand-gray mt-1">{targetLabel}</div>
      )}
    </div>
  );
}
