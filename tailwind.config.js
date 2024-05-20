/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm':{"max": '768px'},
      // => @media (max-width: 640px) { ... }

      'md': {"max":'1024px'},
      // => @media (max-width: 768px) { ... }

      'lg': {"max":'1280px'},
      // => @media (max-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

    },
    extend: {
      fontFamily: {
        san: ['var(--font-raleway)'],
        alt: ['var(--font-openSans)'],
        words: ['var(--font-rubik)'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(-2%)' },
        },
        open: {
          "0%": {
          opacity: 0,
          transform: 'translateY(-30px)'
          },
        },
        "100%":{
          opacity: 1,
          transform: 'translateY(0)',
        },
        close: {
          "0%": {
          opacity: 1,
          transform: 'translateY(0px)'
          },
        },
        "100%":{
          opacity: 0,
          transform: 'translateY(-30px)',
        },
        animation: {
          open: 'open 2s ease-out',
          close: 'close 2s ease-out'
        }
      },
      colors: {
        
        gray: {
          50: '#F1EAFF',
          100: '#D9D9D9',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        violet: {
          50: '#e9e8ea',
          100: '#dedde0',
          200: '#bab8bf',
          250: '#392a57',
          300: '#2F2347',
          400: '#201a31',
          500: '#1d172c',
          600: '#1a1527',
          700: '#181425',
        },
        purple: {
          100: '#371A46',
        },
        primary: {
          400: '#0A65A5',
          500: '#123453',
          600: '#091C2E',
          700: '#13101D',
        },
        background: {
          500: '#E9EBF8',
        },
      },
      
    },
  },
  plugins: [ 
    ({ addUtilities, theme, variants }) => {
    const gradients = theme('colors');

    const utilities = Object.keys(gradients).map((name) => ({
      [`.border-gradient-${name}`]: {
        borderColor: `transparent`,
        backgroundImage: `linear-gradient(0deg, transparent, transparent), linear-gradient(90deg, ${gradients[name][500]}, ${gradients[name][700]})`,
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box',
      },
    }));

    addUtilities(utilities, variants('borderWidth'));
  }],
}
