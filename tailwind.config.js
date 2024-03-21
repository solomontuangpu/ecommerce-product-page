/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "450px" },
    },
    colors: {
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",
      darkGrayishBlue: "hsl(219, 9%, 45%)",
      grayishBlue: "hsl(220, 14%, 75%)",
      lightGrayishBlue: "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      lightBg: "hsl(0, 0%, 0%)",
    },
    extend: {
      animation: {
        openmenu: "openmenu 1s ease-in",
        closemenu: "closemenu 1s ease-in",
      },
      keyframes: {
        openmenu: {
          // initial position
          "0%": { left: "-300px" },
          // final position
          "100%": { left: "0px" },
        },
        closemenu: {
          // initial position
          "0%": { left: "0px" },
          // final position
          "100%": { left: "-300px" },
        },
      },
    },
  },
  plugins: [],
};

/* ### Primary - Orange: hsl(26, 100%, 55%) - Pale orange: hsl(25, 100%, 94%) ### Neutral - Very dark blue: hsl(220, 13%, 13%) - Dark grayish blue: hsl(219, 9%, 45%) - Grayish blue: hsl(220, 14%, 75%) - Light grayish blue: hsl(223, 64%, 98%) - White: hsl(0, 0%, 100%) - Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%) */
