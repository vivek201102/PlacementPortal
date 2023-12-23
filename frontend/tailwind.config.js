/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  content: [],
  theme: {
    extend: {
      colors:{
        'primary':'#111827',
        'secondary':"#505601"
      }
    },
  },
  plugins: [],
}

