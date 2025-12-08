'use client';

import { HeroStripData, getReadinessLabel } from '@/data/dashboard-types';
import { ReadinessRing, ThreePillarRings } from './ReadinessRing';
import { SubscriptionTier, canAccess } from '@/lib/subscription';

interface HeroStripProps {
  data: HeroStripData;
  userTier?: SubscriptionTier;
}

export function HeroStrip({ data, userTier = 'elite' }: HeroStripProps) {
  const { readinessScores, todaySummary, readinessChange, streakDays } = data;
  const readinessLabel = getReadinessLabel(readinessScores.refReadiness);

  const canSeeReadinessScore = canAccess('READINESS_SCORE', userTier);
  const canSeePressureCalm = canAccess('PRESSURE_CALM_STATS', userTier);

  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6 mb-6">
      {/* Main Readiness Display */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Big Readiness Ring */}
        <div className="flex flex-col items-center relative">
          <div className="text-sm text-brand-gray mb-2 uppercase tracking-wide font-medium">
            Today's Readiness
          </div>
          {canSeeReadinessScore ? (
            <>
              <ReadinessRing
                score={readinessScores.refReadiness}
                size="xl"
                showLabel={true}
              />
              {readinessChange !== 0 && (
                <div className={`mt-2 text-sm font-medium ${readinessChange > 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {readinessChange > 0 ? '+' : ''}{readinessChange} vs yesterday
                </div>
              )}
            </>
          ) : (
            <div className="relative">
              <div className="blur-sm">
                <ReadinessRing
                  score={readinessScores.refReadiness}
                  size="xl"
                  showLabel={true}
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="bg-white/90 rounded-lg px-4 py-2 text-center shadow-sm">
                  <span className="text-2xl mb-1 block">🔒</span>
                  <span className="text-xs text-brand-gray">Upgrade to Pro</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Three Pillar Rings */}
        <div className="flex-1">
          <div className="text-sm text-brand-gray mb-4 uppercase tracking-wide font-medium text-center lg:text-left">
            Pillars
          </div>
          {canSeeReadinessScore ? (
            <ThreePillarRings
              gameIQ={readinessScores.gameIQ}
              execution={readinessScores.decisionExecution}
              commitment={readinessScores.commitment}
              size="md"
            />
          ) : (
            <div className="relative">
              <div className="blur-sm">
                <ThreePillarRings
                  gameIQ={readinessScores.gameIQ}
                  execution={readinessScores.decisionExecution}
                  commitment={readinessScores.commitment}
                  size="md"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 rounded-lg px-4 py-2 text-center shadow-sm">
                  <span className="text-sm text-brand-gray">Track your Game IQ, Execution, and Commitment</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Strength / Weakness Tags - only for pro+ */}
      {canSeeReadinessScore && (readinessScores.topStrength || readinessScores.topWeakness) && (
        <div className="mt-6 pt-6 border-t border-brand-border">
          <div className="flex flex-wrap gap-3">
            {readinessScores.topStrength && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm">
                <span className="font-medium">Strength:</span>
                <span>{readinessScores.topStrength}</span>
              </div>
            )}
            {readinessScores.topWeakness && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm">
                <span className="font-medium">Weak spot:</span>
                <span>{readinessScores.topWeakness}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Today's Quick Stats */}
      <div className="mt-6 pt-6 border-t border-brand-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickStat
            label="Questions today"
            value={todaySummary.questionsAnswered.toString()}
            subValue={todaySummary.questionsAnswered > 0 ? `${todaySummary.accuracy}% accuracy` : undefined}
          />
          <QuickStat
            label="Streak"
            value={`${streakDays} days`}
            icon="fire"
          />
          {canSeePressureCalm ? (
            <QuickStat
              label="Under Pressure"
              value={`${todaySummary.pressureAccuracy}%`}
              subValue={todaySummary.pressureAccuracy > 0 ? 'Sudden Death' : 'No data yet'}
            />
          ) : (
            <QuickStat
              label="Under Pressure"
              value="🔒"
              subValue="Upgrade to Pro"
              locked={true}
            />
          )}
          <QuickStat
            label="Daily 5"
            value={todaySummary.daily5Score !== null ? `${todaySummary.daily5Score}/5` : '--'}
            subValue={todaySummary.daily5Score !== null ? 'Completed' : 'Not done'}
          />
        </div>
      </div>
    </div>
  );
}

interface QuickStatProps {
  label: string;
  value: string;
  subValue?: string;
  icon?: 'fire' | 'clock' | 'target';
  locked?: boolean;
}

function QuickStat({ label, value, subValue, icon, locked }: QuickStatProps) {
  return (
    <div className={`text-center p-3 bg-brand-card rounded-lg ${locked ? 'opacity-60' : ''}`}>
      <div className="text-xs text-brand-gray uppercase tracking-wide mb-1">
        {label}
      </div>
      <div className="text-xl font-bold text-brand-black flex items-center justify-center gap-1">
        {icon === 'fire' && <span>🔥</span>}
        {value}
      </div>
      {subValue && (
        <div className={`text-xs mt-0.5 ${locked ? 'text-orange-600 font-medium' : 'text-brand-gray'}`}>
          {subValue}
        </div>
      )}
    </div>
  );
}
