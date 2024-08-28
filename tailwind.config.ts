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
        'header-color': '#112369',
        'header--color': '#26334D',
        'circle-color': 'rgba(196, 155, 51, 0.10)',
        'bg-color': '#fafbfc',
        'card-color': '#DFE9FF',
        'paragraph-color': '#7AA3FF',
        'accent-color': '#989898',
        'text-color': '#231F20',
        'form-text': '#5C5C5C'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
