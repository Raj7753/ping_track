import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      colors: {
        // --- MODERN TECH RED PALETTE ---
        // 'brand' - Deep Red
        brand: {
          '25': '#fff5f5', // Lightest red
          '50': '#ffe3e3', // Very light red
          '100': '#ffbdbd', // Light red
          '200': '#ff9b9b', // Soft red
          '300': '#f86a6a', // Bright red
          '400': '#ef4e4e', // Vivid red
          '500': '#e03131', // Primary red
          '600': '#c92a2a', // Deep red
          '700': '#b02525', // Darker red
          '800': '#962020', // Very dark red
          '900': '#7d1a1a', // Deepest red
          '950': '#4a0f0f'  // Almost black red
        },

        // Modern Discord-inspired dark theme
        'discord-background': "#1a1b23", // Rich dark blue-gray
        'discord-brand-color': "#5865f2", // Discord's signature purple-blue
        'discord-gray': '#2c2f36', // Medium dark gray
        'discord-text': '#f2f3f5', // Clean white text
        'discord-timestamp': '#a3a6aa', // Subtle gray for timestamps

        // Premium dark background - deep charcoal with violet undertones
        'dark-background': "#0a0a0f",

        // Sophisticated HSL color system
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(350 85% 50%)', // Brand-500 red equivalent
          foreground: 'hsl(0 0% 100%)' // Crisp white text
        },
        secondary: {
          DEFAULT: 'hsl(0 0% 96%)', // Ultra-light red-gray
          foreground: 'hsl(0 0% 20%)' // Deep red-gray text
        },
        muted: {
          DEFAULT: 'hsl(0 0% 96%)', // Whisper-light red-white
          foreground: 'hsl(0 0% 50%)' // Balanced gray for muted content
        },
        accent: {
          DEFAULT: 'hsl(350 85% 50%)', // Deep red - modern and eye-catching
          foreground: 'hsl(0 0% 100%)' // Clean white on red
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)', // Vibrant red for alerts
          foreground: 'hsl(0 0% 100%)' // White text on red
        },
        border: 'hsl(0 0% 90%)', // Soft red-gray border
        input: 'hsl(0 0% 90%)', // Matching input borders
        ring: 'hsl(350 85% 50%)', // Focus ring matches primary

        // Success and warning colors for better UX
        success: {
          DEFAULT: 'hsl(142 71% 45%)', // Fresh green
          foreground: 'hsl(0 0% 100%)'
        },
        warning: {
          DEFAULT: 'hsl(45 93% 47%)', // Warm amber
          foreground: 'hsl(45 30% 11%)'
        },

        // Enhanced chart colors for data visualization
        chart: {
          '1': 'hsl(350 85% 50%)',  // Primary red
          '2': 'hsl(192 90% 45%)',  // Cyan for contrast
          '3': 'hsl(330 80% 55%)',  // Pink
          '4': 'hsl(45 93% 47%)',   // Warm amber
          '5': 'hsl(142 71% 45%)',  // Fresh green
          '6': 'hsl(29 94% 54%)',   // Orange
          '7': 'hsl(200 90% 40%)',  // Blue
          '8': 'hsl(280 80% 60%)',  // Purple
        },

        // Gradient stops for modern effects
        gradient: {
          'aurora-start': 'hsl(350 85% 50%)',
          'aurora-middle': 'hsl(330 80% 55%)',
          'aurora-end': 'hsl(192 90% 45%)',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      // Modern box shadows for depth
      boxShadow: {
        'aurora': '0 0 40px -10px hsl(201 96% 32% / 0.3)',
        'aurora-lg': '0 0 60px -15px hsl(201 96% 32% / 0.4)',
        'glow': '0 0 20px -5px hsl(262 83% 58% / 0.5)',
      },
      // Subtle animations
      animation: {
        'aurora': 'aurora 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px -5px hsl(262 83% 58% / 0.5)' },
          '100%': { boxShadow: '0 0 25px -5px hsl(262 83% 58% / 0.7)' },
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
export default config