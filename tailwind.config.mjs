/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          900: '#172554',
        },
        ink: '#132238',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(37, 99, 235, 0.12)',
        float: '0 18px 55px rgba(15, 23, 42, 0.08)',
      },
      fontFamily: {
        sans: [
          '"PingFang SC"',
          '"Microsoft YaHei"',
          '"Noto Sans CJK SC"',
          '"Source Han Sans SC"',
          '"HarmonyOS Sans SC"',
          '"MiSans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Inter',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
