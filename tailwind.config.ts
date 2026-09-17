import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f766e',
          foreground: '#ffffff',
        },
        danger: '#dc2626',
        muted: {
          DEFAULT: '#f4f4f5',
          foreground: '#71717a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      borderRadius: {
        card: '0.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
