import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'csm': '0.8vw',
        'cbase': '1.3vw',
        'x': '1.5vw',
        '2x': '1.8vw',
        '3x': '2.2vw',
        '4x': '3vw',
        '4xh': '3.5vw',
        '5x': '4vw',
        '6x': '5vw',
        '7x': '6vw',
        '8x': '6.5vw',
      },
      padding: {
        'py-btn':'',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-dark-blue': 'rgb(10,25,47)',
        'custom-light-blue':'rgb(17,34,64)',
        'custom-bit-green':'rgb(100,255,218)',
        'custom-gray':'rgb(136,146,176)',
        'custom-offwhite':'rgb(204,214,246)'
      },
      boxShadow: {
        '3xl': '8px 10px 18px -3px rgb(0 0 0 / 0.1)',
      },
      screens: {
        'cmd':{'max':'992px'} ,
        'med': {'max': '991px'},
        // => @media (max-width: 992px) { ... }  
      },
    },
  },
  plugins: [],
};
export default config;
