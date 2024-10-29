/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        main_color: '#012D73',
        sub_color: '#F71D48',
      },
      fontFamily: {
        wix: ['var(--font-wix)'],
        kanit: ['Kanit Cyrillic', 'sans-serif'],
        monaBlackWide: ['Mona Sans BlackWide', 'sans-serif'],
        gropled: ['Gropled', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
