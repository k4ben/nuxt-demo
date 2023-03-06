import posts from '../dbModels/Post';
import type { Post } from '../../pages/index.vue';

export default defineEventHandler(async (event) => {
  const { name, content } = await readBody(event);
  try {
    const newUserData = await posts.create({
      name,
      content
    });
    return {
      name: newUserData.name,
      content: newUserData.content
    };
  } catch (err) {
    console.dir(err);
    event.node.res.statusCode = 500;
    return {
      code: 'ERROR',
      message: 'Something wrong.'
    };
  }
});
