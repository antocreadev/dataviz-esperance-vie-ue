/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    width: {
      "10vw": "10vw",
      "50vw": "50vw",
      "100vw": "100vw",
      "120vw": "120vw",
      "150vw": "150vw",
    },
    height: {
      "10vh": "10vh",
      "50vh": "50vh",
      "100vh": "100vh",
      "120vh": "120vh",
      "150vh": "150vh",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    themes: ["garden"],
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
