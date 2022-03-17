module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          500: "#53B8BB",
          600: "#055052",
          700: "#003638",
        },
        customorange: "#FF8E31"
      },
      animation: {
        scale: "scale 3s ease-in-out infinite"
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' }
        }
      }
    },
  },
  plugins: [],
}
