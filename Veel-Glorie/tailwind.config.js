const daisyUI = require("daisyui")
const tailwindRTL = require("tailwindcss-rtl")

const defaultEnv = require("./default-env")
const styles = require("./src/styles")

module.exports = {
  preserveHtmlElements: false,
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx}",
  ],
  purge: [
    "./src/**/*.{js,ts,tsx}",
  ],
  plugins: [daisyUI, tailwindRTL],
  darkMode: false,
  theme: {
    screens: {
      sm: `${defaultEnv.SCREEN_SM}px`,
      md: `${defaultEnv.SCREEN_MD}px`,
      lg: `${defaultEnv.SCREEN_LG}px`,
      xl: `${defaultEnv.SCREEN_XL}px`,
      "2xl": `${defaultEnv.SCREEN_2XL}px`,
    },
  },
  daisyui: {
    themes: [
      {
        default: styles.colors,
      },
    ],
  },
}
