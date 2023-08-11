/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'redor': '#fd5545',
        'yellowor': '#fbb239',
        'lgray': '#fafafa',
      },
      backgroundImage: {
        'newsletter': "url('assets/Images/bgshoe.jpg')"
      }
    },
  },
  plugins: [],
}

