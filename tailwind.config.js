/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Jakarta: ["Plus Jakarta Sans", "sans-serif"]
      },
      colors:{
        Red: "hsl(1, 90%, 64%)",
        Blue: "hsl(219, 85%, 26%)",
        White: "hsl(0, 0%, 100%)",
        VLightGBlue: "hsl(210, 60%, 98%)",
        LightGBlue1: "hsl(211, 68%, 94%)",
        LightGBlue2: "hsl(205, 33%, 90%)",
        GBlue: "hsl(219, 14%, 63%)",
        DarkGBlue: "hsl(219, 12%, 42%)",
        VeryDarkBlue: "hsl(224, 21%, 14%)"
      },
      width:{
        container: "90%",
        chess: "11%"
      }
    },
  },
  plugins: [],
}

