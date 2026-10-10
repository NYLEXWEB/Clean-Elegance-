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
        brand: {
          bg: "#FFFFFF",
          secondary: "#F7FAFC",
          light: "#DFF4FF",
          blue: "#39BDF2",
          deep: "#087EB5",
          deepDark: "#065A82",
          text: "#17191C",
          muted: "#666D75",
          border: "#E8EDF1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.035em",
        tight: "-0.02em",
        wide: "0.08em",
      },
      maxWidth: {
        "8xl": "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
