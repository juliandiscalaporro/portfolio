import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f6f3ec",
        card: "#fbf9f3",
        ink: {
          DEFAULT: "#221f1a",
          soft: "#6f6a5f",
          faint: "#a39d8f",
        },
        line: "#d9d3c6",
        accent: {
          DEFAULT: "#c14d17",
          deep: "#9a3c10",
        },
      },
      fontFamily: {
        serif: ["Newsreader", "Georgia", "Times New Roman", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
