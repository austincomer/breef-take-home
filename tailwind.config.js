/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './app/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        host: ['var(--font-host)', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.625rem',
      },
      colors: {
        brand: '#d96e34',
      },
      screens: {
        xs: '475px',
        1100: '1100px',
        '1.5xl': '1440px',
        '3xl': '1760px',
      },
    },
  },
}
