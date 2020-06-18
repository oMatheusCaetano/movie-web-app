<template>
  <div class="pt-3 bg-gradient">
    <h2 class="h3 text-white ml-5">Today</h2>
      <div class="scroller_items d-flex align-items-center">
        <ma-trailer-card
          v-for="movie in media"
          :key="movie.id"
          :media="movie"
        />
      </div>
  </div>
</template>

<script>
import MaTrailerCard from './MaTrailerCard.vue'

export default {
  components: {
    MaTrailerCard,
  },

  props: {
    media: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.scroller_items {
  height: 350px;
  width: 100%;
}
</style>
