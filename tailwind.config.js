/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     // daisyUi color
     themes: [
      {
        mytheme: {
          primary: '#570DF8',
          secondary: '#F000B8',
          accent: '#37CDBE',
          neutral: '#3D4451',
          base100: '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
    // tailwind color
    extend: {
      colors: {
        clifford: '#da373d',
        primaryColor: '#6047EC',
        primaryBgColor: 'rgba(17, 17, 17, 0.05)',
      },
    },
  },
  plugins: [require("daisyui")],
}

