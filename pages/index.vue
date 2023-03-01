<script setup>
import { ref } from 'vue';

const name = ref("");
const message = ref("");

function setName(n) {
  name.value = n;
}

function sendMessage() {
  posts.value.push({ name: name.value, content: message.value });
  message.value = "";
}

const posts = ref([
  {name: "Ben", content: "Does this work?"},
  {name: "Emil", content: "Yeah I think it does lol"}
])
</script>
<template>
<main class="container">
  <Modal @closeModal="setName" v-if="!name"/>
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