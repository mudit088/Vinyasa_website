/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
      
    },
    fontFamily:{ serif : ["Zilla Slab"],
    
  
  }
},
  plugins: [],
}

// font-family: 'Great Vibes', cursive;
// font-family: 'Raleway', sans-serif;
// font-family: 'Zilla Slab', serif;

