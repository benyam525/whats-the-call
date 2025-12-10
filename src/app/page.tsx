'use client';

import Link from 'next/link';
import Image from 'next/image';
import { casebookQuestions } from '@/data/casebook';

const gameModes = [
  {
    id: 'film-room',
    icon: '🎬',
    name: 'Film Room',
    description: 'Slow it down. Study the tape. Become undeniable.',
    href: '/play/film-room'
  },
  {
    id: 'daily-5',
    icon: '📅',
    name: 'Daily 5',
    description: 'Five plays. One habit. Built daily.',
    href: '/play/daily-5'
  },
  {
    id: 'sudden-death',
    icon: '⚡',
    name: 'Sudden Death',
    description: '10 seconds. Where instincts win and hesitation ends your run.',
    href: '/play/sudden-death'
  },
  {
    id: 'category-drill',
    icon: '🎯',
    name: 'Category Drill',
    description: 'Reps on reps. Precision on demand.',
    href: '/play/category-drill'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/RuleVisionv2.png"
              alt="RuleVision"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="text-brand-gray hover:text-brand-black transition-colors">
              Dashboard
            </Link>
            <Link href="/ref-god" className="text-brand-gray hover:text-brand-black transition-colors">
              Ref God
            </Link>
            <Link href="/about" className="text-brand-gray hover:text-brand-black transition-colors">
              About
            </Link>
            <Link href="/leaderboard" className="text-brand-gray hover:text-brand-black transition-colors">
              Leaderboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Questions Count Banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium">
            <span className="font-bold">{casebookQuestions.length}</span> official NBA casebook questions now available in RuleVision
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/RuleVisionv2.png"
            alt="RuleVision"
            width={400}
            height={120}
            className="h-auto w-full max-w-md"
          />
        </div>
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
              <h3 className="text-xl font-semibold text-brand-black mb-3 tracking-tight">
                {mode.name}
              </h3>
              <p className="text-brand-gray leading-relaxed">
                {mode.description}
              </p>
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
              <Link href="/dashboard" className="hover:text-brand-black transition-colors">
                Dashboard
              </Link>
              <Link href="/ref-god" className="hover:text-brand-black transition-colors">
                Ref God
              </Link>
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
