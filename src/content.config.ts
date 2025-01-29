import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "src/blog-entries" }),
  schema: () =>
    z.object({
      title: z.string(),
      date: z.date(),
      updateDate: z.date().optional(),
      description: z.string().optional(),
      category: z.string(),
    }),
});

export const collections = {
  blog: postsCollection,
};
