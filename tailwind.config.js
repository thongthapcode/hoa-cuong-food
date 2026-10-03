/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        leaf: {
          50: '#f1f8f0',
          100: '#e1f0df',
          200: '#c4e1c1',
          300: '#a8cf9f',
          400: '#79b36f',
          500: '#4b8f45',
          600: '#377a34',
          700: '#2e642d',
          800: '#275028'
        },
        cream: '#f9f6ec'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(39, 80, 40, 0.10)'
      }
    }
  },
  plugins: []
}
