<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loadUsers } from '@/api/users'
import { UsersStore } from '@/stores/UsersStore'
const users = ref({})
const usersStore = UsersStore()
const loadData = async () => {
  users.value = await loadUsers()
}
onMounted(() => {
  usersStore.loadUsers()
  loadData()
})
</script>
<template>
  <h1>USERS LIST</h1>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
  <hr />
  <h1>USER LIST FROM PINIA</h1>
  <ul>
    <li v-for="user in usersStore.getUsers" :key="user.id">{{ user.name }}</li>
  </ul>
</template>
