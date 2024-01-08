/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        lightGray: "#EFF1F7",
        'dark-violet': 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'very-dark-blue': 'hsl(255, 11%, 22%)',
        'very-dark-violet': 'hsl(260, 8%, 14%)',
        hoverColor: 'hsla(180, 65%, 69%, 0.811)',
        overLay: 'hsla(258, 27%, 26%, 0.296)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'sm': '370px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        'xxl': '1440px',
      },
    },
  },
  plugins: [],
};
