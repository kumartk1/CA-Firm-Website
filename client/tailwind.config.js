module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'consulting': "url('./src/assets/contact assets/consultingPic.webp')",
      },
    },
  },
  plugins: [],
}
