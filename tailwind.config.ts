import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        mint: {
          soft: "#e8f5e9",
          light: "#c8e6c9",
          medium: "#a5d6a7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "slide-up": "slideUp 0.4s ease-out",
        "fade-in": "fadeIn 0.3s ease-out",
        "bubble-in": "bubbleIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bubbleIn: {
          "0%": { transform: "scale(0.85) translateY(10px)", opacity: "0" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
