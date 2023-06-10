<script setup lang="ts">
import { ref } from 'vue'
import { loadPosts } from '@/services/posts.services'
const posts = ref('')
const errorMessage = ref('')
const showData = ref(false)
const getPosts = async () => {
  const data = await loadPosts()
  if (!!data) {
    posts.value = data
    showData.value = !showData.value
  }
}
</script>
<template>
  <div>
    <h1>GET DATA</h1>
    <button @click="getPosts()">Load Posts</button>
    <h2 v-if="errorMessage">{{ errorMessage }}</h2>
    <h2 v-if="posts">POST LIST</h2>
    <ul v-if="showData">
      <li v-for="post in posts" :key="post">{{ post.id }}: {{ post.title }}</li>
    </ul>
  </div>
</template>
