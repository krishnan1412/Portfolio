/** @type {import('tailwindcss').Config} */



export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
    keyframes: 
    { rotateIn: 
      { '0%': { transform: 'rotate(-360deg)', opacity: '0' }, 
      '100%': { transform: 'rotate(0deg)', opacity: '1' }, 
    },
    zoomIn: {
      '0%': {transform: 'scale(0.5)', opacity: '0'},
      '100%': {transform: 'scale(1)', opacity: '1'}
    },
    zoomOut: { 
      '0%': { transform: 'scale(1)', opacity: '1' }, 
      '100%': { transform: 'scale(0.5)', opacity: '0' }, 
    },
    },
    animation: { rotateIn: 'rotateIn 1s ease-in-out', 
      zoomIn: 'zoomIn 50s ease-in-out forwards',
      zoomOut: 'zoomOut 0.5s ease-in-out forwards',
    },
    
  },
    fontFamily:{
      'hero-font': 'Sriracha'
    },

  },
  plugins: [],
}

