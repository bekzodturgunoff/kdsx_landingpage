/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        "brand-bg": "oklch(98.09% 0.013 115.83)",
        "brand-bg-dark": "oklch(19.09% 0.009 137.85)",
        "brand-text": "oklch(22.26% 0.027 133.88)",
        "brand-text-dark": "oklch(91.24% 0.03 125.98)",
        "brand-cta": "oklch(85.7% 0.17 134.56)",
        "brand-cta-dark": "oklch(85.7% 0.17 134.56)",
        "brand-cta-text": "oklch(28.69% 0.0839 135.05)",
        "brand-cta-text-dark": "oklch(91.24% 0.03 125.98)",
        "neutral-bg": "oklch(96.49% 0.015 119.1)",
        "neutral-bg-dark": "oklch(23.89% 0.009 137.83)",
      },
    },
  },
  plugins: [],
};
