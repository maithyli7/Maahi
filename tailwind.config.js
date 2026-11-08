/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#F8F5EF",
        bgSecondary: "#EFEAE1",
        bgWhite: "#FFFFFF",
        textPrimary: "#29241F",
        textSecondary: "#77716A",
        accentBurgundy: "#773B45",
        accentRose: "#B58D8C",
        borderIvory: "#DDD6CB",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.22em',
        'subtle': '0.12em',
      }
    },
  },
  plugins: [],
}
