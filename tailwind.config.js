/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        textMain: 'rgb(var(--text-main) / <alpha-value>)',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 40px rgba(37, 99, 235, 0.15)',
        'card-dark': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'card-dark-hover': '0 0 30px rgba(59, 130, 246, 0.15)',
        'glow-primary': '0 0 15px rgba(37, 99, 235, 0.4)',
        'glow-primary-dark': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-secondary': '0 0 15px rgba(124, 58, 237, 0.4)',
        'glow-secondary-dark': '0 0 20px rgba(139, 92, 246, 0.5)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
