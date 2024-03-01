/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/client/*.{js,ts,jsx,tsx}", "./src/client/routes/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
