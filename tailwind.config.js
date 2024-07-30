/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(208, 161, 68, 1)",
        "secondary-1": "rgba(253, 182, 2, 1)",
        "secondary-2": "rgba(120, 79, 51, 1)",
        "secondary-3": "rgba(219, 180, 104, 1)",
        "secondary-4": "rgba(41, 92, 122, 1)",
        text: "rgba(37, 43, 66, 1)",
        "second-text": "rgba(115, 115, 115, 1)",
        "light-text": "rgba(255, 255, 255, 1)",
        "dark-background": "rgba(37, 43, 66, 1)",
        "light-background": "rgba(255, 255, 255, 1)",
        hover: "rgba(42, 124, 199, 1)",
        "disabled-element": "rgba(142, 194, 242, 1)",
        muted: "rgba(189, 189, 189, 1)",
        success: "rgba(45, 192, 113, 1)",
        alert: "rgba(231, 124, 64, 1)",
        danger: "rgba(231, 64, 64, 1)",
      },
      fontSize: {
        h1: "58px",
        h2: "40px",
        h3: "24px",
        h4: "20px",
        h5: "16px",
        h6: "14px",
        "btn-text": "14px",
        "mobile-menu": "30px",
        paragraph: "14px",
        list: "20px",
        link: "14px",
      },
      fontFamily: {
        martel: ["Martel", "serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        s: "0px 13px 19px rgba(0, 0, 0, 0.07)",
        dramatic: "-31px -22px 19px rgba(0, 0, 0, 0.3)",
        "light-dropshadow": "0px 2px 4px rgba(0, 0, 0, 0.1)",
        "text-shadow": "0px 13px 19px rgba(0, 0, 0, 0.24)",
      },
      backgroundImage: {
        // import from src assets
        cover: "url('../src/assets/cover.png')",
      },
    },
  },
  plugins: [],
};
