import { content as _content, plugin } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}", _content()];

export const theme = {
  extend: {
    colors: {
      "custom-yellow": "rgba(255,247,218,1)",
      "custom-transparent": "rgba(255,255,255,0)",
      "custom-beige": "rgba(255, 252, 242, 1)",
      "custom-grey": "rgba(237, 242, 247, 1)",
      "custom-purple": "rgba(235,222,255,1)",
      "custom-light-grey": "rgba(160, 174, 192, 1)",
      "custom-dark-grey": "rgba(66, 84, 102, 1)",
      "custom-black": "rgba(10,20,47,1)",
      "custom-thin-gray": "rgba(248, 249, 250, 1)",
    },
    backgroundImage: {
      "custom-gradient":
        "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 247, 218, 1), rgba(255, 255, 255, 0))",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
};

export const plugins = [
  require("tailwind-scrollbar"),
  require("flowbite-react/tailwind").plugin(),
  function ({ addUtilities }) {
    const newUtilities = {
      ".scrollbar-thin": {
        scrollbarWidth: "thin",
        scrollbarColor: "rgb(31,29,29) yellow", // Thumb color is dark, track color is yellow
      },
      ".scrollbar-webkit": {
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "yellow", // Track color should be yellow
          borderRadius: "20px",
          border: "1px solid white", // Optional, you can remove this if you don't need the border
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgb(31,29,29)", // Thumb color, you can adjust this as needed
          borderRadius: "10px",
        },
      },
    };
    addUtilities(newUtilities, ["responsive", "hover"]);
  },
];
