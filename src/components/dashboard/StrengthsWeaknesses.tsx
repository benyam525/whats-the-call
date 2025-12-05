'use client';

import { StrengthsWeaknessesData, StrengthWeakness } from '@/data/dashboard-types';

interface StrengthsWeaknessesProps {
  data: StrengthsWeaknessesData;
}

export function StrengthsWeaknesses({ data }: StrengthsWeaknessesProps) {
  const { topStrengths, topWeaknesses } = data;

  if (topStrengths.length === 0 && topWeaknesses.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-brand-border p-6">
        <h2 className="text-lg font-bold text-brand-black mb-4">Strengths & Weak Spots</h2>
        <div className="text-center py-8 text-brand-gray">
          <p>Answer more questions to see your strengths and weaknesses.</p>
          <p className="text-sm mt-2">Need at least 5 answers per category.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6">
      <h2 className="text-lg font-bold text-brand-black mb-6">Strengths & Weak Spots</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Top Strengths */}
        <div>
          <h3 className="text-sm font-semibold text-green-700 mb-3 uppercase tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Top 3 Strengths
          </h3>
          <div className="space-y-3">
            {topStrengths.length > 0 ? (
              topStrengths.map((strength, index) => (
                <StrengthCard key={strength.category} item={strength} rank={index + 1} isStrength />
              ))
            ) : (
              <div className="text-sm text-brand-gray p-3 bg-brand-card rounded-lg">
                Keep training to identify your strengths
              </div>
            )}
          </div>
        </div>

        {/* Top Weaknesses */}
        <div>
          <h3 className="text-sm font-semibold text-amber-700 mb-3 uppercase tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Top 3 Weak Spots
          </h3>
          <div className="space-y-3">
            {topWeaknesses.length > 0 ? (
              topWeaknesses.map((weakness, index) => (
                <StrengthCard key={weakness.category} item={weakness} rank={index + 1} isStrength={false} />
              ))
            ) : (
              <div className="text-sm text-brand-gray p-3 bg-brand-card rounded-lg">
                Keep training to identify areas for improvement
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface StrengthCardProps {
  item: StrengthWeakness;
  rank: number;
  isStrength: boolean;
}

function StrengthCard({ item, rank, isStrength }: StrengthCardProps) {
  const bgColor = isStrength ? 'bg-green-50' : 'bg-amber-50';
  const textColor = isStrength ? 'text-green-700' : 'text-amber-700';
  const barColor = isStrength ? 'bg-green-500' : 'bg-amber-500';
  const rankBg = isStrength ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700';

  return (
    <div className={`p-3 rounded-lg ${bgColor}`}>
      <div className="flex items-start gap-3">
        <div className={`w-6 h-6 rounded-full ${rankBg} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
          {rank}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className={`font-medium ${textColor} truncate`} title={item.category}>
              {item.category}
            </span>
            <span className={`font-bold ${textColor} ml-2`}>
              {item.accuracy}%
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-white/50 rounded-full overflow-hidden">
              <div
                className={`h-full ${barColor} rounded-full`}
                style={{ width: `${item.accuracy}%` }}
              />
            </div>
            <span className="text-xs text-brand-gray whitespace-nowrap">
              {item.reps} reps
            </span>
          </div>
          {item.trend !== 'stable' && item.trendValue !== 0 && (
            <div className={`text-xs mt-1 flex items-center gap-1 ${
              item.trend === 'up' ? 'text-green-600' : 'text-red-500'
            }`}>
              {item.trend === 'up' ? '↑' : '↓'}
              {Math.abs(item.trendValue)}% this week
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
