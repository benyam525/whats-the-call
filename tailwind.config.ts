import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium muted palette - elite referee ops
        'rv-navy': '#0a1628',
        'rv-slate': '#1a2744',
        'rv-steel': '#2d3a52',
        'rv-charcoal': '#374151',
        'rv-silver': '#94a3b8',
        'rv-accent': '#3b82f6',
        'rv-accent-bright': '#60a5fa',
        'rv-success': '#10b981',
        'rv-warning': '#f59e0b',
        'rv-danger': '#ef4444',
        'rv-gold': '#fbbf24',
        // Legacy colors
        'nba-blue': '#1d428a',
        'nba-red': '#c8102e',
        'whistle-gold': '#fdb927',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.12), 0 2px 8px -2px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 32px -4px rgba(0, 0, 0, 0.18), 0 4px 12px -2px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-success': '0 0 20px rgba(16, 185, 129, 0.3)',
        'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'court-pattern': 'linear-gradient(135deg, rgba(255,255,255,0.03) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.03) 75%, transparent 75%, transparent)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
      },
      animation: {
        'lift': 'lift 0.2s ease-out forwards',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'streak-glow': 'streak-glow 1.5s ease-in-out infinite',
        'ripple': 'ripple 0.6s ease-out forwards',
      },
      keyframes: {
        lift: {
          '0%': { transform: 'translateY(0)', boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.12)' },
          '100%': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px -4px rgba(0, 0, 0, 0.18)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'streak-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(251, 191, 36, 0.4)' },
          '50%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.8)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
