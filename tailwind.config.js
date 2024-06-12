/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['poppins' , 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        text:{
          100: 'color-mix(in srgb,var(--text) 5%, white)',
          base:'var(--text)',
          800: 'color-mix(in srgb,var(--text) 85%, black 80%)',
        },
        background: {
          50: 'color-mix(in srgb,var(--background) 55%, white 5%)',
          base:'var(--background)',
          600: 'color-mix(in srgb,var(--background) 95%, black 5%)',
        },
        primary:{
          100: 'color-mix(in srgb,var(--primary) 10%, white)',
          base:'var(--primary)'
        } ,
        secondary:{
          100: 'color-mix(in srgb,var(--secondary) 40%, black 14%)',
          base:'var(--secondary)',
        } ,
        accent: 'var(--accent)',
        accentLighter: 'var(--accentLighter)',
        active: 'var(--active)'
      },
    },
  },
  plugins: [],
};
