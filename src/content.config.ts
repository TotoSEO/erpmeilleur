import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Collection « articles » : les billets de blog en MDX (src/content/articles/*.mdx).
const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    description: z.string().optional(),
    badges: z
      .array(
        z.object({
          label: z.string(),
          tone: z.string().optional(),
          variant: z.string().optional(),
          mono: z.boolean().optional(),
        })
      )
      .optional(),
    author: z
      .object({ name: z.string(), role: z.string().optional(), initials: z.string().optional() })
      .optional(),
    readingTime: z.string().optional(),
    publishedDate: z.string().optional(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    heroLabel: z.string().optional(),
    takeaways: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
