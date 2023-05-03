<script>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
  data: () => ({
    tagline: 'Eat in train!',
  }),
}
</script>

<template>
  <TheNavbar :tagline="tagline" :tagline2="911" />
  <RouterView />
  <TheFooter />
</template>

<style></style>
