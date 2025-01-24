/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      dropShadow: {
        'hard': '7px 7px 0px rgba(0, 0, 0, 0.6)',
        'hard-sm': '2px 2px 0px rgba(0, 0, 0, 0.6)',
        'hard-md': '3px 3px 0px rgba(0, 0, 0, 0.6)',



      },
      colors: {
        "pastel-red": "#ffc9c9",
        "pastel-green": "#b2f2bb",
        "pastel-blue": "#a5d8ff",
        "pastel-yellow": "#ffec99",
        "pastel-orange": "#ffd8a8",
        "cream": "#fdf8f6"
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
      }
    }, fontFamily: {
      "vergil": ["Vergil"],
      "raleway": ["Raleway"],
      "playfair": ["Playfair"],
      "quicksand": ["Quicksand"]

    }

  },
  plugins: [require('@tailwindcss/line-clamp'),],

}


