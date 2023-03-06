import posts from '../dbModels/Post';
import type { Post } from '../../pages/index.vue';

export default defineEventHandler(async (event) => {
  try {
    const postsData = await posts.find();
    const filteredPosts = postsData
      .map((post) => ({
        name: post.name,
        content: post.content
      }))
      .filter((post) => post.name && post.content) as Post[];
    return filteredPosts;
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: 'ERROR',
      message: 'Something went wrong.'
    };
  }
});
