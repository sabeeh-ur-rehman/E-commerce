/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    colors: {
      Secondary : '#F5F5F5',
      Secondary2 : '#DB4444', 
      Text : '#FAFAFA',
      Text2 : '#000000',
      Button : '#000000',
      Button1 : '#00FF66',
      Button2 : '#DB4444',
      HoverBtn: '#E07575',
      gray: '#c1c0c1',
      cluster : "#FFAD33",



    }
  },
  plugins: [],
}

