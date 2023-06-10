<!-- how hooks work https://www.youtube.com/watch?v=hk6OktYj8Fs&list=PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f&index=48 -->

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LoadPosts from './rest-api/LoadPosts.vue'
import PostPosts from './rest-api/PostPosts.vue'
import DeletePosts from './rest-api/DeletePosts.vue'
// import LoadUsers from './rest-api/LoadUsers.vue'
import { loadPosts } from '@/services/posts.services'
const posts = ref([])
//here we get data 'POSTS' from server
const getPosts = async () => {
  const data = await loadPosts()
  if (!!data) posts.value = data
}
//here we add item 'post' to our list of posts
const addPost = (post) => {
  posts.value.push(post)
}
//remove current post from list of posts
const removeCurrentPost = (index)=>{
  posts.value.splice(index, 1)
}
//data loading by the hook
onMounted(() => {
  getPosts()
})
</script>

<template>
  <div>
    <h1>REST API</h1>
    <div class="select">
      <LoadPosts :posts="posts" />
      <hr />
      <PostPosts :posts="posts" @add-post="addPost" />
      <hr />
      <DeletePosts :posts="posts" @remove-post="removeCurrentPost" />
      <!--
      <hr />
      <LoadUsers /> -->
    </div>
  </div>
</template>
