import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

//pattern will get any md or mdx files, ignoring files with a _ prefix
const filePattern = "**/[^_]*.{md,mdx}";

const projectCollection = defineCollection({
  loader: glob({ pattern: filePattern, base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean()
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: filePattern, base: "./src/content/blog" }),
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
