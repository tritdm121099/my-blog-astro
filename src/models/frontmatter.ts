import type { Tag } from "./tag";

export interface Frontmatter {
  title: string;
  description: string;
  publishedAt: string;
  tags: Tag[];
  slug: string;
}
