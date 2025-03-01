import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        sigmar: ["var(--font-sigmar)"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animated"),
    require("tailwind-scrollbar"),
  ],
} satisfies Config;
