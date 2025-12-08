'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Hardcoded salary ranges per level
const SALARY_RANGES = {
  'youth-rec': { min: 25, max: 50, label: 'Youth/Rec League' },
  'high-school': { min: 50, max: 150, label: 'High School' },
  'aau-travel': { min: 75, max: 200, label: 'AAU/Travel' },
  'juco': { min: 100, max: 250, label: 'Junior College' },
  'd2-d3': { min: 150, max: 400, label: 'D2/D3 College' },
  'd1': { min: 300, max: 800, label: 'D1 College' },
  'g-league': { min: 600, max: 1500, label: 'G-League' },
  'nba': { min: 3000, max: 10000, label: 'NBA' },
};

export default function MarketingPage() {
  const [currentLevel, setCurrentLevel] = useState('high-school');
  const [targetLevel, setTargetLevel] = useState('d1');
  const [gamesPerSeason, setGamesPerSeason] = useState(30);
  const [yearsReffing, setYearsReffing] = useState(10);

  const calculateEarnings = () => {
    const current = SALARY_RANGES[currentLevel as keyof typeof SALARY_RANGES];
    const target = SALARY_RANGES[targetLevel as keyof typeof SALARY_RANGES];

    // Annual range at target level
    const annualMin = target.min * gamesPerSeason;
    const annualMax = target.max * gamesPerSeason;

    // Lifetime range (assuming progression to target level)
    const lifetimeMin = annualMin * yearsReffing;
    const lifetimeMax = annualMax * yearsReffing;

    return { annualMin, annualMax, lifetimeMin, lifetimeMax };
  };

  const earnings = calculateEarnings();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/RuleVisionv2.png"
              alt="RuleVision"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-brand-gray hover:text-brand-black transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-brand-gray hover:text-brand-black transition-colors">
              Pricing
            </a>
            <Link href="/" className="text-brand-gray hover:text-brand-black transition-colors">
              Log In
            </Link>
            <Link
              href="#pricing"
              className="bg-brand-black text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight text-brand-black">
              RuleVision is the Duolingo for basketball referees.
            </h1>
            {/* NBA Accent Line */}
            <div className="flex w-full max-w-4xl mb-6">
              <div className="h-[3px] flex-1" style={{ backgroundColor: '#C9082A' }} />
              <div className="h-[3px] flex-1" style={{ backgroundColor: '#17408B' }} />
            </div>
            <p className="text-xl md:text-2xl text-brand-gray mb-10 leading-relaxed max-w-3xl">
              RuleVision turns the NBA rulebook into a daily training system that helps officials build instinct, accuracy, and confidence—through scenario-based drills, rapid-fire questions, and adaptive practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing"
                className="bg-brand-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors text-center"
              >
                Start Free
              </Link>
              <a
                href="#how-it-works"
                className="border-2 border-brand-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors text-center text-brand-black"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Question Bank Stats Banner */}
      <section className="py-8 bg-brand-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Questions Counter */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold tracking-tighter">
                262<span className="text-2xl md:text-3xl align-top">+</span>
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mt-1">
                Scenario Questions
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-gray-700" />

            {/* Categories Counter */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold tracking-tighter">
                29
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mt-1">
                Rule Categories
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-gray-700" />

            {/* Growing Badge */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-green-600 px-4 py-2 rounded-full mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-300"></span>
                </span>
                <span className="text-sm font-semibold">Growing Weekly</span>
              </div>
              <div className="text-sm text-gray-400">
                New questions added regularly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="how-it-works" className="py-24 bg-brand-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-brand-black tracking-tighter">
            Why RuleVision Works
          </h2>
          {/* NBA Accent Line */}
          <div className="flex w-full max-w-md mx-auto mb-12">
            <div className="h-[3px] flex-1" style={{ backgroundColor: '#C9082A' }} />
            <div className="h-[3px] flex-1" style={{ backgroundColor: '#17408B' }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-brand-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-black">
                Turning the 400-page rulebook into muscle memory
              </h3>
              <p className="text-brand-gray mb-6 leading-relaxed">
                The NBA rulebook is dense, technical, and unreadable to 95% of officials. Most refs never read it cover-to-cover. RuleVision converts rulebook knowledge into instinct.
              </p>
              <p className="text-sm font-semibold text-brand-black mb-3">How we do it:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Repetition</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Spaced practice</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Pressure-timed decisions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Concept grouping</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Scenario variations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Mastery tracking</span>
                </li>
              </ul>
              <p className="text-brand-gray italic text-sm">
                This makes RuleVision the Duolingo for NBA rules. No one else offers that.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-brand-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-black">
                Daily, habit-forming practice (no one in officiating has this)
              </h3>
              <p className="text-brand-gray mb-6 leading-relaxed">
                Right now, refs have camps, casebooks, PDFs, and the occasional quiz—but not a daily training rhythm that sharpens them all season.
              </p>
              <p className="text-sm font-semibold text-brand-black mb-3">What RuleVision adds:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Daily 5</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Sudden Death</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Category Drill</span>
                </li>
              </ul>
              <p className="text-sm font-semibold text-brand-black mb-3">Benefits:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Consistency</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Daily reps</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Gamification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Skill progression</span>
                </li>
              </ul>
              <p className="text-brand-gray italic text-sm">
                Refs want to stay sharp, but have no structured way to do it. RuleVision fills that gap.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-brand-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-black">
                Scenario-based decision training that mimics game pressure
              </h3>
              <p className="text-brand-gray mb-6 leading-relaxed">
                Most refs struggle with the gray areas: continuation, LGP, verticality, the cylinder rule, screen legality, advantage/disadvantage. The rulebook alone doesn't teach decision-making—RuleVision does.
              </p>
              <p className="text-sm font-semibold text-brand-black mb-3">Key concepts covered:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Continuation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Legal guarding position (LGP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Verticality</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Cylinder rule</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Screen legality</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-black">•</span>
                  <span className="text-brand-gray">Advantage/disadvantage</span>
                </li>
              </ul>
              <p className="text-brand-gray italic text-sm">
                RuleVision lets officials simulate judgment calls in a safe, repeatable environment—no film needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black tracking-tighter">
              RuleVision Pricing
            </h2>
            {/* NBA Accent Line */}
            <div className="flex w-full max-w-md mx-auto mb-4">
              <div className="h-[3px] flex-1" style={{ backgroundColor: '#C9082A' }} />
              <div className="h-[3px] flex-1" style={{ backgroundColor: '#17408B' }} />
            </div>
            <p className="text-xl text-brand-black mb-2">
              Train Smarter. See the Call Before It Happens.
            </p>
            <p className="text-lg text-brand-gray">
              Choose the plan that matches your ambition.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Free Tier */}
            <div className="bg-white border border-brand-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-brand-black">Free</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-brand-black">$0</span>
                <span className="text-brand-gray"> / forever</span>
              </div>
              <p className="text-brand-gray mb-6 text-sm leading-relaxed">
                For new officials and curious learners. Build the habit.
              </p>
              <div className="mb-6">
                <p className="text-sm font-semibold text-brand-black mb-3">Includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">5 questions per day</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">1 Sudden Death attempt per day</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">"Personal Fouls" category unlocked only</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">Basic streak tracking</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">Limited performance stats</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-brand-gray mb-6">
                Perfect for: New officials getting started and fans who want to test their knowledge.
              </p>
              <Link
                href="/"
                className="block w-full bg-gray-200 text-brand-black text-center py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Start Free
              </Link>
            </div>

            {/* Pro Tier - Most Popular */}
            <div className="bg-white border-2 border-brand-black rounded-2xl p-8 relative transform md:scale-105 shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-black px-4 py-1 rounded-full text-sm font-bold text-white">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand-black">Pro</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-brand-black">$19</span>
                <span className="text-brand-gray">/mo</span>
                <p className="text-sm text-brand-gray">or $149/year — <span className="text-green-600 font-semibold">Save 35%</span></p>
              </div>
              <p className="text-brand-gray mb-6 text-sm leading-relaxed">
                For officials who take their craft seriously.
              </p>
              <div className="mb-6">
                <p className="text-sm font-semibold text-brand-black mb-3">Everything in Free, plus:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">Unlimited questions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">Unlimited Sudden Death attempts</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">All 29 rule categories unlocked</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">Full rulebook explanations on every question</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">Smart difficulty progression</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">Bookmarking for tricky questions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">Mastery dashboard (abbreviated)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">Full Daily 5 access</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">Category Drill mode</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-brand-black mt-1">✓</span>
                    <span className="text-brand-gray">Film Room mode</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-brand-gray mb-6">
                Perfect for: High school, AAU, and rec officials who want daily reps.
              </p>
              <Link
                href="/"
                className="block w-full bg-brand-black text-white text-center py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
              >
                Go Pro
              </Link>
            </div>

            {/* Elite Tier */}
            <div className="bg-white border border-brand-border rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-4 py-1 rounded-full text-sm font-bold text-white">
                For Serious Officials
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand-black">Elite</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-brand-black">$39</span>
                <span className="text-brand-gray">/mo</span>
                <p className="text-sm text-brand-gray">or $299/year — <span className="text-green-600 font-semibold">Save 36%</span></p>
              </div>
              <p className="text-brand-gray mb-6 text-sm leading-relaxed">
                For officials chasing the next level.
              </p>
              <div className="mb-6">
                <p className="text-sm font-semibold text-brand-black mb-3">Everything in Pro, plus:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-brand-gray">Full dashboard with all analytics</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-brand-gray">Advanced analytics & trend tracking</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-brand-gray">Performance breakdown by rule section</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-brand-gray">Personalized "weakness → drill" recommendations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-brand-gray">Exam Mode (timed 50-question assessments)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-brand-gray">Printable performance reports (PDF export)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-brand-gray">Priority access to new question packs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span className="text-brand-gray">Custom difficulty tuning</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-brand-gray mb-6">
                Perfect for: Officials pursuing college, G-League, or professional advancement.
              </p>
              <Link
                href="/"
                className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Go Elite
              </Link>
            </div>
          </div>

          {/* For Associations B2B Section */}
          <div className="max-w-4xl mx-auto bg-gray-50 border border-brand-border rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Trusted by 50+ associations
                </div>
                <h3 className="text-2xl font-bold mb-2 text-brand-black">Train Your Entire Officiating Staff</h3>
                <p className="text-lg text-brand-gray mb-3">Bulk licensing for associations, camps, and training programs.</p>
                <p className="text-brand-gray text-sm">
                  Give every official in your organization access to RuleVision. Get group analytics, branded certificates, and dedicated support. State associations, conference officiating coordinators, and referee camps trust RuleVision to sharpen their crews.
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-brand-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Certification Tiers */}
          <div className="max-w-4xl mx-auto bg-brand-card border border-brand-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-brand-black text-center">RuleVision Certification</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 text-center border border-brand-border">
                <div className="text-3xl mb-2">🥉</div>
                <h4 className="font-bold text-brand-black mb-1">Level 1</h4>
                <p className="text-2xl font-bold text-brand-black mb-2">$49</p>
                <p className="text-xs text-brand-gray">Foundation certification</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-brand-border">
                <div className="text-3xl mb-2">🥈</div>
                <h4 className="font-bold text-brand-black mb-1">Level 2</h4>
                <p className="text-2xl font-bold text-brand-black mb-2">$79</p>
                <p className="text-xs text-brand-gray">Advanced certification</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-brand-border">
                <div className="text-3xl mb-2">🥇</div>
                <h4 className="font-bold text-brand-black mb-1">Level 3</h4>
                <p className="text-2xl font-bold text-brand-black mb-2">$99</p>
                <p className="text-xs text-brand-gray">Elite certification</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-brand-gray mb-4">
                <strong>Annual Recertification:</strong> $29 to maintain active status
              </p>
              <p className="text-sm text-brand-gray mb-4">
                Includes: Timed proctored-style assessment • Downloadable certificate with unique ID • Digital badge for LinkedIn • Shareable verification link • Listed in RuleVision Certified Directory
              </p>
              <Link
                href="/"
                className="inline-block bg-brand-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
              >
                Get Certified
              </Link>
            </div>
          </div>

          {/* Ref Path Earnings Explorer */}
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-3xl font-bold text-center mb-3 text-brand-black tracking-tighter">
              Ref Path Earnings Explorer
            </h3>
            <p className="text-center text-brand-gray mb-8 max-w-2xl mx-auto">
              Map your officiating journey and explore potential earning ranges at each level. Used by current NBA refs to understand the financial landscape of officiating.
            </p>

            <div className="bg-white border border-brand-border rounded-2xl p-8">
              {/* Input Controls */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">
                    Current Level
                  </label>
                  <select
                    value={currentLevel}
                    onChange={(e) => setCurrentLevel(e.target.value)}
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black text-brand-black"
                  >
                    {Object.entries(SALARY_RANGES).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">
                    Target Level
                  </label>
                  <select
                    value={targetLevel}
                    onChange={(e) => setTargetLevel(e.target.value)}
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black text-brand-black"
                  >
                    {Object.entries(SALARY_RANGES).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">
                    Games Per Season
                  </label>
                  <input
                    type="number"
                    value={gamesPerSeason}
                    onChange={(e) => setGamesPerSeason(Number(e.target.value))}
                    min="1"
                    max="200"
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black text-brand-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">
                    Years Officiating
                  </label>
                  <input
                    type="number"
                    value={yearsReffing}
                    onChange={(e) => setYearsReffing(Number(e.target.value))}
                    min="1"
                    max="40"
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black text-brand-black"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-brand-border">
                <div className="bg-brand-card rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-brand-gray mb-2">Annual Earning Range</h4>
                  <p className="text-3xl font-bold text-brand-black">
                    ${earnings.annualMin.toLocaleString()} - ${earnings.annualMax.toLocaleString()}
                  </p>
                  <p className="text-xs text-brand-gray mt-1">at target level</p>
                </div>

                <div className="bg-brand-card rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-brand-gray mb-2">Lifetime Earning Range</h4>
                  <p className="text-3xl font-bold text-brand-black">
                    ${earnings.lifetimeMin.toLocaleString()} - ${earnings.lifetimeMax.toLocaleString()}
                  </p>
                  <p className="text-xs text-brand-gray mt-1">over {yearsReffing} years</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs text-brand-black leading-relaxed">
                  <strong>Important:</strong> These are estimated ranges based on typical per-game fees at each level. Actual earnings vary by region, league, experience, and availability. NBA positions are extremely competitive and rare. This tool is for inspiration and planning—not a guarantee of income. Many current NBA officials use similar frameworks to understand the financial progression of officiating careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Every Plan Includes */}
      <section className="py-16 bg-brand-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-8 text-brand-black">Every Plan Includes:</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 justify-center">
              <span className="text-brand-black">✓</span>
              <span className="text-brand-gray">Daily practice</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <span className="text-brand-black">✓</span>
              <span className="text-brand-gray">NBA rulebook-aligned questions</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <span className="text-brand-black">✓</span>
              <span className="text-brand-gray">Real-world scenarios</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <span className="text-brand-black">✓</span>
              <span className="text-brand-gray">24/7 training access</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:col-span-2">
              <span className="text-brand-black">✓</span>
              <span className="text-brand-gray">Private progress tracking</span>
            </div>
          </div>
          <p className="text-sm text-brand-gray">No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-brand-border py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-brand-gray text-sm">© 2024 RuleVision. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-brand-gray hover:text-brand-black transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-black transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-black transition-colors">
                Contact
              </a>
            </div>
          </div>
          <p className="text-center text-brand-gray text-sm mt-4">
            RuleVision: See the Call Before It Happens.
          </p>
        </div>
      </footer>
    </div>
  );
}
