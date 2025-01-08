/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        border: {
          "0%": { backgroundPosition: "0% 50%" },
          "25%": { backgroundPosition: "50% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "75%": { backgroundPosition: "50% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        border: "border 4s ease infinite",
      },
    },
  },
  plugins: [],
};
