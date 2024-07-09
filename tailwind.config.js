/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },

    extend: {
      backgroundImage: {
        background: "url('/src/img/background.jpg')",
        hero: "url('/src/img/bg_hero.svg')",
      },
    },
  },
  plugins: [],
};
