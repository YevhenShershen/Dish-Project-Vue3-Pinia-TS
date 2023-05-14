<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Dish } from '@/types'
import { useDishesStore } from '@/stores/DishStore'
const props = defineProps<{
  dishId?: string
}>()
const emit = defineEmits<{
  (e: 'cancel-edit-dish'): void
  (e: 'update-edit-dish'):void
}>()
const dishStore = useDishesStore()
const targetDish = props.dishId ? dishStore.getDishById(props.dishId) : ''
const newDish = ref<Dish>({
  id: uuidv4(),
  name: '',
  status: 'Want to Try',
  diet: '',
})
const updateDish = () => {
  targetDish.name = newDish.value.name
  emit('update-edit-dish')
}
const elNameInput = ref<HTMLInputElement | null>(null)
const cancelNewDish = () => {
  emit('cancel-edit-dish')
}
onMounted(() => {
  elNameInput.value?.focus()
})
</script>

<template>
  <form @submit.prevent>
    <div class="field">
      <div class="field">
        <label for="name" class="label">Edit Name{{ targetDish }}</label>
        <div class="control">
          <input
            v-model="newDish.name"
            @keyup.enter="updateDish"
            type="text"
            class="input is-large"
            :placeholder="targetDish.name"
            required
            ref="elNameInput"
          />
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button @click="updateDish" class="button is-success">Update</button>
          <button @click="cancelNewDish" class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>
