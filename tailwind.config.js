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
        // Jet Black Palette
        jet: {
          black: '#050505',
          deep: '#08070d',
          surface: '#0e0d17',
          card: 'rgba(14, 13, 23, 0.78)',
          cardHover: 'rgba(23, 20, 38, 0.88)',
          border: 'rgba(0, 240, 255, 0.16)',
          borderHover: 'rgba(0, 240, 255, 0.5)',
          amethystBorder: 'rgba(157, 78, 221, 0.3)',
          text: '#f8fafc',
          muted: '#94a3b8',
        },
        cyber: {
          black: '#050505', // Jet Black
          darker: '#08070d', // Deepest Jet Black
          dark: '#0e0d17', // Jet Surface
          panel: 'rgba(14, 13, 23, 0.78)',
          panelHover: 'rgba(23, 20, 38, 0.88)',
          border: 'rgba(0, 240, 255, 0.16)',
          borderHover: 'rgba(0, 240, 255, 0.5)',
          purpleBorder: 'rgba(157, 78, 221, 0.3)',
          text: '#f8fafc',
          muted: '#94a3b8',
        },
        // Electric Cyan & Royal Amethyst Accents
        electric: {
          cyan: '#00f0ff',
          cyanGlow: '#00f0ff40',
          cyanLight: '#70f7ff',
          cyanDark: '#00b4d8',
        },
        royal: {
          amethyst: '#9d4edd',
          amethystLight: '#c77dff',
          amethystDeep: '#7b2cbf',
          amethystDark: '#5a189a',
          amethystGlow: '#9d4edd40',
        },
        neon: {
          // Re-mapped to Electric Cyan & Royal Amethyst
          cyan: '#00f0ff',
          cyanGlow: '#00f0ff40',
          blue: '#38d9f8',
          blueGlow: '#38d9f840',
          purple: '#9d4edd', // Royal Amethyst
          purpleGlow: '#9d4edd40',
          amethyst: '#7b2cbf',
          pink: '#e056fd',
          amber: '#f59e0b',
          emerald: '#10b981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        display: ['Orbitron', 'Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'electric-cyan': '0 0 24px -2px rgba(0, 240, 255, 0.55)',
        'royal-amethyst': '0 0 26px -2px rgba(157, 78, 221, 0.55)',
        'neon-cyan': '0 0 22px -3px rgba(0, 240, 255, 0.5)',
        'neon-blue': '0 0 20px -3px rgba(56, 217, 248, 0.45)',
        'neon-purple': '0 0 24px -3px rgba(157, 78, 221, 0.5)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.65)',
        'cyber-glow': 'inset 0 0 16px rgba(0, 240, 255, 0.16), 0 0 28px rgba(157, 78, 221, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.05)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(157, 78, 221, 0.05) 1px, transparent 1px)',
        'cyber-dots': 'radial-gradient(rgba(0, 240, 255, 0.18) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
