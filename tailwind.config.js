/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pryblue: "#6474C6",
        secblue: "#CED5FA",
        bgblue: "#EFF2FF",
        pryorange: "#FFA57E",
        secorange: "#FFDECF",
        textblack: "#3D3C3C",
      },

      fontFamily: {
        dmsans: "DM Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
