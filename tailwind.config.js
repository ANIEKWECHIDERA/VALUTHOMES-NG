/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this path matches your project structure
    "./app/**/*.{js,ts,jsx,tsx}", // Include the app directory for Next.js
    "./pages/**/*.{js,ts,jsx,tsx}", // Include the pages directory if using pages router
    "./components/**/*.{js,ts,jsx,tsx}", // Include any components folder
  ],
  theme: {
    extend: {
      colors: {
        "deep-navy-blue": "#1E3A8A",
        "rich-gold": "#FACC15",
        "soft-gray": "#F3F4F6",
        "pure-white": "#FFFFFF",
        "emerald-green": "#0F9D58",
      },
    },
  },
  plugins: [],
};
