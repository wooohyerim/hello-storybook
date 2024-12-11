/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: ' #1d2745',
      secondary: ' #1de5d4',
      tertiary: ' #f52c50',
      white: ' #ffffff',
      mono100: ' #f1f1f1',
      mono200: ' #bebebe',
      mono300: ' #d6d7d9',
      error: ' #d01e1e',
      social: '#395997',
      'dark-opacity': 'rgba(255,255,255,0.1)'
    }
  },
  plugins: []
}
