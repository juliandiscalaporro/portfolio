import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
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
      },
    },
  },
  plugins: [],
};

export default config;
