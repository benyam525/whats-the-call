'use client';

import { TimeView, WeekViewData, SeasonViewData, DayViewData } from '@/data/dashboard-types';

interface TimeViewSelectorProps {
  currentView: TimeView;
  onViewChange: (view: TimeView) => void;
}

export function TimeViewSelector({ currentView, onViewChange }: TimeViewSelectorProps) {
  const views: { value: TimeView; label: string }[] = [
    { value: 'day', label: 'Today' },
    { value: 'week', label: 'Week' },
    { value: 'season', label: 'Season' },
  ];

  return (
    <div className="inline-flex bg-brand-card rounded-lg p-1">
      {views.map((view) => (
        <button
          key={view.value}
          onClick={() => onViewChange(view.value)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            currentView === view.value
              ? 'bg-white text-brand-black shadow-sm'
              : 'text-brand-gray hover:text-brand-black'
          }`}
        >
          {view.label}
        </button>
      ))}
    </div>
  );
}

interface WeekViewProps {
  data: WeekViewData;
}

export function WeekView({ data }: WeekViewProps) {
  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-brand-black">This Week</h2>
          <p className="text-sm text-brand-gray">
            {formatDate(data.weekStart)} - {formatDate(data.weekEnd)}
          </p>
        </div>
        {data.readinessChange !== 0 && (
          <div className={`text-sm font-medium px-3 py-1 rounded-full ${
            data.readinessChange > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {data.readinessChange > 0 ? '+' : ''}{data.readinessChange} vs last week
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <WeekStat
          label="Questions"
          value={data.totalQuestions.toString()}
          icon="📝"
        />
        <WeekStat
          label="Accuracy"
          value={`${data.avgAccuracy}%`}
          icon="🎯"
        />
        <WeekStat
          label="Days Active"
          value={`${data.daysActive}/7`}
          icon="📅"
        />
      </div>

      {/* Daily Activity Chart */}
      <div>
        <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
          Daily Activity
        </h3>
        <div className="flex items-end gap-2 h-24">
          {getDaysOfWeek(data.weekStart).map((day, index) => {
            const dayData = data.dailyBreakdown?.[index];
            const hasActivity = dayData && dayData.summary.questionsAnswered > 0;
            const height = hasActivity
              ? Math.max(20, (dayData.summary.questionsAnswered / 50) * 100)
              : 10;

            return (
              <div key={day} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full rounded-t transition-all duration-300 ${
                    hasActivity ? 'bg-blue-500' : 'bg-gray-200'
                  }`}
                  style={{ height: `${Math.min(height, 100)}%` }}
                  title={hasActivity ? `${dayData.summary.questionsAnswered} questions` : 'No activity'}
                />
                <span className="text-xs text-brand-gray">{day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface SeasonViewProps {
  data: SeasonViewData;
}

export function SeasonView({ data }: SeasonViewProps) {
  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-brand-black">This Season</h2>
          <p className="text-sm text-brand-gray">
            {formatDate(data.startDate)} - {formatDate(data.endDate)}
          </p>
        </div>
      </div>

      {/* Monthly Trends */}
      {data.monthlyTrends.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
            Monthly Progress
          </h3>
          <div className="space-y-3">
            {data.monthlyTrends.map((month) => (
              <div key={month.month} className="flex items-center gap-4">
                <span className="text-sm text-brand-gray w-16">{formatMonth(month.month)}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${month.accuracy}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-brand-black w-12 text-right">
                  {month.accuracy}%
                </span>
                <span className="text-xs text-brand-gray w-20 text-right">
                  {month.questionsAnswered} Q's
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category Improvement */}
      {data.categoryImprovement.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
            Category Growth
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {data.categoryImprovement.slice(0, 4).map((cat) => (
              <div key={cat.category} className="p-3 bg-brand-card rounded-lg">
                <div className="text-xs text-brand-gray truncate mb-1">{cat.category}</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-brand-gray">{cat.startAccuracy}%</span>
                  <span className="text-brand-gray">→</span>
                  <span className="text-sm font-bold text-brand-black">{cat.currentAccuracy}%</span>
                  {cat.improvement > 0 && (
                    <span className="text-xs text-green-600">+{cat.improvement}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Milestones */}
      {data.milestones.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">
            Milestones
          </h3>
          <div className="space-y-2">
            {data.milestones.slice(0, 5).map((milestone, index) => (
              <div key={index} className="flex items-center gap-3 p-2 bg-brand-card rounded-lg">
                <span className="text-lg">🏆</span>
                <div className="flex-1">
                  <div className="text-sm font-medium text-brand-black">{milestone.title}</div>
                  <div className="text-xs text-brand-gray">{milestone.description}</div>
                </div>
                <span className="text-xs text-brand-gray">{formatDate(milestone.date)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.monthlyTrends.length === 0 && data.categoryImprovement.length === 0 && (
        <div className="text-center py-8 text-brand-gray">
          <p>Keep training to see your season progress!</p>
        </div>
      )}
    </div>
  );
}

interface WeekStatProps {
  label: string;
  value: string;
  icon: string;
}

function WeekStat({ label, value, icon }: WeekStatProps) {
  return (
    <div className="text-center p-3 bg-brand-card rounded-lg">
      <div className="text-xl mb-1">{icon}</div>
      <div className="text-xl font-bold text-brand-black">{value}</div>
      <div className="text-xs text-brand-gray">{label}</div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatMonth(monthStr: string): string {
  const [year, month] = monthStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short' });
}

function getDaysOfWeek(startDate: string): string[] {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const start = new Date(startDate);
  const startDay = start.getDay();
  return [...days.slice(startDay), ...days.slice(0, startDay)].slice(0, 7);
}
