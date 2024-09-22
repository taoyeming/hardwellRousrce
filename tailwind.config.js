/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bcbcbc': '#bcbcbc'
      },
      backgroundImage: {
        'shigong': "url('https://api.paugram.com/wallpaper/')",
      },
    },
  },
  plugins: [],
}

