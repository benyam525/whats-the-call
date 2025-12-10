'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';

interface DocSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  articles: DocArticle[];
}

interface DocArticle {
  id: string;
  title: string;
  content: string;
}

const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: '🚀',
    description: 'Learn the basics and start training',
    articles: [
      {
        id: 'welcome',
        title: 'Welcome to RuleVision',
        content: `RuleVision is your training partner for mastering NBA officiating. Built for referees at every level, from youth leagues to professional aspirants.

**What You'll Find:**
- **Game Modes** — Four different ways to practice
- **Ref IQ AI** — Instant answers to any rules question
- **Progress Tracking** — See your improvement over time
- **Leaderboards** — Compete with other officials

**Quick Start:**
1. Head to the homepage and pick a game mode
2. Answer scenarios and learn from explanations
3. Use "Go Deeper" for AI-powered breakdowns
4. Track your progress on the Dashboard`
      },
      {
        id: 'first-session',
        title: 'Your First Training Session',
        content: `**Recommended First Steps:**

1. **Start with Film Room**
   - No time pressure
   - Full explanations after each question
   - Great for learning the format

2. **Try 5-10 Questions**
   - Get comfortable with the interface
   - Read the explanations carefully
   - Use "Go Deeper" on questions you find tricky

3. **Check Your Dashboard**
   - See your initial accuracy
   - Identify any weak categories
   - Set goals for improvement

**Pro Tip:** Don't rush. Quality reps beat quantity every time.`
      },
    ]
  },
  {
    id: 'game-modes',
    title: 'Game Modes',
    icon: '🎮',
    description: 'Four ways to sharpen your officiating skills',
    articles: [
      {
        id: 'film-room',
        title: 'Film Room',
        content: `**Overview:**
Film Room is the foundation of RuleVision training. Study scenarios at your own pace with no time limits.

**Features:**
- Unlimited practice sessions
- Filter by category (Fouls, Violations, etc.)
- Filter by difficulty (Easy, Medium, Hard)
- Detailed explanations after each answer
- "Go Deeper" AI analysis available

**Best For:**
- New officials learning the rules
- Deep study sessions
- Exploring specific rule areas

**How to Use:**
1. Navigate to Film Room from the homepage
2. Optionally filter by category or difficulty
3. Read the scenario carefully
4. Make your call
5. Study the explanation
6. Tap "Go Deeper" for more insight`
      },
      {
        id: 'daily-5',
        title: 'Daily 5',
        content: `**Overview:**
Five new questions every day. Build consistency with a daily habit.

**Features:**
- Fresh questions daily (resets at midnight)
- Streak tracking (consecutive days completed)
- Progress saved if you leave mid-session
- Leaderboard for streaks

**Streak System:**
- Complete all 5 questions to maintain your streak
- Miss a day = streak resets to 0
- Longest streak is saved as your personal record

**Best For:**
- Building consistent training habits
- Maintaining rule knowledge
- Quick daily practice (5-10 minutes)

**Tips:**
- Set a daily reminder
- Complete first thing in the morning
- Don't break the chain!`
      },
      {
        id: 'sudden-death',
        title: 'Sudden Death',
        content: `**Overview:**
Test your instincts under pressure. 10 seconds per question, one wrong answer ends your run.

**Features:**
- 10-second timer per question
- Progressive difficulty
- High score tracking
- Global leaderboard rankings

**Scoring:**
- Each correct answer = 1 point
- Run ends on first wrong answer
- Your best score is saved

**Best For:**
- Testing reaction time
- Pressure training
- Competitive players
- Identifying gaps in instant recall

**Strategy:**
- Trust your first instinct
- Don't overthink—10 seconds goes fast
- Focus on high-frequency scenarios
- Practice in Film Room first`
      },
      {
        id: 'category-drill',
        title: 'Category Drill',
        content: `**Overview:**
Target specific rule categories for focused improvement.

**Categories Include:**
- Fouls (Personal, Flagrant, Technical)
- Violations (Traveling, 3-Seconds, etc.)
- Out of Bounds
- Shot Clock
- And more...

**Mastery System:**
- Each category tracks your accuracy
- Mastery percentage shown for each
- Sub-categories available for deeper focus

**Best For:**
- Targeting weak areas
- Systematic rule coverage
- Pre-game preparation (focus on game-relevant calls)

**Recommended Approach:**
1. Start with your lowest mastery category
2. Do 20+ reps
3. Review mistakes with "Go Deeper"
4. Move to next category`
      },
    ]
  },
  {
    id: 'ref-iq',
    title: 'Ref IQ AI',
    icon: '🏀',
    description: 'Your AI-powered rules expert',
    articles: [
      {
        id: 'asking-questions',
        title: 'Asking Ref IQ',
        content: `**What is Ref IQ?**
Ref IQ is an AI assistant trained on the complete 2025-26 NBA rulebook. Ask anything about rules and get accurate, cited answers.

**How to Use:**
1. Go to the Ref IQ page
2. Type your question (or tap a suggested question)
3. Get an instant answer with rule citations

**Example Questions:**
- "What is a flagrant foul?"
- "When can a coach challenge a call?"
- "How does the gather step work?"
- "What's the penalty for a delay of game?"

**Answer Format:**
Each response includes:
- Direct answer to your question
- Rule citations (Rule X, Section Y)
- Source references for verification

**Tips for Better Answers:**
- Be specific ("What's a flagrant 2?" vs "What's a foul?")
- Ask about specific scenarios
- Follow up for clarification`
      },
      {
        id: 'go-deeper',
        title: 'Go Deeper Feature',
        content: `**What is Go Deeper?**
After answering any question, tap "Go Deeper" to get an AI-generated comprehensive breakdown.

**Sections Included:**

1. **THE RULING**
   - Why the correct answer is correct
   - Clear, authoritative explanation

2. **THE RULE**
   - Exact rule text that applies
   - Proper citation format

3. **WHY IT MATTERS**
   - Game impact of this call
   - Real-world significance

4. **COMMON MISTAKES**
   - What officials often get wrong
   - Why these mistakes happen

5. **PRO TIP**
   - Practical advice for the court
   - What to watch for

**Best For:**
- Learning from mistakes
- Understanding rule nuances
- Building deeper knowledge`
      },
      {
        id: 'rag-technology',
        title: 'How It Works (RAG)',
        content: `**The Technology Behind Ref IQ**

Ref IQ uses RAG (Retrieval Augmented Generation) to provide accurate answers.

**How RAG Works:**
1. Your question is converted to an embedding (vector)
2. We search our NBA rulebook database for relevant sections
3. The most relevant rules are retrieved
4. GPT-4 generates an answer using ONLY those rules
5. Citations are included for transparency

**Why This Matters:**
- Answers are grounded in actual rules
- No hallucination—only facts from the rulebook
- You can verify every answer
- Always up-to-date with current rules

**Database Contents:**
- Complete 2025-26 NBA Official Rules
- All sections and subsections
- Cross-referenced content

**Accuracy:**
While highly accurate, always verify critical rulings with official sources for game situations.`
      },
    ]
  },
  {
    id: 'progress',
    title: 'Progress & Stats',
    icon: '📊',
    description: 'Track your improvement journey',
    articles: [
      {
        id: 'dashboard',
        title: 'Dashboard Overview',
        content: `**Your Command Center**

The Dashboard shows comprehensive stats about your training.

**Key Metrics:**

1. **Overall Accuracy**
   - Total questions answered
   - Correct percentage
   - Trend over time

2. **Streaks**
   - Current Daily 5 streak
   - Longest streak achieved
   - Streak history

3. **Category Mastery**
   - Accuracy by rule category
   - Visual mastery percentages
   - Weak areas highlighted

4. **Recent Activity**
   - Last 7 days of training
   - Questions per day
   - Accuracy trends

**Time Views:**
- Day: Today's performance
- Week: 7-day rolling average
- Season: All-time stats`
      },
      {
        id: 'mastery',
        title: 'Mastery System',
        content: `**Understanding Mastery**

Mastery reflects your proficiency in each rule category.

**How It's Calculated:**
- Based on accuracy in that category
- Weighted by recency (recent answers matter more)
- Minimum 5 questions to show mastery %

**Mastery Levels:**
- 0-40%: Needs Work
- 40-60%: Learning
- 60-80%: Proficient
- 80-90%: Advanced
- 90%+: Mastered

**Improving Mastery:**
1. Use Category Drill for focused practice
2. Study explanations on wrong answers
3. Use Go Deeper for difficult rules
4. Revisit categories after a few days

**Decay:**
Mastery doesn't decay—your percentage reflects your historical accuracy.`
      },
    ]
  },
  {
    id: 'leaderboard',
    title: 'Leaderboards',
    icon: '🏆',
    description: 'Compete with officials worldwide',
    articles: [
      {
        id: 'rankings',
        title: 'Leaderboard Rankings',
        content: `**Competition Types:**

1. **Sudden Death Leaderboard**
   - Ranked by highest score
   - Your best run counts
   - Updated in real-time

2. **Daily 5 Streaks**
   - Ranked by current streak
   - Shows consecutive days
   - Resets if you miss a day

**Display Names:**
- Set your display name after completing Daily 5
- Names appear instead of "Anonymous"
- Keep it clean and professional

**Your Position:**
- Your rank is highlighted on the board
- See how many points to next rank
- Compare with friends

**Privacy:**
Only your display name and score are visible. No personal information is shared.`
      },
    ]
  },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<string>(docSections[0].id);
  const [activeArticle, setActiveArticle] = useState<string>(docSections[0].articles[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentSection = docSections.find(s => s.id === activeSection);
  const currentArticle = currentSection?.articles.find(a => a.id === activeArticle);

  const handleArticleClick = (sectionId: string, articleId: string) => {
    setActiveSection(sectionId);
    setActiveArticle(articleId);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="flex">
        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-black text-white rounded-full shadow-lg flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-brand-card border-r border-brand-border overflow-y-auto z-40 transform transition-transform lg:transform-none ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
          style={{ top: '73px', height: 'calc(100vh - 73px)' }}
        >
          {/* Mobile Close */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-brand-border"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-6">
            <h2 className="text-lg font-bold text-brand-black mb-6">Documentation</h2>

            <nav className="space-y-6">
              {docSections.map(section => (
                <div key={section.id}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{section.icon}</span>
                    <span className="font-medium text-brand-black text-sm">{section.title}</span>
                  </div>
                  <ul className="space-y-1 ml-7">
                    {section.articles.map(article => (
                      <li key={article.id}>
                        <button
                          onClick={() => handleArticleClick(section.id, article.id)}
                          className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                            activeSection === section.id && activeArticle === article.id
                              ? 'bg-brand-black text-white'
                              : 'text-brand-gray hover:bg-white hover:text-brand-black'
                          }`}
                        >
                          {article.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Backdrop for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="max-w-3xl mx-auto px-6 py-12">
            {currentSection && currentArticle && (
              <>
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-brand-gray mb-6">
                  <span>{currentSection.icon}</span>
                  <span>{currentSection.title}</span>
                  <span>/</span>
                  <span className="text-brand-black">{currentArticle.title}</span>
                </div>

                {/* Article Title */}
                <h1 className="text-3xl font-bold text-brand-black tracking-tight mb-8">
                  {currentArticle.title}
                </h1>

                {/* Article Content */}
                <div className="prose prose-gray max-w-none">
                  {currentArticle.content.split('\n\n').map((paragraph, idx) => {
                    // Handle headers
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h2 key={idx} className="text-xl font-bold text-brand-black mt-8 mb-4">
                          {paragraph.replace(/\*\*/g, '')}
                        </h2>
                      );
                    }

                    // Handle lists
                    if (paragraph.includes('\n- ')) {
                      const [title, ...items] = paragraph.split('\n');
                      return (
                        <div key={idx} className="mb-6">
                          {title && (
                            <p className="font-medium text-brand-black mb-2">
                              {title.replace(/\*\*/g, '')}
                            </p>
                          )}
                          <ul className="list-disc list-inside space-y-1 text-brand-gray">
                            {items.map((item, i) => (
                              <li key={i}>{item.replace('- ', '').replace(/\*\*/g, '')}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    }

                    // Handle numbered lists
                    if (paragraph.match(/^\d+\./m)) {
                      const items = paragraph.split('\n').filter(l => l.trim());
                      return (
                        <ol key={idx} className="list-decimal list-inside space-y-2 mb-6 text-brand-gray">
                          {items.map((item, i) => (
                            <li key={i} className="leading-relaxed">
                              {item.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '')}
                            </li>
                          ))}
                        </ol>
                      );
                    }

                    // Regular paragraph
                    return (
                      <p key={idx} className="text-brand-gray leading-relaxed mb-4">
                        {paragraph.split('**').map((part, i) =>
                          i % 2 === 1 ? <strong key={i} className="text-brand-black">{part}</strong> : part
                        )}
                      </p>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-brand-border">
                  {(() => {
                    const allArticles = docSections.flatMap(s =>
                      s.articles.map(a => ({ section: s, article: a }))
                    );
                    const currentIndex = allArticles.findIndex(
                      a => a.section.id === activeSection && a.article.id === activeArticle
                    );
                    const prev = allArticles[currentIndex - 1];
                    const next = allArticles[currentIndex + 1];

                    return (
                      <>
                        {prev ? (
                          <button
                            onClick={() => handleArticleClick(prev.section.id, prev.article.id)}
                            className="text-left group"
                          >
                            <span className="text-xs text-brand-gray">Previous</span>
                            <div className="text-brand-black font-medium group-hover:text-brand-gray transition-colors">
                              ← {prev.article.title}
                            </div>
                          </button>
                        ) : <div />}
                        {next ? (
                          <button
                            onClick={() => handleArticleClick(next.section.id, next.article.id)}
                            className="text-right group"
                          >
                            <span className="text-xs text-brand-gray">Next</span>
                            <div className="text-brand-black font-medium group-hover:text-brand-gray transition-colors">
                              {next.article.title} →
                            </div>
                          </button>
                        ) : <div />}
                      </>
                    );
                  })()}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
