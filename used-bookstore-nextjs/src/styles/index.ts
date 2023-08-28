import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      red: "#BF0A0D",
      darkRed: "#8f070a",
      lightYellow: "#E6E1C2",
      background: "#EFEFEF",
      black: "#000",
      white: "#fff",
      lightGray: "#EFEFEF",
    },

    fontSizes: {
      rl: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },

    fontFamilies: {
      rb: "Roboto",
    },
  },
});
