/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#d4af37',
          light: '#e8c869',
          dark: '#a8861f',
        },
        charcoal: {
          DEFAULT: '#141414',
          light: '#1e1e1e',
          dark: '#0a0a0a',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'breathe': 'breathe 2.5s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        breathe: {
          '0%, 100%': {
            boxShadow: '0 0 20px 0px rgba(212, 175, 55, 0.4), 0 0 40px 0px rgba(212, 175, 55, 0.1)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 30px 5px rgba(212, 175, 55, 0.6), 0 0 60px 10px rgba(212, 175, 55, 0.2)',
            transform: 'scale(1.03)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
