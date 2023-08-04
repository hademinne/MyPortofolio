module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const blendModeUtilities = {
        ".mix-blend-color-burn": {
          "mix-blend-mode": "color-burn",
        },
      };
      addUtilities(blendModeUtilities);
    },
  ],
};
