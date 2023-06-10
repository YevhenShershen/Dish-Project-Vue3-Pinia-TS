<script setup lang="ts">
import { computed } from 'vue'
import { removePost } from '@/services/posts.services'
const props = defineProps<{
  posts: any
}>()
const emit = defineEmits<{
  (e: 'remove-post', index: number): void
}>()

const removeCurrentPost = async (id, index) => {
  const responseStatus = await removePost(id)
  if (responseStatus?.status === 200) {
    emit('remove-post', index)
    console.log('Запрос выполнен успешно')
  }
  return
}
const posts = computed(() => props.posts)
</script>
<template>
  <h1>DELETE DATA</h1>
  <table>
    <tr>
      <td>ID</td>
      <td>TITLE</td>
      <td>BODY</td>
    </tr>
    <tr v-for="(post, index) in posts" :key="post.id">
      <td>{{ post.id }}</td>
      <td>{{ post.title }}</td>
      <td>{{ post.body }}</td>
      <td><button @click="removeCurrentPost(post.id, index)">Delete</button></td>
    </tr>
  </table>
</template>
<style scoped lang="scss">
table,
th,
td {
  border: 1px solid black;
}
</style>
