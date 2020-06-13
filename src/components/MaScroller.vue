<template>
  <div class="overflow-auto d-flex">
    <ma-media-card class="mx-1" v-for="item in array" :key="item" />
  </div>
</template>

<script>
import MaMediaCard from './MaMediaCard.vue'

export default {
  components: {
    MaMediaCard,
  },

  data: () => ({
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }),
}
</script>

<style>

</style>
