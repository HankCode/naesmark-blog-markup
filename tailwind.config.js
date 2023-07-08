/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        dark1: "#121212",
        dark2: "#1E1E1E",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
