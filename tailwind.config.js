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
        cyber: {
          black: '#030712',
          darker: '#060b18',
          dark: '#0a1026',
          panel: 'rgba(13, 20, 41, 0.75)',
          panelHover: 'rgba(19, 31, 64, 0.85)',
          border: 'rgba(0, 245, 212, 0.15)',
          borderHover: 'rgba(0, 245, 212, 0.45)',
          purpleBorder: 'rgba(168, 85, 247, 0.25)',
          text: '#f8fafc',
          muted: '#94a3b8',
        },
        neon: {
          cyan: '#00f5d4',
          cyanGlow: '#00f5d440',
          blue: '#38bdf8',
          blueGlow: '#38bdf840',
          purple: '#a855f7',
          purpleGlow: '#a855f740',
          pink: '#f43f5e',
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
        'neon-cyan': '0 0 20px -3px rgba(0, 245, 212, 0.45)',
        'neon-blue': '0 0 20px -3px rgba(56, 189, 248, 0.45)',
        'neon-purple': '0 0 20px -3px rgba(168, 85, 247, 0.45)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'cyber-glow': 'inset 0 0 15px rgba(0, 245, 212, 0.15), 0 0 25px rgba(0, 245, 212, 0.2)',
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
        'cyber-grid': 'linear-gradient(to right, rgba(0, 245, 212, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 245, 212, 0.05) 1px, transparent 1px)',
        'cyber-dots': 'radial-gradient(rgba(0, 245, 212, 0.15) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
