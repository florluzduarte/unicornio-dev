// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://unicornio.dev",
  vite: {
      plugins: [tailwindcss()],
  },

  i18n: {
      locales: ["es", "en"],
      defaultLocale: "es",
  },

  integrations: [icon(), mdx(), sitemap(
    {
      customPages: ["https://links.unicornio.dev", "https://florluzduarte/unicornio.dev"],
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-AR",
          en: "en-US",
        }
      }
    }
  )]
});