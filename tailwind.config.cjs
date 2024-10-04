/** @type {import('tailwindcss').Config}*/

const config = {
  content: ["./src/**/*.{ts,js,svelte,ts}", "./index.html"],

  safelist: [
    ...["neutral", "red", "green", "blue", "purple", "gold"].map((c) => ({
      pattern: new RegExp(`(text|bg)-${c}`),
    })),
  ],

  theme: {
    colors: {
      neutral: {
        50: "#f4f5f7",
        100: "#e4e7e9",
        200: "#cbd2d6",
        300: "#a7b1b9",
        400: "#7c8a94",
        500: "#616f79",
        600: "#535d67",
        700: "#474e57",
        800: "#3e4349",
        900: "#383c41",
        920: "#32373e",
        950: "#22262a",
      },
      red: {
        50: "#fcf4f4",
        100: "#f9e7e7",
        200: "#f4d4d4",
        300: "#ebb6b6",
        400: "#de8b8b",
        500: "#d27373",
        600: "#b84a4a",
        700: "#9a3b3b",
        800: "#803434",
        900: "#6c3030",
        950: "#391616",
      },
      green: {
        50: "#f0f9f1",
        100: "#dbf0db",
        200: "#b9e1bc",
        300: "#84c78d",
        400: "#5aad68",
        500: "#389149",
        600: "#287339",
        700: "#205c2f",
        800: "#1b4a27",
        900: "#173d21",
        950: "#0c2213",
      },
      blue: {
        50: "#f4f8fa",
        100: "#e5edf4",
        200: "#d2e0eb",
        300: "#b2cdde",
        400: "#8db3cd",
        500: "#6a94bb",
        600: "#5f84b1",
        700: "#5473a1",
        800: "#495f84",
        900: "#3e4f6a",
        950: "#293242",
      },
      gold: {
        50: "#f8f6ee",
        100: "#eee8d3",
        200: "#ded1aa",
        300: "#cab47a",
        400: "#c1a466",
        500: "#ab8747",
        600: "#936c3b",
        700: "#765232",
        800: "#64452f",
        900: "#563b2d",
        950: "#311f17",
      },
      purple: {
        50: "#fcf6fd",
        100: "#f6ecfb",
        200: "#eed9f5",
        300: "#e2bbec",
        400: "#d192e0",
        500: "#c073d2",
        600: "#a048b1",
        700: "#853992",
        800: "#6f3078",
        900: "#5d2c63",
        950: "#3a1240",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-bg": "linear-gradient(140deg, #22262a 0%, #32373e 100%)",
      },
    },
  },

  plugins: [],
};

module.exports = config;
