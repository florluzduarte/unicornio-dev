import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    canonicalUrl: z.string().url(),
    githubUrl: z.string().url(),
    language: z.enum(["es", "en"]),
    tags: z.array(z.string()),
    relatedPosts: z.array(reference("blog")).optional(),
  })
});

const tutorialsCollection = defineCollection({
  type: "content",
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    mainTech: z.string(),
    techStack: z.array(z.string()),
    status: z.enum(["completed", "ongoing"]),
    canonicalUrl: z.string().url(),
    githubUrl: z.string().url(),
    language: z.enum(["es", "en"]),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    relatedTutorials: z.array(reference("tutorials")).optional(),
  })
});

export const collections = {
  "blog": blogCollection,
  "tutorials": tutorialsCollection,
}