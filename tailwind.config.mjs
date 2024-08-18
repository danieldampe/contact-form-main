/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      width: {
        mobile: 375,
        desktop: 1440
      },
      colors: {
        primary: {
          'green-200': 'hsl(148, 38%, 91%)',
          'green-600': 'hsl(169, 82%, 27%)',
          red: 'hsl(0, 66%, 54%)'
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          'grey-500': 'hsl(186, 15%, 59%)',
          'grey-900': 'hsl(187, 24%, 22%)'
        }
      },
      fontFamily: {
        karla: '"Karla", sans-serif' /* 400, 700 */
      }
    }
  },
  plugins: []
}
