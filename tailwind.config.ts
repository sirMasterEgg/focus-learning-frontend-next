import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        footer: "#3f4756",
        "footer-accent": "#A3ABBD",
        "team-bg": "#E6F4FE",
        primary: {
          60: "#59d4ff",
          80: "#3badfc",
          100: "#0096fe",
        },
        neutral: {
          100: "#ffffff",
        },
        secondary: {
          100: "#2dbd6e",
          50: "#2dbd6e80",
        },
        text: {
          40: "#d9d9d9",
          60: "#b1afaf",
          80: "#646262",
          100: "#302f2f",
        },
        card: {
          1: "#18a8c2",
          2: "#b6f083",
          3: "#76e39c",
          4: "#00bec1",
          5: "#35d2b3",
          6: "#00BEC180",
        },
        "floating-whatsapp": "#E1F4D9",
      },
    },
  },
  plugins: [],
};
export default config;
