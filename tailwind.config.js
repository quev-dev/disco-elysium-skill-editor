/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'c-light-gray': '#2a2e2c',
        'c-accent': '#d7441a',
        'c-white': '#fcfeff',
        'c-black': '#050505',
        'c-gray': '#171918',
      },
    },
  },
  plugins: [],
};
