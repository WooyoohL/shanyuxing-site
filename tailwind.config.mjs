/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e5f1ff',
          200: '#cce4ff',
          300: '#99c9f7',
          500: '#0071e3',
          600: '#0066cc',
          700: '#004f9f',
          900: '#00366f',
        },
        ink: '#1d1d1f',
        muted: '#6e6e73',
        canvas: '#f5f5f7',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(0, 113, 227, 0.12)',
        float: '0 18px 55px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
