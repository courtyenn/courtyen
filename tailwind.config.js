/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./courtyen-ui/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "[nav] 10vh [content] minmax(80vh, auto) [footer] 10vh",
      },
      gridTemplateColumns: {
        layout: "1fr [content] 10fr 1fr",
      },
      colors: {
        white: {
          700: "#b6b6b6",
          900: "#fbfbfb",
        },
        pink: {
          700: "#d374c8",
          900: "#d841c7"
        },
        purple: {
          900: "#8257ba"
        }
      },
    },
  },
  plugins: [],
}

