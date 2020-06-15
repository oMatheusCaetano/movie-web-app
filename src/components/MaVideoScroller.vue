<template>
  <div>
    <div class="scroller overflow-auto bg-dark d-flex align-items-center">
      <ma-trailer-card v-for="movie in media" :key="movie.id" :media="movie" />
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

<style lang="scss" scoped>
.scroller {
  height: 400px;
  width: 100%;
}
</style>
