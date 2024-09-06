import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero": "public/assets/bg-hero.png"
      },
      colors: {
        'main-color': '#407BFF',
        'secondary-color': '#112369',
        'header--color': '#26334D',
        'header-color': '#264A99',
        'bg-color': '#D7182C',
        'card-color': '#DFE9FF',
        'paragraph-color': '#7AA3FF',
        'accent-color': '#989898',
        'text-color': '#231F20',
        'form-text': '#5C5C5C',
        'review-text': '#3C3C3C',
        'divider-color': '#BCD1FF'

      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
