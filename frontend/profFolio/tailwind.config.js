/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
