<!-- how hooks work https://www.youtube.com/watch?v=hk6OktYj8Fs&list=PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f&index=48 -->

<script setup lang="ts">
import LoadPosts from './rest-api/LoadPosts.vue'
import PostPosts from './rest-api/PostPsots.vue'
import DeletePosts from './rest-api/DeletePosts.vue'
import LoadUsers from './rest-api/LoadUsers.vue'
</script>

<template>
  <div>
    <h1>REST API</h1>
    <div class="select">
      <LoadPosts />
      <hr />
      <PostPosts />
      <hr />
      <DeletePosts />
      <hr />
      <LoadUsers />
    </div>
  </div>
</template>
