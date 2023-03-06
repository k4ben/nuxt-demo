import posts from "../dbModels/Post";
import type { Post } from "../../pages/index.vue";

export default defineEventHandler(async (event) => {
  const { name, content } = event.context.params as { name: string, content: string};
  try {
    const newUserData = await posts.create({
      name, content
    });
    return {
      name: newUserData.name,
      content: newUserData.content,
    };
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something wrong.",
    };
  }
});