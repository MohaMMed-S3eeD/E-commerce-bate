/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '280px',
        'xs': '380px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        color1: "#597445",
        color2: "#E7F0DC",
        color3: "#E7F0DC",
      },
    },
  },
  plugins: [],
};
