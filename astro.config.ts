import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://unicornio.dev",
  integrations: [sitemap({
    customPages: ["https://links.unicornio.dev", "https://florluzduarte.unicornio.dev"],
    i18n: {
      defaultLocale: "es",
      locales: {
        es: "es-AR",
        en: "en-US",
      }
    }
  }), tailwind(), mdx(), icon()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
    fallback: {
      en: "es"
    }
  },
  markdown: {
    shikiConfig: {
      theme: "tokyo-night",
      langs: [],
      wrap: true,
    }
  }
});