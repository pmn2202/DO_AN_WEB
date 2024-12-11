/* eslint-disable no-undef */

import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const corePlugins = {
  container: false,
};
export const theme = {
  extend: {
    colors: {
      primary: "#FBD77F",
      secondary: "#FCB203",
      back: "#1B6392",
    },
  },
};
export const plugins = [
  plugin(function ({ addComponents, theme }) {
    addComponents({
      ".container": {
        maxWidth: theme("columns.7xl"),
        marginLeft: "auto",
        marginRight: "auto",
        // paddingLeft: theme("spacing.4"),
        // paddingRight: theme("spacing.4"),
      },
    });
  }),
];
