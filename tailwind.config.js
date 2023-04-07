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
