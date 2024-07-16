/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue-light': '#255AAD',
      'blue-med': '#204F97',
      'blue-dark': '#1C4482',
      'white': '#ffffff',
      'orange': '#F36A11',
      'teal': '#36C4FD',
      'teal-dark': '#2993BE',
      'red': '#D94545',
      'red-dark': '#A33434',
      'green': '#60F070'
    },
    extend: {},
  },
  plugins: [],
}

