/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.tsx",
    "./src/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-dark": "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        "secondary-light": "var(--color-secondary-light)",
        "secondary-dark": "var(--color-secondary-dark)",
        tertiary: "var(--color-tertiary)",
        "tertiary-light": "var(--color-tertiary-light)",
        "tertiary-dark": "var(--color-tertiary-dark)",
        text: "var(--color-text)",
        "text-light": "var(--color-text-light)",
        "text-dark": "var(--color-text-dark)",
        background: "var(--color-background)",
        "background-light": "var(--color-background-light)",
        "background-dark": "var(--color-background-dark)",
      },
    },
  },
  plugins: [],
};
