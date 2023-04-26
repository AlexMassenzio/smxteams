/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      invis: "#d97706",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        smxteams: {
          primary: "#db2777",
          secondary: "#4f46e5",
          accent: "#a5b4fc",
          neutral: "#44403c",
          "base-100": "#292524",
          info: "#3ABFF8",
          success: "#22c55e",
          warning: "#facc15",
          error: "#dc2626",
        },
      },
    ],
  },
};
