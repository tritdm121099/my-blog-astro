import { defineConfig, squooshImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import astroExpressiveCode from "astro-expressive-code";
import { BASE } from "./src/consts";
import icon from "astro-icon";

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
        ph: ['*'],
      }
    }),
    astroExpressiveCode(),
    mdx(),
    tailwind(),
  ],
});
