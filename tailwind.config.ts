import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        containerBackground: "var(--container-background)",
        secondaryContainer: "var(--secondary-container)",
      },
      fontFamily: {
        lexend: ["var(--font-lexend)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
