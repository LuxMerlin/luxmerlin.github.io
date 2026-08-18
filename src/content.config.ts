import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean()
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
  }),
});

export const collections = {
  'projects': projectCollection,
  'blog': blogCollection,
};
