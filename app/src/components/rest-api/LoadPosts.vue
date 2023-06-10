<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  posts?: any
}>()
const posts = ref([])
const errorMessage = ref('')
const postList = ref(false)
const showPostList = () => {
  posts.value = props.posts
  if (!!posts) {
    postList.value = !postList.value
    errorMessage.value = ''
  } else errorMessage.value = 'Your request to server is wrong!'
}
</script>
<template>
  <div>
    <h1>GET DATA</h1>
    <button @click="showPostList()">Load Posts</button>
    <h2 v-if="errorMessage">{{ errorMessage }}</h2>
    <h2 v-if="postList">POST LIST</h2>
    <ul v-if="postList">
      <li v-for="post in posts" :key="post">{{ post.id }}: {{ post.title }}</li>
    </ul>
  </div>
</template>
