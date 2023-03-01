<script lang="ts" setup>
import { ref } from 'vue';

const name = ref("");
const emit = defineEmits(['closeModal']);

function buttonClick() {
  emit('closeModal', name.value);
}
</script>
<template>
  <dialog open>
    <article>
      <h4>Choose your nickname!</h4>
      <input type="text" v-model="name"/>
      <button @click="buttonClick" :disabled="!name">Continue</button>
    </article>
  </dialog>
</template>