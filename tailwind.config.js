/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        yellow:'#E2B13C'
      },

      backgroundImage: {
        "deatailsImg": "url('https://st.ourhtmldemo.com/new/egypt/images/background/inner-banner-bg-1-1.jpg')",
      
      }
    },
  },
  plugins: [ require('daisyui'),],
}