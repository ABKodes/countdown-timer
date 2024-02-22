/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "red-hat": ["Red Hat Text", "sans"],
      },
      backgroundColor: {
        "#fb6087": "#fb6087",
        // Add other custom background colors if needed
      },
    },
  },
  plugins: [],
};
