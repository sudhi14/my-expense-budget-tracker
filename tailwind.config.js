export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Roboto']
      },
      colors: {
        customOffWhite: 'rgb(250, 249, 246)',
        customFontColor: 'rgb(211,211,211)',
        // customBgAccents: 'rgb(75,0,130)',
        customBgAccents: 'rgba(75, 0, 130, 0.84)',
        customComponents: 'rgb(255,69,0)',
        customComponentsFocus: 'rgb(255,85,0)'

      }
    },
  },
  plugins: [],
};
