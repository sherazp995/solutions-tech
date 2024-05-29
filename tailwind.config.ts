import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: colors.gray,
      black: colors.black,
      accent: {
        DEFAULT: "#f57c00",
        "50": "#fffaec",
        "100": "#fff4d3",
        "200": "#ffe6a5",
        "300": "#ffd26d",
        "400": "#ffb332",
        "500": "#ff990a",
        "600": "#f57c00",
        "700": "#cc5e02",
        "800": "#a1490b",
        "900": "#823d0c",
        "950": "#461d04",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
