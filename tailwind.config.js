/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Comfortaa"],
      },
      colors: {
        herobtn: "rgba(48, 48, 48, 0.5)",
        itemsecondary: "rgba(0, 0, 0, 0.5)",
        itembtn: "rgba(147, 74, 74, 1)",
        footerhero: "rgba(243, 204, 204, 1)",
        footerbg: "rgba(34, 33, 33, 1)",
        footerbtn: "rgba(243, 204, 204, 1)",
      },
      height: {
        100: "33rem",
      },
      letterSpacing: {
        widerdest: "1rem",
      },
      margin: {
        "quart": "5%",
      },
    },
  },
  plugins: [],
};

