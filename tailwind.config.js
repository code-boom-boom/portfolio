/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        window: {
          active: {
            background: '#282c34',
            foreground: '#9da5b4',
            hover: '#404754',
          },
          inactive: {
            background: '#282c34',
            foreground: '#6b717d',
          }
        },
        remote: {
          background: '#4d78cc',
          foreground: '#f8fafd',
        }
      }
    },
  },
  plugins: [],
}

