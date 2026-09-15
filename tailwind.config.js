/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./programs.html",
    "./courses.html",
    "./course-detail.html",
    "./about.html",
    "./contact.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAFA',
        canvasAlt: '#F4F4F5',
        canvasMuted: '#F3F4F3',
        brand: {
          gold: '#9B7641',
          goldDark: '#856333',
          goldLight: '#B0884D',
          dark: '#111624',
          darker: '#0B0F19',
          black: '#141722',
          muted: '#666D80',
          border: '#E8E6DF',
          surface: '#FFFFFF',
        },
        pastel: {
          yellow: '#FEF3D6',
          blue: '#E0E9FE',
          green: '#E3F8EB',
          pink: '#FCE4EC',
          purple: '#F0E7FF',
          peach: '#FFEEDB',
          cyan: '#E0F2FE',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
