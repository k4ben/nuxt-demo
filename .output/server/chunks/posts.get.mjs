import { defineEventHandler } from 'h3';
import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    name: String,
    content: String
  },
  { timestamps: true, strict: true, strictQuery: true }
);
const posts = mongoose.model("Post", schema, "post");

const posts_get = defineEventHandler(async (event) => {
  try {
    console.log("Find posts");
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
