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
        beige: "#F5EFE6",
        sand: "#E8DDCF",
        espresso: "#4B3621",
        chocolate: "#2C221C",
        cinnamon: "#8B5E3C",
        camel: "#C8A97E",
      },
      fontFamily: {
        yanone: ["var(--font-yanone)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      // Remove rounded corners by resetting borderRadius (optional, but forces sharpness)
      borderRadius: {
        none: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px",
      },
    },
  },
  plugins: [],
};

export default config;
