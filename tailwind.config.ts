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
        'nba-blue': '#1d428a',
        'nba-red': '#c8102e',
        'whistle-gold': '#fdb927',
      },
    },
  },
  plugins: [],
}
export default config
