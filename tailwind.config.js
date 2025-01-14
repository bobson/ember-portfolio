/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#01b5af',
        secondary: '#00cdac',
        'white-color': '#fff',
        'dark-gray': '#333333',
        'dark-blue-text': '#272341',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [],
};
