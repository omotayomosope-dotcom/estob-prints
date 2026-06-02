// tailwind.config.ts
// FILE: /tailwind.config.ts
// Purpose: Custom Tailwind configuration with ESTOB brand colors, fonts, and design tokens

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── ESTOB BRAND COLORS ───────────────────────────────────────────
      colors: {
        estob: {
          red: "#EF2020",        // Primary brand red
          "red-dark": "#C41A1A", // Darker red for hover states
          "red-light": "#FF4444",// Lighter red for gradients
          black: "#000000",
          white: "#FFFFFF",
          charcoal: "#1E1E1E",   // Dark charcoal background
          "charcoal-2": "#2A2A2A",
          "charcoal-3": "#333333",
          // CMYK accent colors (from ink splash in logo)
          cyan: "#30C5F4",
          magenta: "#EC008C",
          yellow: "#FFE600",
          gray: "#F5F5F5",
          "gray-2": "#E0E0E0",
          "gray-3": "#999999",
        },
      },

      // ─── TYPOGRAPHY ───────────────────────────────────────────────────
      fontFamily: {
        heading: ["Poppins", "sans-serif"],  // All headings
        body: ["Inter", "sans-serif"],       // Body text, UI elements
      },

      // ─── FONT SIZES ───────────────────────────────────────────────────
      fontSize: {
        "display-xl": ["5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },

      // ─── ANIMATIONS ───────────────────────────────────────────────────
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-left": "slideLeft 0.7s ease forwards",
        "slide-right": "slideRight 0.7s ease forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 2s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
        "ink-splash": "inkSplash 1s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        inkSplash: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "60%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },

      // ─── SPACING ──────────────────────────────────────────────────────
      spacing: {
        "section": "6rem",      // Standard vertical section padding
        "section-sm": "4rem",
      },

      // ─── BORDER RADIUS ────────────────────────────────────────────────
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      // ─── BOX SHADOW ───────────────────────────────────────────────────
      boxShadow: {
        "brand": "0 4px 30px rgba(239, 32, 32, 0.25)",
        "brand-lg": "0 8px 50px rgba(239, 32, 32, 0.35)",
        "card": "0 4px 24px rgba(0,0,0,0.12)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.2)",
        "ink": "0 0 40px rgba(48, 197, 244, 0.2)",
      },

      // ─── BACKGROUND IMAGE ─────────────────────────────────────────────
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #EF2020 0%, #C41A1A 100%)",
        "gradient-dark": "linear-gradient(180deg, #1E1E1E 0%, #000000 100%)",
        "gradient-radial-red": "radial-gradient(ellipse at center, rgba(239,32,32,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
