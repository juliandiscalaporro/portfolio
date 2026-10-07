import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        night: "#0c1220",
        raised: "#131b2c",
        line: "#26314a",
        paper: "#ece6da",
        muted: "#9aa3b5",
        faint: "#6b7489",
        star: "#e3b866",
      },
      fontFamily: {
        serif: ["Spectral", "Georgia", "serif"],
        sans: ["'Work Sans'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "34rem",
=======
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
>>>>>>> 13ca62f1ce2820d4b45d71250d3e238462c60011
      },
    },
  },
  plugins: [],
};

export default config;
