/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        violate: "#111928",
        primary: "#1c64f2",
        light: "#63738e",
        lightbg: "#1f2a37"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
