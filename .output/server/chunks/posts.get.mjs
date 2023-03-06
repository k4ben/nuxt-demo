import { defineEventHandler } from 'h3';
import { p as posts } from './Post.mjs';
import 'mongoose';

const posts_get = defineEventHandler(async (event) => {
  try {
    const postsData = await posts.find();
    return postsData.map((post) => ({
      name: post.name,
      content: post.content
    }));
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong."
    };
  }
});

export { posts_get as default };
//# sourceMappingURL=posts.get.mjs.map
