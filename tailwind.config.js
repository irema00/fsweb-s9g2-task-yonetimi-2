/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: {
          500: "#FFD9D4",
        },
        mabel: {
          500: "#D4F6FF",
        },
      },
    },
  },
  plugins: [],
};
