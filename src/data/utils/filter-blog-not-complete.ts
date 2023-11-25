import type { Frontmatter } from "../../models";

export const filterBlogNotComplete = (blog: Frontmatter): boolean => {
    if (import.meta.env.PROD) {
      return blog.isComplete;
    } else {
      return true;
    }
}