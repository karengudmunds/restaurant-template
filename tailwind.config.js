module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_*/*.{html,md}',
    './*.{html,md}'
  ],
  safelist: [
    {
      pattern: /(bg)-./,
    },
  ],
    theme: {
      fontFamily: {
       sans: [ 'Manrope', 'sans-serif' ],
       serif: [ 'Martel Sans', 'sans-serif' ],
    },
    extend: {
      aspectRatio: {
        'landscape': '4/3',
        'landscape-wide': '16/9',
        'portrait': '3/4',
        'portrait-tall': '3/5',
      },
      spacing: {
        '5p': '5%',
        '10p': '10%',
      },
      animation: {
      'bottom-slide-up': 'bottomSlideUp 1.2s linear', 
      },
      keyframes: {
        bottomSlideUp: {
          '0%': {marginBottom:'0rem',},
          '100%': {marginBottom: '1rem',},
        },
      },
    },
  },
}


