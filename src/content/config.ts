import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "src/content/blog" }),
  schema: () =>
    z.object({
      title: z.string(),
      date: z.date(),
      updateDate: z.date().optional(),
      description: z.string(),
      category: z.string(),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};
