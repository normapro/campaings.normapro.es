/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
            sans: ['var(--font-mulish)', 'sans-serif'],
        },
            colors: {
            primaryText: '#010d3d',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'scale(0.95)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.3s ease-out forwards',
        },
      },
    },
    plugins: [],
  };
  