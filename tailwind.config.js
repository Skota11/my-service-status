/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "picton_blue" : "#3bb3e3",
        "spring_wood" : "#f6f2ee",
        "st_tropaz" : "#2f5e98",
        "osyare_black" : "#333"
      }
    },
  },
  plugins: [],
}