import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://tdmtri99.github.io",
  base: "/my-blog-astro",
  integrations: [astroExpressiveCode(), mdx(), tailwind()],
});
