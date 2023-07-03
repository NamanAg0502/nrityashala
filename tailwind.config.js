/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const darkMode = false; // or 'media' or 'class'
export const theme = {
  extend: {
    colors: {
      beige: '#E8E2C1',
      pink: '#F4C5AC',
      dark_brown: '#302532',
      light_brown: '#9F2F26',
    },
  },
  fontFamily: {
    hindi: ['Hindi', 'sans-serif'],
  },
};
export const plugins = [];
