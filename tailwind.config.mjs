/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#009fe3',
          dark: '#007dba',
          light: '#e6f6fd',
        },
        dark: {
          DEFAULT: '#2d2929',
          900: '#1a1717',
          800: '#2d2929',
          700: '#3d3939',
          100: '#f8f8f8',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
