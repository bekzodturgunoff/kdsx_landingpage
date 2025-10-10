/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        "brand-bg": "#FFFFFF",
        "brand-bg-dark": "#121212",
        "brand-text": "#1A1A1A",
        "brand-text-dark": "#FFFFFF",
        "brand-cta": "oklch(85.7% .17 134.56)",
        "brand-cta-dark": "oklch(85.7% .17 134.56)",
  "brand-cta-text": "#1A4D1A",
  "brand-cta-text-dark": "#F1FFF0",
        "neutral-bg": "#F5F5F5",
        "neutral-bg-dark": "#1E1E1E",
      },
    },
  },
  plugins: [],
};
