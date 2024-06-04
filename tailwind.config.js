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
      backgroundImage: {
        flightBg: url(
          "https://habgs-content.s3.ap-south-1.amazonaws.com/habgs-partners-banners/default-image/default_image-8.png"
        ),
      },
    },
  },
  plugins: [],
};
