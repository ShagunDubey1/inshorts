/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html,css}'],
  theme: {
    extend: {
      colors: {
          primary: '#8B36B5',
          secondary: '#E53945',
          purp: '#d690f9',
          tertiary: '#F2CB67',
          primaryDark: '#61257E',
          primaryLight: '#ECEBFD',
          gray1: '#343438',
          success: '#4CA83E',
          alert: '#DE2E2E',
          orange: '#ED7A27',
        text: {
          black: '#000000',
          gray: '#818183',
          primary: '#1C3454',
        },
      },
    },
  },
  plugins: [],
}
