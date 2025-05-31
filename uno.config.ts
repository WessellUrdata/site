import { defineConfig, presetWind3, presetTypography, transformerCompileClass } from "unocss";

export default defineConfig({
  presets: [
    presetWind3(),
    presetTypography({
      cssExtend: {
        ":root": {
          "--un-prose-links": "#e7e8ea",
        },
        h1: {
          "font-size": "1.875rem",
          "line-height": "2.25rem",
          "font-weight": "600",
          margin: "inherit",
          "margin-bottom": "12px",
        },
        "h2, h3, h4, h5, h6": {
          "margin-bottom": "24px",
        },
        img: {
          margin: "0 auto",
          height: "83.3%",
          "max-height": "360px",
          "border-radius": ".25rem",
        },
        math: {
          "font-size": "1.21rem",
        },
        "code ::before, code ::after": {
          content: "none",
        },
        code: {
          "counter-reset": "step",
          "counter-increment": "step 0",
        },
        "pre:not([data-language='plaintext']):not([data-language='console']) > code .line::before": {
          content: "counter(step)",
          "counter-increment": "step",
          width: "1rem",
          "margin-right": "1.5rem",
          display: "inline-block",
          "text-align": "right",
          color: "rgb(115,138,148)",
        },
        pre: {
          padding: "1rem",
          "border-radius": ".5rem",
          border: "1px solid rgb(115,138,148)",
          "box-sizing": "border-box",
        },
      },
    }),
  ],
  theme: {
    colors: {
      // ripped from Breeze Dark
      base: "#232629", // view, BackgroundNormal
      primary: "#31363b", // view, BackgroundAlternate
      accent: "#ffcc4d",
      neutral: "#4d4d4d",
      text: "#cecfd0",
      link: "#e7e8ea", // text color with 10% increased brightness

      // secondary: "#4d4d4d",
      // info: "#2980b9",
      // success: "#27ae60",
      // warning: "#ed1515",
      // error: "#da4453",
    },
  },
  shortcuts: {
    "heading-1": "text-3xl font-semibold text-accent mb-1",
    link: "underline font-medium text-link",
  },
  preflights: [
    {
      getCSS: ({ theme }) => `
        :root {
          background-color: ${theme.colors!.base};
          color: ${theme.colors!.text};
        }

        img.emoji {
          display: inline;
          height: 1.2em;
          width: 1.2em;
          margin: 0 0.025em;
          vertical-align: sub;
          border-radius: 0;
        }
      `,
    },
  ],
  transformers: [transformerCompileClass()],
});
