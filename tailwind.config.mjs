/** @type {import('tailwindcss').Config} */
module.exports = { // Usar module.exports en lugar de export default (compatibilidad)
  prefix: 'tw-', // Prefijo 'tw-' para evitar colisiones
  content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
          colors: {
              background: "var(--background)",
              foreground: "var(--foreground)",
          },
      },
  },
  plugins: [],
};