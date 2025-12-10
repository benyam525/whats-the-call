'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Getting Started
  {
    category: 'Getting Started',
    question: 'What is RuleVision?',
    answer: 'RuleVision is a training platform designed for basketball officials to master NBA rules through interactive scenarios, AI-powered explanations, and targeted practice drills. Whether you\'re a new referee or a seasoned veteran, RuleVision helps you see the call before it happens.'
  },
  {
    category: 'Getting Started',
    question: 'Do I need to create an account?',
    answer: 'No account is required to start training. RuleVision uses a visitor ID to track your progress locally. Your stats, streaks, and mastery data are saved automatically as you practice.'
  },
  {
    category: 'Getting Started',
    question: 'Is RuleVision free?',
    answer: 'Yes! RuleVision offers free access to all game modes including Film Room, Daily 5, Sudden Death, and Category Drill. Some advanced dashboard features may be available in premium tiers in the future.'
  },
  // Game Modes
  {
    category: 'Game Modes',
    question: 'What is Film Room?',
    answer: 'Film Room is our core training mode where you can practice at your own pace. Review game scenarios, make your call, and learn from detailed explanations. Filter by category or difficulty to focus your training.'
  },
  {
    category: 'Game Modes',
    question: 'How does Daily 5 work?',
    answer: 'Daily 5 gives you 5 new questions every day. Complete all 5 to build your streak. It\'s designed to help you build a consistent training habit—just a few minutes each day keeps your skills sharp.'
  },
  {
    category: 'Game Modes',
    question: 'What is Sudden Death mode?',
    answer: 'Sudden Death tests your instincts under pressure. You have 10 seconds per question—one wrong answer and your run is over. See how many you can get right and compete on the leaderboard.'
  },
  {
    category: 'Game Modes',
    question: 'How does Category Drill work?',
    answer: 'Category Drill lets you focus on specific rule categories like Fouls, Violations, or Out of Bounds. Track your mastery percentage for each category and target your weak areas.'
  },
  // Ref IQ
  {
    category: 'Ref IQ AI',
    question: 'What is Ref IQ?',
    answer: 'Ref IQ is our AI-powered rules expert trained on the complete 2025-26 NBA rulebook. Ask any question about NBA rules and get instant, accurate answers with rule citations.'
  },
  {
    category: 'Ref IQ AI',
    question: 'What is "Go Deeper"?',
    answer: 'After answering a question, tap "Go Deeper" to get an AI-generated breakdown including: The Ruling (why the answer is correct), The Rule (exact rule text), Why It Matters (game impact), Common Mistakes (what refs get wrong), and a Pro Tip.'
  },
  {
    category: 'Ref IQ AI',
    question: 'How accurate is Ref IQ?',
    answer: 'Ref IQ uses RAG (Retrieval Augmented Generation) to search the official NBA rulebook and provide answers grounded in actual rule text. Every answer includes source citations so you can verify the information.'
  },
  // Progress & Stats
  {
    category: 'Progress & Stats',
    question: 'How is my progress tracked?',
    answer: 'Your accuracy, streaks, response times, and category mastery are all tracked automatically. Visit the Dashboard to see your comprehensive stats including strengths, weaknesses, and improvement trends.'
  },
  {
    category: 'Progress & Stats',
    question: 'What do the mastery percentages mean?',
    answer: 'Mastery percentage reflects your accuracy in each category. As you answer more questions correctly, your mastery increases. It helps identify which rule areas need more practice.'
  },
  {
    category: 'Progress & Stats',
    question: 'How do streaks work?',
    answer: 'Complete Daily 5 every day to build your streak. Your current streak shows consecutive days of completion, and your longest streak is your personal record. Streaks reset if you miss a day.'
  },
  // Leaderboard
  {
    category: 'Leaderboard',
    question: 'How do I get on the leaderboard?',
    answer: 'Play Sudden Death mode and achieve a high score. The leaderboard ranks players by their best Sudden Death runs. You can also set a display name to appear on the board.'
  },
  {
    category: 'Leaderboard',
    question: 'Can I set a display name?',
    answer: 'Yes! After completing Daily 5 or achieving a notable score, you\'ll be prompted to set a display name. This name appears on the leaderboard instead of "Anonymous".'
  },
  // Technical
  {
    category: 'Technical',
    question: 'What browsers are supported?',
    answer: 'RuleVision works best on modern browsers including Chrome, Firefox, Safari, and Edge. The app is fully responsive and works great on mobile devices.'
  },
  {
    category: 'Technical',
    question: 'Is my data saved if I clear my browser?',
    answer: 'Your visitor ID and local progress are stored in your browser. Clearing browser data will reset your local stats. For persistent data across devices, a future account system may be added.'
  },
];

const categories = [...new Set(faqs.map(f => f.category))];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleItem = (index: number) => {
    const newOpen = new Set(openItems);
    if (newOpen.has(index)) {
      newOpen.delete(index);
    } else {
      newOpen.add(index);
    }
    setOpenItems(newOpen);
  };

  const filteredFaqs = activeCategory
    ? faqs.filter(f => f.category === activeCategory)
    : faqs;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-black tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-brand-gray text-lg">
            Everything you need to know about RuleVision
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === null
                ? 'bg-brand-black text-white'
                : 'bg-brand-card text-brand-gray hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-brand-black text-white'
                  : 'bg-brand-card text-brand-gray hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const globalIndex = faqs.indexOf(faq);
            const isOpen = openItems.has(globalIndex);

            return (
              <div
                key={globalIndex}
                className="border border-brand-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(globalIndex)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-brand-card transition-colors"
                >
                  <div>
                    <span className="text-xs text-brand-gray uppercase tracking-wider block mb-1">
                      {faq.category}
                    </span>
                    <span className="font-medium text-brand-black">
                      {faq.question}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-brand-gray transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-brand-gray leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-8 bg-brand-card rounded-2xl border border-brand-border">
          <h2 className="text-xl font-bold text-brand-black mb-2">Still have questions?</h2>
          <p className="text-brand-gray mb-4">
            Ask Ref IQ anything about NBA rules, or explore our documentation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/ref-iq"
              className="px-6 py-3 bg-brand-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Ask Ref IQ
            </Link>
            <Link
              href="/docs"
              className="px-6 py-3 bg-white text-brand-black border border-brand-border rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              View Docs
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between text-sm text-brand-gray">
            <p>&copy; 2024 RuleVision</p>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-brand-black transition-colors">About</Link>
              <Link href="/faq" className="hover:text-brand-black transition-colors">FAQ</Link>
              <Link href="/docs" className="hover:text-brand-black transition-colors">Docs</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
