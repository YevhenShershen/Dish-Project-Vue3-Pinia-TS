<script setup lang="ts">
import { ref } from 'vue'
import { loadPosts } from '@/services/posts.services'
const posts = ref('')
const errorMessage = ref('')
const showPostList = ref(false)
const getPosts = async () => {
  const data = await loadPosts()
  if (!!data) {
    posts.value = data
    showPostList.value = !showPostList.value
    errorMessage.value = ''
  } else errorMessage.value = 'Your request to server is wrong!'
}
</script>
<template>
  <div>
    <h1>GET DATA</h1>
    <button @click="getPosts()">Load Posts</button>
    <h2 v-if="errorMessage">{{ errorMessage }}</h2>
    <h2 v-if="showPostList">POST LIST</h2>
    <ul v-if="showPostList">
      <li v-for="post in posts" :key="post">{{ post.id }}: {{ post.title }}</li>
    </ul>
  </div>
</template>
