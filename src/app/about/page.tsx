import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/rulevisionlogo_new.png"
              alt="RuleVision"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-brand-black font-semibold text-lg tracking-tight">RuleVision</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/about" className="text-brand-black font-medium">
              About
            </Link>
            <Link href="/leaderboard" className="text-brand-gray hover:text-brand-black transition-colors">
              Leaderboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-brand-black tracking-tighter mb-8">
          About RuleVision
        </h1>

        <div className="space-y-6 text-brand-black leading-relaxed">
          <p>
            Officiating isn't guesswork — it's mastery. RuleVision was built for officials who want to see the game with total clarity. Whether you're working your first youth league game or stepping onto a championship court, every call you make shapes the flow, safety, and fairness of the game.
          </p>

          <p>
            RuleVision exists to make that responsibility feel lighter, clearer, and more confident.
          </p>

          <p>
            Designed with input from veteran referees, trainers, and association leaders, RuleVision helps officials sharpen their instincts through real scenarios, real rules, and real reps. No fluff, no gimmicks — just the tools you need to build consistency and grow your craft.
          </p>

          <p className="font-medium">
            Our mission is simple: Help every official see the call before it happens.
          </p>

          <p className="text-brand-gray">
            Because when refs get better, the whole game gets better.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/play/film-room"
            className="inline-block bg-brand-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Start Training
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-border py-8 mt-16">
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
