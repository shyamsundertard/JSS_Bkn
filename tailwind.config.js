/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f5a124', // amber-500
          light: '#fcd34d', // amber-400
          dark: '#b45309', // amber-600
        },
        secondary: {
          DEFAULT: '#F59E0B', // amber-500
          light: '#FCD34D', // amber-400
          dark: '#B45309', // amber-600
        },
        tertiary: '#374151', // text-gray-700
        muted: '#D1D5DB',     // gray-300
        background: '#FFE560', // yellow-300
        surface: '#ffffff', // white
        error: '#dc2626',     // red-600
        success: '#16a34a', // green-600
      },
    },
  },
  plugins: [],
}

