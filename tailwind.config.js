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
        'shigong': "url('https://imgapi.xl0408.top')",
      },
    },
  },
  plugins: [],
}

