import { defineConfig, squooshImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import astroExpressiveCode from "astro-expressive-code";
import { BASE } from "./src/consts";
import icon from "astro-icon";
import { bxlIcons, logosIcons, phIcons } from "./src/data/icon";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://tdmtri99.github.io",
  base: BASE,
  image: {
    service: squooshImageService(),
  },
  integrations: [
    icon({
      include: {
        ph: phIcons.map((logo) => logo.replace("ph:", "")),
        logos: logosIcons.map((logo) => logo.replace("logos:", "")),
        bxl: bxlIcons.map((logo) => logo.replace("bxl:", "")),
      },
    }),
    astroExpressiveCode(),
    mdx(),
    tailwind(),
    starlight({
      title: "Tri Blog",
      sidebar: [
        {
          label: "Tips",
          autogenerate: {
            directory: "/tips",
          },
        },
      ],
      logo: {
        src: "./public/favicon.ico",
        dark: "./public/favicon.ico",
        light: "./public/favicon.ico",
      },
      favicon: "./public/favicon.ico",
    }),
  ],
});
