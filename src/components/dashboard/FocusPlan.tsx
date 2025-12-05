'use client';

import { FocusPlan, FocusPlanGoal, FocusPlanAction } from '@/data/dashboard-types';

interface FocusPlanProps {
  data: FocusPlan | null;
}

export function FocusPlanCard({ data }: FocusPlanProps) {
  if (!data) {
    return (
      <div className="bg-white rounded-2xl border border-brand-border p-6">
        <h2 className="text-lg font-bold text-brand-black mb-4">14-Day Focus Plan</h2>
        <div className="text-center py-8 text-brand-gray">
          <p>Complete more training to generate your personalized focus plan.</p>
        </div>
      </div>
    );
  }

  const daysRemaining = Math.max(0, Math.ceil(
    (new Date(data.endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  ));

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-brand-black">14-Day Focus Plan</h2>
          <p className="text-sm text-brand-gray">
            {daysRemaining > 0 ? `${daysRemaining} days remaining` : 'Plan complete'}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600">{Math.round(data.overallProgress)}%</div>
          <div className="text-xs text-brand-gray">Progress</div>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="mb-6">
        <div className="h-3 bg-white/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${data.overallProgress}%` }}
          />
        </div>
      </div>

      {/* Goals */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
          Goals
        </h3>
        <div className="space-y-3">
          {data.goals.map((goal, index) => (
            <GoalCard key={index} goal={goal} />
          ))}
        </div>
      </div>

      {/* Actions */}
      {data.actions.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
            Prescribed Actions
          </h3>
          <div className="space-y-2">
            {data.actions.map((action, index) => (
              <ActionItem key={index} action={action} />
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-6 pt-4 border-t border-blue-200">
        <button className="w-full py-3 bg-brand-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
          Start Today's Training
        </button>
      </div>
    </div>
  );
}

interface GoalCardProps {
  goal: FocusPlanGoal;
}

function GoalCard({ goal }: GoalCardProps) {
  const getGoalIcon = () => {
    switch (goal.type) {
      case 'category_improvement':
        return '📈';
      case 'pressure_gap':
        return '🎯';
      case 'consistency':
        return '🔥';
      default:
        return '✓';
    }
  };

  const getProgressColor = () => {
    if (goal.progress >= 100) return 'bg-green-500';
    if (goal.progress >= 50) return 'bg-blue-500';
    return 'bg-amber-500';
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="text-xl">{getGoalIcon()}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-brand-black mb-2">
            {goal.description}
          </p>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${getProgressColor()}`}
                style={{ width: `${Math.min(goal.progress, 100)}%` }}
              />
            </div>
            <span className="text-xs font-medium text-brand-gray whitespace-nowrap">
              {goal.currentValue} → {goal.targetValue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ActionItemProps {
  action: FocusPlanAction;
}

function ActionItem({ action }: ActionItemProps) {
  const getModeIcon = () => {
    switch (action.targetMode) {
      case 'film_room':
        return '🎬';
      case 'sudden_death':
        return '⚡';
      case 'daily_5':
        return '📅';
      case 'category_drill':
        return '🎯';
      default:
        return '✓';
    }
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
      <span className="text-lg">{getModeIcon()}</span>
      <div className="flex-1">
        <span className="text-sm text-brand-black">{action.action}</span>
      </div>
      <span className="text-xs font-medium text-brand-gray bg-white px-2 py-1 rounded">
        {action.frequency}
      </span>
    </div>
  );
}
