import posts from "../dbModels/Post.ts";

export default defineEventHandler(async (event) => {
  try {
    console.log("Find posts");
    const postsData = await posts.find();
    return postsData.map((post) => ({
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