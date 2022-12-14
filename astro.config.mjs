import { defineConfig } from "astro/config";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://unicornio.dev",
  integrations: [
    sitemap({
      filter: (page) => page !== "https://unicornio.dev/success-newsletter",
    }),
    image(),
  ],
});
