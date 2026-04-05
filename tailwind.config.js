/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070d',
        navy: '#0a1028',
        navy2: '#111a3a',
        terminal: '#22ff99',
        cyan: '#22d3ee',
        amber: '#fbbf24',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      animation: {
        drift: 'drift 90s linear infinite',
        driftSlow: 'drift 180s linear infinite',
        driftFast: 'drift 45s linear infinite',
        scan: 'scan 7s linear infinite',
        flicker: 'flicker 4s ease-in-out infinite',
        pulseDot: 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-2000px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-10vh)' },
          '100%': { transform: 'translateY(110vh)' },
        },
        flicker: {
          '0%,100%': { opacity: 1 },
          '45%': { opacity: 0.85 },
          '50%': { opacity: 0.6 },
          '55%': { opacity: 0.9 },
        },
        pulseDot: {
          '0%,100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(0.85)' },
        },
      },
    },
  },
  plugins: [],
}
