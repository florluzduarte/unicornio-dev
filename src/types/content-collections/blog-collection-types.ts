import type { InferGetStaticParamsType } from "astro";
import type { CollectionEntry } from "astro:content";

export interface BlogFromSlug {
  params: {
    lang: string;
    slug: string;
  };
  props: {
    entry: BlogProps;
  };
}

export interface BlogProps {
  entry: CollectionEntry<"blog">;
}