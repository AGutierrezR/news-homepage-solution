/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'san-serif'],
      },
      fontSize: {
        base: [
          '15px',
          {
            letterSpacing: '0.02em',
            fontWeight: '400',
            lineHeight: '1.5rem',
          },
        ],
        xl: [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '0.015em',
            fontWeight: '800',
          },
        ],
        '5xl': [
          '2.625rem',
          {
            letterSpacing: '0.001em',
            fontWeight: '800',
            lineHeight: '1',
          },
        ],
        '6xl': [
          '3.625rem',
          {
            letterSpacing: '0.001em',
            fontWeight: '800',
            lineHeight: '1',
          },
        ],
      },
      letterSpacing: {
        wide: '0.3px',
      },
      padding: {
        22: '5.5rem',
      },
      margin: {
        15: '3.75rem',
        17: '4.25rem',
      },
      colors: {
        'soft-orange': 'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        'off-white': 'hsl(36, 100%, 99%)',
        'grayish-blue': 'hsl(233, 8%, 79%)',
        'dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'very-dark-blue': 'hsl(240, 100%, 5%)',
      },
    },
  },
  plugins: [],
}
