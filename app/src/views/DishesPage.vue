<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Dish } from '@/types'
import NewDishForm from '../components/NewDishForm.vue'
import DishCard from '../components/DishCard.vue'
import SideMenu from '../components/SideMenu.vue'
import { useRoute } from 'vue-router'
import { useDishesStore } from '@/stores/DishStore'
const filterText = ref('')
const dishList = useDishesStore()
const showNewForm = ref(false)
const filteredDishList = computed((): Dish[] => {
  return dishList.list.filter((dish: Dish) => {
    if (dish.name) {
      return dish.name.toLowerCase().includes(filterText.value.toLowerCase())
    } else {
      return dishList
    }
  })
})
const addDish = (payload: Dish) => {
  dishList.addDish(payload)
  hideForm()
}
const deleteDish = (payload: Dish) => {
  dishList.deleteDish(payload)
}
const hideForm = () => {
  showNewForm.value = false
}
onMounted(() => {
  const route = useRoute()
  if (route.query.new) {
    showNewForm.value = true
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
                <strong>{{ dishList.numberOfDishes }}</strong> dishes
              </p>
            </div>

            <p class="level-item">
              <button @click="showNewForm = true" class="button is-success">New</button>
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
        <NewDishForm v-if="showNewForm" @add-new-dish="addDish" @cancel-new-dish="hideForm" />

        <!-- Display Results -->
        <div v-else class="columns is-multiline">
          <div v-for="item in filteredDishList" class="column is-full" :key="`item-${item}`">
            <DishCard :dish="item" @delete-dish="deleteDish" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
