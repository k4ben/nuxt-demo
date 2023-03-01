import { Post } from "~~/pages/index.vue";

export default defineEventHandler(()=>([
    { name: "Ben", content: "Test"}
] as Post[]));