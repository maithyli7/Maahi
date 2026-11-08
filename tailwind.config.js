/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated Pleasant Pastel Palette
        bgCanvas: "#FAF8F5",       // Soft warm cream / porcelain
        bgSurface: "#F3EFEA",      // Light almond / warm greige
        bgCard: "#FFFFFF",         // Crisp warm white
        textMain: "#22201D",       // Deep espresso charcoal (soft on eyes, high contrast)
        textMuted: "#6B655E",      // Refined slate taupe
        textSubtle: "#989086",     // Soft ash
        
        // Balanced Pleasant Pastel Accents
        pastelSage: "#7A9283",     // Calming dusty sage green
        pastelSageBg: "#EEF3EF",   // Pale sage tint
        pastelRose: "#9E656B",     // Sophisticated dusty rose / plum
        pastelRoseBg: "#F7EEF0",   // Pale rose blush tint
        pastelBlue: "#5F7D8E",     // Slate dusty blue
        pastelBlueBg: "#EFF3F6",   // Pale blue tint
        pastelClay: "#B37D64",     // Warm terracotta clay
        pastelClayBg: "#FAF1EC",   // Pale peach clay tint
        
        // Borders
        borderLight: "#E8E2D9",    // Gentle subtle hairline border
        borderFocus: "#C8BEB2",    // Active/hover border
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
