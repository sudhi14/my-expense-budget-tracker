/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Roboto']
      },
      colors: {
        customGrayHighlight: 'rgba(245,245,245,255)',
        customGrayFont: 'rgba(163,163,163,255)',
        customOrange: 'rgba(248,179,38,255)',

      }
    },
  },
  plugins: [],
};
