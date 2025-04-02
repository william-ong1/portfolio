import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': "#bbcced",
        'dark-navy': "#0b101e",
      },
      fontFamily: {
        raleway: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
    variants: {
      width: ["responsive", "hover", "focus"]
    }
  },
  plugins: [],
};
export default config;
