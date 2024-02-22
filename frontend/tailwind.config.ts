import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    "colors": {
      "org": {
        50: "#FFF3E5",
        100: "#FFE7CC",
        200: "#FFCF99",
        300: "#FFBA6B",
        400: "#FFA238",
        500: "#FF8A05",
        600: "#D17000",
        700: "#9E5400",
        800: "#663600",
        900: "#331B00",
        950: "#190E00"
      },
      "grey": "#121212",
      "white": "#FFFFFF",
      "black": "#000000",
    }
    
  },
  plugins: [
    require('flowbite-typography'),
    // ...
  ],
};
export default config;
