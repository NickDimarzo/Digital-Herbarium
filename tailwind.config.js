/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["Montserrat", "monospace"],
      },

    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'moss': '#c9cba3',
      'green': '#15803d',
      'sand': '#ffe1a8',
      'brick': '#e26d5c',
      'velvet': '#723d46',
      'dark': '#472d30',
      'black': '#000000',
      'white': '#ffffff',
      'dark-blue': '#2f3e46',
      'dark-green': '#52796f',
      'light-green': '#84a98c',
      'light-sand': '#f0ead2',
      'darker-blue': '#354f52',
      'gray': {
        50: '#f9f9f9',
        100: '#f4f4f4',
        200: '#eaeaea',
        300: '#d9d9d9',
        400: '#bfbfbf',
        500: '#a6a6a6',
        600: '#8c8c8c',
        700: '#737373',
        800: '#595959',
        900: '#404040',
      },
    },
  },
  plugins: [],
};
