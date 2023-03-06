import posts from "../dbModels/Post";
import type { Post } from "../../pages/index.vue";

export default defineEventHandler(async (event) => {
  try {
    const postsData = await posts.find();
    return postsData.map((post: Post) => ({
      name: post.name,
      content: post.content,
    }));
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});