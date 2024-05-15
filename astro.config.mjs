import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://unicornio.dev",
  integrations: [sitemap({
    filter: page => page !== "https://unicornio.dev/success-newsletter"
  })]
});