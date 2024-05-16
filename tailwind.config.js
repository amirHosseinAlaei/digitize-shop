module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
fontFamily:{
  sans :["yekan" ]
}

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
