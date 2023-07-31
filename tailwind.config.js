/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#474955',
        grayLite: '#5A5C66',
        grayExtraLite: '#E3E6EC',
        green: '#7EBC3C',
      },
    },
  },
  plugins: [],
};
