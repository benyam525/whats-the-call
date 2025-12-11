'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/ref-iq', label: 'Ref IQ' },
  { href: '/docs', label: 'Docs' },
  { href: '/leaderboard', label: 'Leaderboard' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setIsMenuOpen(false);
    window.location.href = '/';
  };

  return (
    <nav className="border-b border-brand-border bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/RuleVisionv2.png"
            alt="RuleVision"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-gray hover:text-brand-black transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Auth Button */}
          {!loading && (
            user ? (
              <button
                onClick={handleSignOut}
                className="text-brand-gray hover:text-brand-black transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <Link
                href="/login"
                className="bg-brand-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Sign In
              </Link>
            )
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-brand-card transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 text-brand-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-brand-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            style={{ top: '73px' }}
          />

          {/* Menu */}
          <div className="absolute top-full left-0 right-0 bg-white border-b border-brand-border shadow-lg md:hidden">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 px-4 text-brand-black font-medium rounded-lg hover:bg-brand-card transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Auth Button */}
              {!loading && (
                user ? (
                  <button
                    onClick={handleSignOut}
                    className="py-3 px-4 text-left text-brand-gray font-medium rounded-lg hover:bg-brand-card transition-colors"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="py-3 px-4 text-brand-black font-medium rounded-lg bg-brand-card hover:bg-gray-200 transition-colors text-center"
                  >
                    Sign In
                  </Link>
                )
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
