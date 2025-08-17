/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
