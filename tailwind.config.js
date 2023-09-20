/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        san: 'var(--font-poppins)',
        alt: 'var(--font-roboto)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(-2%)' },
        },
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
        green: {
          50: '#e6fbef',
          100: '#b1f1ce',
          200: '#8cebb6',
          300: '#57e295',
          400: '#36dc81',
          500: '#04d361',
          600: '#04c058',
          700: '#039645',
          800: '#027435',
          900: '#025929',
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
  plugins: [],
}
