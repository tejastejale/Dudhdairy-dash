/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        customBlue: {
          600: "#1D4ED8",
          700: "#1E40AF",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};

// // tailwind.config.js
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         customBlue: {
//           600: "#1D4ED8",
//           700: "#1E40AF",
//         },
//       },
//     },
//   },
//   plugins: [require("flowbite/plugin")],
// };
