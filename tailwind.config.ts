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
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
