module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans"],
      },
      colors: {
        "primary-blue": "#023047",
        "primary-orange": "#FB8500",
        "light-blue": "#219EBC",
        "light-orange": "#FFB703",
        "ultralight-blue": "#8ECAE6",
      },
    },
  },
  plugins: [],
};
