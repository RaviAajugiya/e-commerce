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
        lightbg: "#1f2a37",
        primary: "#1c64f2",
        "light-body-text": "#63738e",
        "secondary-text": "#9CA3AF",
        "primary-border": "#333d4c",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
