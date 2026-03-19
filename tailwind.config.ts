import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F2EDE3",
          2: "#EAE4D8",
          3: "#DDD7C9",
        },
        ink: {
          DEFAULT: "#0F0D09",
          2: "#1E1B15",
          muted: "#5C5648",
          subtle: "#9A9184",
        },
        orange: {
          DEFAULT: "#E8400C",
          2: "#FF5722",
        },
        lime: {
          DEFAULT: "#A3FF00",
          2: "#C8FF47",
        },
        gold: "#D4A843",
        forest: "#0D2A1A",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        tighter2: "-0.05em",
        tighter3: "-0.04em",
        tighter4: "-0.03em",
      },
      animation: {
        blink: "blink 2s ease-in-out infinite",
        ticker: "ticker 28s linear infinite",
        marquee: "marquee 30s linear infinite",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "dot-grid":
          "linear-gradient(rgba(163,255,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(163,255,0,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
