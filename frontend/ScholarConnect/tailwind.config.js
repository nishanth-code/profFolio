/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#8A307F",
        "light-white": "rgba(255, 255, 255, 0.18)",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ["Open Sans"],
      Inria: ["Inria Serif"],
    },
  },
  plugins: [],
  variants: {
    extend: {
      // ...
      borderStyle: ["hover"],
    },
  },
};
