import { defineStore } from 'pinia'
import { loadUsers } from '@/api/users'
type Users = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
type StateUsers = {
  users: Users[]
}
export const UsersStore = defineStore('UsersStore', {
  state: (): StateUsers => ({
    users: [],
  }),
  getters: {
    getUsers: (state) => {
      return state.users
    },
  },
  actions: {
    async loadUsers() {
      this.users = await loadUsers()
    },
  },
})
