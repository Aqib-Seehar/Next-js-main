// tailwind.config.js (Verify this content)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure these paths cover all your component locations:
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      //... (Any existing extensions)
    },
  },
  
  // CRITICAL: Safelist must include the full class strings
  safelist: [
    'bg-green-600',
    'bg-yellow-600',
    'bg-red-600',
    'bg-blue-600',
    'bg-white-600',
    // We only need the BG classes since we are changing the background color
  ],
  
  plugins: [],
}