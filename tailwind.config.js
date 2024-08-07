const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Lblack:"#475467",
        Dblack:"#101828",
        mainClr:"#DC893F",
        Lblack50:"#344054"
      },
      gridTemplateColumns: {
        'my-columns':'auto'
      },

      screens: {
        'xs': {'min': '40px', 'max': '639px'},
        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily:{
        'noto-sans-arabic': ['Noto Sans Arabic', 'sans-serif'],
        "Inter":["Inter"," sans-serif"]
      },
    },
  },
  plugins: [],
})