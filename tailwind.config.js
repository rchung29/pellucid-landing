/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter var'],
      },
      colors: {
        background: {
          '100': '#202029',
          '200': '#18181C',
        },
        text: {
          '100': '#FFFFFF',
          '200': '#83808F',
        },
        purp: {
          '100': '#A78BFA',
        }
      },
      backgroundImage: {
        'bg-header': "url('/src/images/bg-image.svg')",
      },
    },
  },
  plugins: [
    require('tailwind-animatecss')
  ],
}
