import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";

interface Frontmatter {
  frontmatter: {
    title: string;
    minutesRead: string;
  };
}

export const getReadingTime = async () => {
  const globPosts = import.meta.glob<Frontmatter>("../data/blog/*.md");

  const mapFrontmatter = new Map();
  const globPostsValues = Object.values(globPosts);
  await Promise.all(
    globPostsValues.map(async globPost => {
      const { frontmatter } = await globPost();
      mapFrontmatter.set(
        slugifyStr(frontmatter.title),
        frontmatter.minutesRead
      );
    })
  );

  return mapFrontmatter;
};

const getPostsWithReadingTime = async (posts: CollectionEntry<"blog">[]) => {
  const mapFrontmatter = await getReadingTime();
  return posts.map(post => {
    post.data.readingTime = mapFrontmatter.get(slugifyStr(post.data.title));
    return post;
  });
};

export default getPostsWithReadingTime;
