'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
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
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Log In
            </Link>
            <Link
              href="#pricing"
              className="bg-white text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              RuleVision is the Duolingo/Rosetta Stone for basketball referees.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
              RuleVision turns the NBA rulebook into a daily training system that helps officials build instinct, accuracy, and confidence—through scenario-based drills, rapid-fire questions, and adaptive practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing"
                className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors text-center"
              >
                Start Free
              </Link>
              <a
                href="#how-it-works"
                className="border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors text-center"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="how-it-works" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why RuleVision Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Turning the 400-page rulebook into muscle memory
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The NBA rulebook is dense, technical, and unreadable to 95% of officials. Most refs never read it cover-to-cover. RuleVision converts rulebook knowledge into instinct.
              </p>
              <p className="text-sm font-semibold text-gray-400 mb-3">How we do it:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span className="text-gray-300">Repetition</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span className="text-gray-300">Spaced practice</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span className="text-gray-300">Pressure-timed decisions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span className="text-gray-300">Concept grouping</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span className="text-gray-300">Scenario variations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span className="text-gray-300">Mastery tracking</span>
                </li>
              </ul>
              <p className="text-gray-400 italic text-sm">
                This makes RuleVision the Duolingo/Rosetta Stone for NBA rules. No one else offers that.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Daily, habit-forming practice (no one in officiating has this)
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Right now, refs have camps, casebooks, PDFs, and the occasional quiz—but not a daily training rhythm that sharpens them all season.
              </p>
              <p className="text-sm font-semibold text-gray-400 mb-3">What RuleVision adds:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span className="text-gray-300">Daily 5</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span className="text-gray-300">Sudden Death</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span className="text-gray-300">Category Drill</span>
                </li>
              </ul>
              <p className="text-sm font-semibold text-gray-400 mb-3">Benefits:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span className="text-gray-300">Consistency</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span className="text-gray-300">Daily reps</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span className="text-gray-300">Gamification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span className="text-gray-300">Skill progression</span>
                </li>
              </ul>
              <p className="text-gray-400 italic text-sm">
                Refs want to stay sharp, but have no structured way to do it. RuleVision fills that gap.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Scenario-based decision training that mimics game pressure
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Most refs struggle with the gray areas: continuation, LGP, verticality, the cylinder rule, screen legality, advantage/disadvantage. The rulebook alone doesn't teach decision-making—RuleVision does.
              </p>
              <p className="text-sm font-semibold text-gray-400 mb-3">Key concepts covered:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  <span className="text-gray-300">Continuation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  <span className="text-gray-300">Legal guarding position (LGP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  <span className="text-gray-300">Verticality</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  <span className="text-gray-300">Cylinder rule</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  <span className="text-gray-300">Screen legality</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  <span className="text-gray-300">Advantage/disadvantage</span>
                </li>
              </ul>
              <p className="text-gray-400 italic text-sm">
                RuleVision lets officials simulate judgment calls in a safe, repeatable environment—no film needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              🔥 RuleVision Pricing
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              Train Smarter. See the Call Before It Happens.
            </p>
            <p className="text-lg text-gray-400">
              Choose the plan that matches your ambition.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Rookie - Free */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Rookie</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-400"> / forever</span>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                For new officials and curious learners. Build the habit. Test your instincts.
              </p>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-400 mb-3">Includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-300">5 questions per day</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-300">1 Sudden Death attempt</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-300">"Personal Foul Basics" category unlocked</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-300">Limited streak tracking</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-300">Basic performance stats</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-gray-500 mb-6">
                Perfect for: Referees who want a taste of RuleVision before committing.
              </p>
              <Link
                href="/"
                className="block w-full bg-gray-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Start Free
              </Link>
            </div>

            {/* Veteran - Most Popular */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500 rounded-2xl p-8 relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 px-4 py-1 rounded-full text-sm font-bold">
                ⭐ Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Veteran</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$7.99</span>
                <span className="text-gray-300">/mo</span>
                <p className="text-sm text-gray-400">or $59/year — Save 40% with annual</p>
              </div>
              <p className="text-gray-200 mb-6 text-sm leading-relaxed">
                For officials who take their craft seriously. Unlimited reps. Real improvement.
              </p>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-300 mb-3">Everything in Rookie, plus:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-200">Unlimited questions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-200">Unlimited Sudden Death attempts</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-200">All rule categories unlocked</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-200">Smart difficulty progression</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-200">Full rulebook explanations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-200">Bookmarking for tricky questions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-200">Mastery dashboard</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-gray-200">Full Daily 5 access</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-gray-400 mb-6">
                Perfect for: High school, AAU, and rec officials wanting to sharpen judgment every day.
              </p>
              <Link
                href="/"
                className="block w-full bg-white text-black text-center py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
              >
                Go Veteran
              </Link>
            </div>

            {/* Expert */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Expert</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$14.99</span>
                <span className="text-gray-300">/mo</span>
                <p className="text-sm text-gray-400">or $99/year</p>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                For the ambitious official chasing the next level.
              </p>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-400 mb-3">Everything in Veteran, plus:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span className="text-gray-300">Custom difficulty tuning</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span className="text-gray-300">Advanced analytics & trends</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span className="text-gray-300">Performance breakdown by rule section</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span className="text-gray-300">Personalized "Weakness → Training Path" recommendations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span className="text-gray-300">Exam Mode (50-question timed assessments)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span className="text-gray-300">Printable performance report</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span className="text-gray-300">Early access to new question packs</span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-gray-500 mb-6">
                Perfect for: Officials aiming for college, pro-am, G-League, or simply elite mastery of the rulebook.
              </p>
              <Link
                href="/"
                className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Become an Expert
              </Link>
            </div>
          </div>

          {/* Add-on */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-600/50 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">RuleVision Certification Exam™</h3>
                <p className="text-xl font-bold text-yellow-400 mb-3">$29 one-time</p>
                <p className="text-gray-300 text-sm">
                  Get certified in RuleVision Level 1, Level 2, or Level 3. Download your certificate, share it with assignors, and add it to your referee résumé.
                </p>
              </div>
              <Link
                href="/"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors whitespace-nowrap"
              >
                Take the Exam
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Every Plan Includes */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-8">Every Plan Includes:</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 justify-center">
              <span className="text-blue-400">✓</span>
              <span className="text-gray-300">Daily practice</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <span className="text-blue-400">✓</span>
              <span className="text-gray-300">NBA rulebook-aligned questions</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <span className="text-blue-400">✓</span>
              <span className="text-gray-300">Real-world scenarios</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <span className="text-blue-400">✓</span>
              <span className="text-gray-300">24/7 training access</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:col-span-2">
              <span className="text-blue-400">✓</span>
              <span className="text-gray-300">Private progress tracking</span>
            </div>
          </div>
          <p className="text-sm text-gray-400">No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">© 2024 RuleVision. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            RuleVision: See the Call Before It Happens.
          </p>
        </div>
      </footer>
    </div>
  );
}
