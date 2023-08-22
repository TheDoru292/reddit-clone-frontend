/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        hmd: { raw: '(max-height: 700px)' },
        hsm: { raw: '(max-height: 320px)' }
      }
    }
  },
  plugins: []
}
