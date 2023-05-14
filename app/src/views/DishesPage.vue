<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Dish } from '@/types'
import NewDishForm from '../components/NewDishForm.vue'
import DishCard from '../components/DishCard.vue'
import SideMenu from '../components/SideMenu.vue'
import EditDishForm from '../components/EditDishForm.vue'
import { useRoute } from 'vue-router'
import { useDishesStore } from '@/stores/DishStore'
type ShowFormState = '' | 'new' | 'edit'
const filterText = ref('')
const dishStore = useDishesStore()
const dishList = dishStore.list
const showNewForm = ref<ShowFormState>('')

const filteredDishList = computed((): Dish[] => {
  return dishList.filter((dish: Dish) => {
    if (dish.name) {
      return dish.name.toLowerCase().includes(filterText.value.toLowerCase())
    } else {
      return dishList
    }
  })
})
const addDish = (payload: Dish) => {
  dishStore.addDish(payload)
  hideForm()
}
const editDishId = ref('')
const deleteDish = (payload: Dish) => {
  dishStore.deleteDish(payload)
}
const editDishForm = (payload: Dish) => {
  showNewForm.value = 'edit'
  editDishId.value = payload.id
}
const hideForm = () => {
  showNewForm.value = ''
}
// const updateFilterTest = (event: KeyboardEvent) => {
//   filterText.value = (event.target as HTMLInputElement).value
// }
const cancelEdit = () => {
  showNewForm.value = ''
}
onMounted(() => {
  const route = useRoute()
  if (route.query.new) {
    showNewForm.value = 'new'
  } else if (route.query.edit) {
    showNewForm.value = 'edit'
  }
})
</script>

<template>
  <main class="section">
    <div class="columns">
      <!-- Side Menu -->
      <SideMenu />

      <!-- Main Content -->
      <div class="column">
        <h1 class="title">Dishes</h1>

        <!-- CTA Bar -->
        <nav v-if="!showNewForm" class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5">
                <strong>{{ dishStore.numberOfDishes }}</strong> dishes
              </p>
            </div>

            <p class="level-item">
              <button @click="showNewForm = 'new'" class="button is-success">New</button>
            </p>

            <div class="level-item is-hidden-tablet-only">
              <div class="field has-addons">
                <p class="control">
                  <input class="input" type="text" placeholder="Dish name" v-model="filterText" />
                </p>
                <p class="control">
                  <button class="button">Search</button>
                </p>
              </div>
            </div>
          </div>
        </nav>

        <!-- New Dish Form -->
        <NewDishForm v-if="showNewForm === 'new'" @add-new-dish="addDish" @cancel-new-dish="hideForm" />
        <!-- Edit Dish Form -->
        <EditDishForm
          v-else-if="showNewForm === 'edit'"
          :dishId="editDishId"
          @cancel-edit-dish="cancelEdit"
          @update-edit-dish="cancelEdit"
        />
        <!-- Display Results -->
        <div v-else class="columns is-multiline">
          <div v-for="item in filteredDishList" class="column is-full" :key="`item-${item}`">
            <DishCard :dish="item" @delete-dish="deleteDish" @edit-dish="editDishForm" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
