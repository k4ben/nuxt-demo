<script lang="ts" setup>
import { onMounted, ref } from 'vue';

export interface Post {
  name: string,
  content: string
}

const name = ref("");
const message = ref("");

function setName(n: string) {
  name.value = n;
}

function sendMessage() {
  posts.value.push({ name: name.value, content: message.value });
  message.value = "";
}

const posts = ref([] as Post[]);

const { data: fetchedPosts } = await useFetch('/api/posts');
posts.value = fetchedPosts.value || [];

</script>
<template>
<main class="container">
  <Modal @closeModal="setName" v-if="!name && false"/>
  <article>
    <textarea placeholder="Compose a post..." v-model="message"></textarea>
    <button @click="sendMessage">Post</button>
  </article>
  <article v-for="post in posts.slice().reverse()">
  <header>{{post.name}}</header>
  <p>{{post.content}}</p>
  </article>
</main>
</template>