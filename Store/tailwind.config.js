/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#830321',
        secondary: "#00192C", // Define el color primary
      },
    },
  },
  plugins: [],
}

