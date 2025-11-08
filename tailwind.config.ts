import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        'sans': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0B2C57',        // Deep Navy Blue
        secondary: '#F8F9FA',      // Soft Gray (Neutral)
        accent: '#F4A624',         // Golden Amber
        teal: '#1E9DB4',          // Teal Blue
        aqua: '#3CCFC1',          // Aqua Green
        royal: '#234D91',         // Royal Blue
        background: '#FFFFFF',     // White
        surface: '#F8F9FA',       // Soft Gray (Neutral)
        'text-primary': '#0B2C57',   // Deep Navy Blue
        'text-secondary': '#234D91', // Royal Blue
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
} satisfies Config;