<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loadUsers } from '@/api/users'
const users = ref({})
const loadData = async () => {
  users.value = await loadUsers()
}
onMounted(() => {
  loadData()
})
</script>
<template>
  <h1>USERS LIST</h1>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
  <!-- {{ users }} -->
</template>
