module.exports = {
  mode: "jit",
  purge: [
    // main app
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/javascripts/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "sm-top": "0 -1px 2px -1px rgba(0, 0, 0, 0.05)",
        "md-top": "0 -4px 6px -2px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        "pitzi-blue": {
          header: "#1D2079",
        },
        indigo: {
          600: '#0B16C7',
          700: '#0B16C7'
        },
        blue: {
          700: '#0B16C7'
        },
        lime: {
          300: '#C6F279'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addVariant, e }) {
      addVariant("last-child", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`last-child${separator}${className}`)}:last-child`;
        });
      });
    },
  ],
};
