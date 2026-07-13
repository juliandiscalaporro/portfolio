import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blueprint: {
          DEFAULT: "#0d1b2f",
          panel: "#122540",
          deep: "#091324",
        },
        chalk: {
          DEFAULT: "#e7eef7",
          soft: "#9db0c9",
          faint: "#64789a",
        },
        line: "#28405f",
        accent: {
          DEFAULT: "#f2a23c",
          deep: "#d3821f",
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
