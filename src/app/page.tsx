'use client';

import Link from 'next/link';
import Image from 'next/image';

const gameModes = [
  {
    id: 'film-room',
    icon: '🎬',
    name: 'Film Room',
    description: 'Practice mode with explanations',
    stat: 'No pressure',
    href: '/play/film-room'
  },
  {
    id: 'daily-5',
    icon: '📅',
    name: 'Daily 5',
    description: '5 questions per day',
    stat: '0 day streak',
    href: '/play/daily-5'
  },
  {
    id: 'sudden-death',
    icon: '⚡',
    name: 'Sudden Death',
    description: 'Answer until you miss',
    stat: 'Best: 0',
    href: '/play/sudden-death'
  },
  {
    id: 'category-drill',
    icon: '🎯',
    name: 'Category Drill',
    description: 'Master specific topics',
    stat: '0% mastery',
    href: '/play/category-drill'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/rulevisionlogo_new.png"
              alt="RuleVision"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-brand-black font-semibold text-lg tracking-tight">RuleVision</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/about" className="text-brand-gray hover:text-brand-black transition-colors">
              About
            </Link>
            <Link href="/leaderboard" className="text-brand-gray hover:text-brand-black transition-colors">
              Leaderboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src="/rulevisionlogo_new.png"
            alt="RuleVision"
            width={120}
            height={120}
            className="h-24 w-auto"
          />
        </div>
        <h1 className="text-5xl font-bold text-brand-black tracking-tighter mb-4">
          RuleVision
        </h1>
        <p className="text-2xl text-brand-black mb-3 font-medium">
          See the Call Before It Happens.
        </p>
        <p className="text-brand-gray mb-12">
          Trusted by the fastest-growing community of dedicated officials
        </p>
        <Link
          href="/play/film-room"
          className="inline-block bg-brand-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Start Training
        </Link>
      </section>

      {/* Game Modes Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gameModes.map((mode) => (
            <Link
              key={mode.id}
              href={mode.href}
              className="group bg-white border border-brand-border rounded-xl p-8 hover:border-brand-black transition-all"
            >
              <div className="text-4xl mb-4">{mode.icon}</div>
              <h3 className="text-xl font-semibold text-brand-black mb-2 tracking-tight">
                {mode.name}
              </h3>
              <p className="text-brand-gray mb-4">
                {mode.description}
              </p>
              <div className="text-sm text-brand-gray font-medium">
                {mode.stat}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-border py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between text-sm text-brand-gray">
            <p>© 2024 RuleVision</p>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-brand-black transition-colors">
                About
              </Link>
              <Link href="/leaderboard" className="hover:text-brand-black transition-colors">
                Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
