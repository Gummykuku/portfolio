import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		year: z.number(),
		featured: z.boolean().default(false),
		order: z.number().optional(),
		tags: z.array(z.string()).default([]),
		comingSoon: z.boolean().default(false),
		badge: z.string().optional(),
		url: z.string().url().optional(),
		color: z.string().optional(),
		image: z.string().optional(),
	}),
});

export const collections = { blog, projects };
