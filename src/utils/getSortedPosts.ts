import type { CollectionEntry } from "astro:content";
import getPostsWithReadingTime from "./getPostsWithReadingTime";
import postFilter from "./postFilter";

const getSortedPosts = async (posts: CollectionEntry<"blog">[]) => {
  const postsWithReadingTime = await getPostsWithReadingTime(posts);
  return postsWithReadingTime
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedPosts;
