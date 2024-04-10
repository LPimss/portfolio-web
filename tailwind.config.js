/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aparte1': '#CAB69D',
        'promotors-blue': '#132028',
        'promotors-green': '#26EB9B',
        'promotors-lightgreen': '#B9FFE6'
      },
    },
  },
  plugins: [],
}

