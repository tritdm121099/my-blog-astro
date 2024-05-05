import { defineCollection, getCollection, getEntry } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema'

const docs = defineCollection({
  schema: (ctx) => docsSchema()(ctx)
})

export const collections = {
  docs,
};