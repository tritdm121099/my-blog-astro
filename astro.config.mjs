import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import astroExpressiveCode from "astro-expressive-code";
import { BASE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: "https://tdmtri99.github.io",
  base: BASE,
  integrations: [astroExpressiveCode(), mdx(), tailwind()],
});
