/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroyBlack: ["GilroyBlack", "sans-serif"],
        gilroyBold: ["GilroyBold", "sans-serif"],
        gilroyExtraBold: ["GilroyExtraBold", "sans-serif"],
        gilroyHeavy: ["GilroyHeavy", "sans-serif"],
        gilroyLight: ["GilroyLight", "sans-serif"],
        gilroyMedium: ["GilroyMedium", "sans-serif"],
        gilroyRegular: ["GilroyRegular", "sans-serif"],
        gilroySemiBold: ["GilroySemiBold", "sans-serif"],
        gilroyThin: ["GilroyThin", "sans-serif"],
        gilroyUltraLight: ["GilroyUltraLight", "sans-serif"],
        monumentExtended: ["MonumentExtended-Regular", "sans-serif"],
        monumentExtendedBold: ["MonumentExtended-Ultrabold", "sans-serif"],
      }
    },
  },
  plugins: [],
}