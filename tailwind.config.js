/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        hmd: { raw: '(max-height: 700px)' },
        hsm: { raw: '(max-height: 320px)' },
        one: { raw: '(min-width: 1190px)' },
        two: { raw: '(min-width: 1060px)' },
        three: { raw: '(min-width: 970px)' }
      }
    }
  },
  plugins: []
}
