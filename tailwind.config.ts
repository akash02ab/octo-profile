import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'orange': '#f66a0a',
      'green': '#28a745',
      'blue': '#0070f3',
      'light-blue': '#79b8ff',
      'lightest-blue': '#c8e1ff',
      'off-white': '#f6f8fa',
      'grey': '#6a737d',
      'slate': '#586069',
      'black': '#1a1e22',
      'dark-grey': '#24292e',
      'white': '#ffffff'
    },
    extend: {
      fontFamily: {
        'inter': ['Inter, system, -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Arial, sans-serif'],
        'mono': ['SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace']
      }
    },
  },
  plugins: [],
};
export default config;
