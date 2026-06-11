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
        display:  ["var(--font-display)",  "Georgia",    "serif"],
        body:     ["var(--font-body)",     "system-ui",  "sans-serif"],
        mono:     ["var(--font-mono)",     "monospace"],
        grotesk:  ["var(--font-grotesk)",  "system-ui",  "sans-serif"],
      },
      colors: {
        gold:       "#FFDD00",
        ink:        "#000000",
        paper:      "#FFFFFF",
        muted:      "#888888",
        vermillion: "#BE1622",
        blue:       "#00539F",
        border:     "rgba(0,0,0,0.12)",
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
