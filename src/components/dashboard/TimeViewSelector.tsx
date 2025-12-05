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

// ============================================
// Day View Component
// ============================================

interface DayViewProps {
  data: DayViewData;
}

export function DayView({ data }: DayViewProps) {
  const { summary, sessionDetails, categoryBreakdown, modeBreakdown, insights, comparisonToAverage } = data;

  return (
    <div className="space-y-6">
      {/* Today's Overview */}
      <div className="bg-white rounded-2xl border border-brand-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-brand-black">Today</h2>
            <p className="text-sm text-brand-gray">{formatDateLong(data.date)}</p>
          </div>
          <div className="flex items-center gap-2">
            {comparisonToAverage.questionsVsAvg > 0 && (
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                +{comparisonToAverage.questionsVsAvg} vs avg
              </span>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <DayStat label="Questions" value={summary.questionsAnswered.toString()} icon="📝" />
          <DayStat label="Accuracy" value={`${summary.accuracy}%`} icon="🎯" />
          <DayStat label="Streak" value={`${summary.streakDays} days`} icon="🔥" />
          <DayStat label="Daily 5" value={summary.daily5Score !== null ? `${summary.daily5Score}/5` : '--'} icon="✅" />
        </div>

        {/* Pressure vs Calm */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-xs text-blue-600 uppercase tracking-wide mb-1">Calm Mode</div>
            <div className="text-2xl font-bold text-blue-700">{summary.calmAccuracy}%</div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <div className="text-xs text-orange-600 uppercase tracking-wide mb-1">Under Pressure</div>
            <div className="text-2xl font-bold text-orange-700">{summary.pressureAccuracy}%</div>
          </div>
        </div>

        {/* Insights */}
        {insights && insights.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-brand-black uppercase tracking-wide">Insights</h3>
            {insights.map((insight, i) => (
              <div key={i} className={`p-3 rounded-lg text-sm flex items-center gap-2 ${
                insight.type === 'positive' ? 'bg-green-50 text-green-800' :
                insight.type === 'improvement' ? 'bg-blue-50 text-blue-800' :
                insight.type === 'focus' ? 'bg-amber-50 text-amber-800' :
                'bg-red-50 text-red-800'
              }`}>
                <span>{insight.type === 'positive' ? '✨' : insight.type === 'improvement' ? '📈' : insight.type === 'focus' ? '🎯' : '⚠️'}</span>
                {insight.message}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Session Details */}
      {sessionDetails && sessionDetails.length > 0 && (
        <div className="bg-white rounded-2xl border border-brand-border p-6">
          <h3 className="text-lg font-bold text-brand-black mb-4">Sessions</h3>
          <div className="space-y-3">
            {sessionDetails.map((session, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-brand-card rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-lg">
                    {session.mode === 'film_room' ? '🎬' :
                     session.mode === 'daily_5' ? '📅' :
                     session.mode === 'sudden_death' ? '⚡' : '🎯'}
                  </span>
                  <div>
                    <div className="font-medium text-brand-black capitalize">
                      {session.mode.replace('_', ' ')}
                      {session.category && <span className="text-brand-gray ml-1">• {session.category}</span>}
                    </div>
                    <div className="text-xs text-brand-gray">{session.startTime} - {session.endTime}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-brand-black">{session.correct}/{session.questions}</div>
                  <div className="text-xs text-brand-gray">{session.accuracy}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category Breakdown */}
      {categoryBreakdown && categoryBreakdown.length > 0 && (
        <div className="bg-white rounded-2xl border border-brand-border p-6">
          <h3 className="text-lg font-bold text-brand-black mb-4">Categories Practiced</h3>
          <div className="space-y-3">
            {categoryBreakdown.map((cat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-sm font-medium text-brand-black">{cat.category}</div>
                  <div className="h-2 bg-gray-100 rounded-full mt-1 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${cat.accuracy >= 85 ? 'bg-green-500' : cat.accuracy >= 70 ? 'bg-blue-500' : 'bg-amber-500'}`}
                      style={{ width: `${cat.accuracy}%` }}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-brand-black">{cat.accuracy}%</div>
                  <div className="text-xs text-brand-gray">{cat.correct}/{cat.questions}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface DayStatProps {
  label: string;
  value: string;
  icon: string;
}

function DayStat({ label, value, icon }: DayStatProps) {
  return (
    <div className="text-center p-3 bg-brand-card rounded-lg">
      <div className="text-lg mb-1">{icon}</div>
      <div className="text-xl font-bold text-brand-black">{value}</div>
      <div className="text-xs text-brand-gray">{label}</div>
    </div>
  );
}

// ============================================
// Week View Component
// ============================================

interface WeekViewProps {
  data: WeekViewData;
}

export function WeekView({ data }: WeekViewProps) {
  return (
    <div className="space-y-6">
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
          <WeekStat label="Questions" value={data.totalQuestions.toString()} icon="📝" />
          <WeekStat label="Accuracy" value={`${data.avgAccuracy}%`} icon="🎯" />
          <WeekStat label="Days Active" value={`${data.daysActive}/7`} icon="📅" />
        </div>

        {/* Daily Activity Chart */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-brand-black mb-3 uppercase tracking-wide">Daily Activity</h3>
          <div className="flex items-end gap-2 h-24">
            {data.dailyBreakdown.map((day, index) => {
              const hasActivity = day.questions > 0;
              const maxQ = Math.max(...data.dailyBreakdown.map(d => d.questions), 1);
              const height = hasActivity ? Math.max(15, (day.questions / maxQ) * 100) : 8;

              return (
                <div key={index} className="flex-1 flex flex-col items-center gap-1">
                  <div className="text-[10px] text-brand-gray mb-1">
                    {hasActivity ? `${day.accuracy}%` : ''}
                  </div>
                  <div
                    className={`w-full rounded-t transition-all duration-300 ${
                      !hasActivity ? 'bg-gray-200' :
                      day.streakMaintained ? 'bg-blue-500' : 'bg-orange-400'
                    }`}
                    style={{ height: `${Math.min(height, 100)}%` }}
                    title={hasActivity ? `${day.questions} questions, ${day.accuracy}%` : 'No activity'}
                  />
                  <span className="text-xs text-brand-gray">
                    {getDayOfWeekShort(day.date)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Insights */}
        {data.weeklyInsights && data.weeklyInsights.length > 0 && (
          <div className="space-y-2">
            {data.weeklyInsights.map((insight, i) => (
              <div key={i} className={`p-3 rounded-lg text-sm flex items-center gap-2 ${
                insight.type === 'achievement' ? 'bg-green-50 text-green-800' :
                insight.type === 'improvement' ? 'bg-blue-50 text-blue-800' :
                insight.type === 'streak' ? 'bg-purple-50 text-purple-800' :
                'bg-amber-50 text-amber-800'
              }`}>
                <span>
                  {insight.type === 'achievement' ? '🏆' :
                   insight.type === 'improvement' ? '📈' :
                   insight.type === 'streak' ? '🔥' : '🎯'}
                </span>
                {insight.message}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Category Focus */}
      {data.categoryFocus && data.categoryFocus.length > 0 && (
        <div className="bg-white rounded-2xl border border-brand-border p-6">
          <h3 className="text-lg font-bold text-brand-black mb-4">Category Focus</h3>
          <div className="space-y-3">
            {data.categoryFocus.slice(0, 6).map((cat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-sm font-medium text-brand-black">{cat.category}</div>
                  <div className="h-2 bg-gray-100 rounded-full mt-1 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${cat.accuracy >= 85 ? 'bg-green-500' : cat.accuracy >= 70 ? 'bg-blue-500' : 'bg-amber-500'}`}
                      style={{ width: `${cat.accuracy}%` }}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-brand-black">{cat.accuracy}%</div>
                  <div className="text-xs text-brand-gray">{cat.questions} Q</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
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

function formatDateLong(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

function formatMonth(monthStr: string): string {
  const [year, month] = monthStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short' });
}

function getDayOfWeekShort(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'short' }).substring(0, 2);
}

function getDaysOfWeek(startDate: string): string[] {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const start = new Date(startDate);
  const startDay = start.getDay();
  return [...days.slice(startDay), ...days.slice(0, startDay)].slice(0, 7);
}
