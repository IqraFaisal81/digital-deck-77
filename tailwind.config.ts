
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Poppins', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        royal: '#0a1d69',
        midnight: '#000000',
        electric: '#3f8efc',
        maroon: '#800020',
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
      backgroundImage: {
        'soft-gradient': 'linear-gradient(to right, #f9f9f9, #f0f4ff, #f9f9f9)',
        'blue-gradient': 'linear-gradient(135deg, #60a5fa, #3b82f6)',
        'purple-gradient': 'linear-gradient(135deg, #8b5cf6, #6366f1)',
        'purple-blue-gradient': 'linear-gradient(135deg, #8b5cf6, #4f46e5, #3b82f6)',
        'primary-gradient': 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary) / 0.8))',
        'blue-indigo-gradient': 'linear-gradient(135deg, #3b82f6, #4f46e5)',
        'glass-gradient': 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 0.5rem)',
        sm: 'calc(var(--radius) - 0.75rem)',
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0, 0, 255, 0.07)',
        'card': '0 15px 35px -5px rgba(0, 0, 0, 0.15)',
        'button': '0 8px 20px rgba(0, 0, 0, 0.15)',
        'glassmorphism': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'highlight': '0 0 15px rgba(59, 130, 246, 0.5)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "float": "floatUp 6s ease-in-out infinite",
        "first": "first 8s infinite",
        "second": "second 8s infinite",
        "third": "third 8s infinite",
        "fourth": "fourth 8s infinite",
        "fifth": "fifth 8s infinite",
        "aurora": "aurora 60s linear infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        first: {
          "0%": { transform: "translateY(0%) scale(1) rotate(0deg)" },
          "33%": { transform: "translateY(-5%) scale(1.1) rotate(5deg)" },
          "66%": { transform: "translateY(5%) scale(0.9) rotate(-5deg)" },
          "100%": { transform: "translateY(0%) scale(1) rotate(0deg)" }
        },
        second: {
          "0%": { transform: "translateY(0%) scale(1) rotate(0deg)" },
          "33%": { transform: "translateY(-10%) scale(1.1) rotate(-5deg)" },
          "66%": { transform: "translateY(10%) scale(0.9) rotate(5deg)" },
          "100%": { transform: "translateY(0%) scale(1) rotate(0deg)" }
        },
        third: {
          "0%": { transform: "translateY(0%) scale(1) rotate(0deg)" },
          "33%": { transform: "translateY(10%) scale(1.1) rotate(5deg)" },
          "66%": { transform: "translateY(-10%) scale(0.9) rotate(-5deg)" },
          "100%": { transform: "translateY(0%) scale(1) rotate(0deg)" }
        },
        fourth: {
          "0%": { transform: "translateY(0%) scale(1) rotate(0deg)" },
          "33%": { transform: "translateY(-15%) scale(1.1) rotate(-5deg)" },
          "66%": { transform: "translateY(15%) scale(0.9) rotate(5deg)" },
          "100%": { transform: "translateY(0%) scale(1) rotate(0deg)" }
        },
        fifth: {
          "0%": { transform: "translateY(0%) scale(1) rotate(0deg)" },
          "33%": { transform: "translateY(15%) scale(1.1) rotate(5deg)" },
          "66%": { transform: "translateY(-15%) scale(0.9) rotate(-5deg)" },
          "100%": { transform: "translateY(0%) scale(1) rotate(0deg)" }
        },
        aurora: {
          "0%": { backgroundPosition: "0% 0%, 0% 0%" },
          "50%": { backgroundPosition: "100% 0%, 100% 0%" },
          "100%": { backgroundPosition: "0% 0%, 0% 0%" }
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
