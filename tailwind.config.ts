import { colorize, resetCSS, schemes } from "tailwind-schemes"
import tailwindScrollbar from "tailwind-scrollbar"
import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwindcss-animate"
import colors from "tailwindcss/colors"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: { sans: ["Rubik", ...defaultTheme.fontFamily.sans] },
      keyframes: {
        collapsible: {
          from: { height: "0px" },
          to: { height: "var(--height)" },
        },
      },
      borderRadius: {
        DEFAULT: "6px",
      },
      animation: {
        collapsible: "collapsible",
      },
      boxShadow: {
        button:
          "0px 0px 10px 0px var(--color), 0px 1px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -3px 0px 0px rgba(0, 0, 0, 0.15) inset, 0px 0px 12px 0px var(--shadow-color) inset",
      },
    },
  },
  plugins: [
    tailwindAnimate,
    tailwindScrollbar({ nocompatible: true }),
    schemes({
      schemes: {
        root: {
          background: colors.gray[950],
          foreground: colors.white,
          primary: colorize(colors.red, "500", "50"),
          secondary: colors.gray[400],
          muted: colors.gray[700],
          accent: colorize(colors.fuchsia, "500", "50"),
          default: colors.gray[800],
          component: colors.gray[900],
          invert: colors.black,
          line: colors.gray[800],
          info: colorize(colors.sky, "500", "50"),
          success: colorize(colors.green, "500", "50"),
          warning: colorize(colors.yellow, "500", "50"),
          error: colorize(colors.red, "500", "50"),
        },
      },
    }),
    resetCSS({
      html: "bg-background text-foreground scroll-smooth",
      "*": "scrollbar scrollbar-thumb-default scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-track-transparent",
    }),
  ],
}

export default config
