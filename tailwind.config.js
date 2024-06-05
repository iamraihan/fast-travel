/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1160px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
      },
    },
    extend: {
      colors: {
        "neutral/20": "#dad6c7",
        red: "#bb2a2f",
        gray: "#f8f8f8",
      },
    },
  },
  plugins: [],
};
