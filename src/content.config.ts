import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    update: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    site: z.string().url().optional(),
    client: z.string().optional(),
    github: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, projects };
