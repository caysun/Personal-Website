import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
    role: z.string(),
    tools: z.array(z.string()),
    results: z.array(z.string()).default([]),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string(),
        })
      )
      .default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .default([]),
    todo: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
