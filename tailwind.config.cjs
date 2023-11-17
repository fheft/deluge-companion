/** @type {import('tailwindcss').Config}*/
const delugeColors = {
  "deluge-white": "#9f9f9f",
  "deluge-red": "#d27373",
  "deluge-green": "#84c78d",
  "deluge-blue": "#6a94bb",
  "deluge-purple": "#c073d2",
  "deluge-gold": "#c1a466",
};

const config = {
  content: ["./src/**/*.{ts,js,svelte,ts}", "./index.html"],

  safelist: [
    ...Object.keys(delugeColors).map((c) => ({
      pattern: new RegExp(`(text|border)-${c}`),
    })),
  ],

  theme: {
    colors: {
      ...delugeColors,
      neutral: {
        100: "#fff",
        200: "#cfd6dc",
        300: "#b3b4bb",
        400: "#666",
        650: "#3e4349",
        700: "#353a3f",
        800: "#2a2e32",
        900: "#212529",
      },
    },
  },

  plugins: [],
};

module.exports = config;
