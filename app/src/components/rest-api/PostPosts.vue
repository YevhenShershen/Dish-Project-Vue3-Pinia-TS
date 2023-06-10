<script setup lang="ts">
import { ref, computed } from 'vue'
import { addPost } from '@/services/posts.services'
const props = defineProps<{
  posts?: any
}>()
const emit = defineEmits<{
  (e: 'add-post', post: any): void
}>()
const getNewPostId = computed(() => props.posts.length)
const formData = ref({
  body: '',
  id: getNewPostId,
  title: '',
  userId: '',
})
const dataPost = async () => {
  try {
    await addPost(formData)
    emit('add-post', formData.value)
  } catch {}
}
</script>
<template>
  <h1>POST DATA{{ props.posts.length }}</h1>
  <input type="number" v-model="formData.userId" />
  <input type="text" v-model="formData.title" />
  <input type="text" v-model="formData.body" />
  <button @click="dataPost()">POST</button>
</template>
