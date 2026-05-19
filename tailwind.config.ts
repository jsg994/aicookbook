import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
      },
      colors: {
        brand: {
          50: "#fdf8f0",
          100: "#faefd9",
          200: "#f4dab0",
          300: "#ecbf7d",
          400: "#e39e48",
          500: "#db8428",
          600: "#cc6d1e",
          700: "#a9531a",
          800: "#87421c",
          900: "#6e371a",
        },
        ink: {
          DEFAULT: "#1a1612",
          light: "#3d3530",
          muted: "#7a6f66",
        },
        cream: {
          DEFAULT: "#fdf8f0",
          dark: "#f5ede0",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "70ch",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
