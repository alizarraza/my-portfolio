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
        ink:     '#080809',
        cream:   '#f2ede4',
        accent:  '#c8f03c',
        muted:   '#555555',
        surface: '#0f0f12',
        border:  '#1c1c22',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        sans:    ['var(--font-dm-sans)', 'sans-serif'],
        mono:    ['var(--font-space-mono)', 'monospace'],
      },
      fontSize: {
        '10xl': ['10rem',  { lineHeight: '0.85' }],
        '11xl': ['12rem',  { lineHeight: '0.85' }],
        '12xl': ['14rem',  { lineHeight: '0.82' }],
      },
    },
  },
  plugins: [],
}

export default config
