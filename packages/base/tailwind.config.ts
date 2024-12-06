import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 프로젝트 파일
    './.storybook/**/*.{js,jsx,ts,tsx}', // Storybook 파일
    './stories/**/*.{js,jsx,ts,tsx}', // Story 파일
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
