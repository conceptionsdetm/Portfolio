import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        body:    ["'Space Grotesk'", "system-ui", "sans-serif"],
        mono:    ["'IBM Plex Mono'", "monospace"],
        grotesk: ["'Space Grotesk'", "system-ui", "sans-serif"],
      },
      colors: {
        cream:      "#F5F0E8",
        ink:        "#1A1A1A",
        paper:      "#FFFFFF",
        muted:      "#888888",
        vermillion: "#D62B2B",
        blue:       "#1A3FA0",
        gold:       "#F5C400",
        border:     "rgba(26,26,26,0.12)",
      },
      animation: {
        "fade-up":   "fadeUp .7s cubic-bezier(.22,1,.36,1) forwards",
        "fade-in":   "fadeIn .6s ease forwards",
        "marquee-x": "marqueeX 52s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        marqueeX: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
