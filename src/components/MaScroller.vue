<template>
  <div class="overflow-auto d-flex">
    <ma-media-card class="mx-1" v-for="movie in popularMedia" :key="movie.id" :media="movie" />
  </div>
</template>

<script>
import MaMediaCard from './MaMediaCard.vue'

export default {
  components: {
    MaMediaCard,
  },

  computed: {
    popularMedia() {
      return this.$store.state.popularMedia
    },
  },

  created() {
    this.$store.dispatch('popularMedia', 'movies')
  },
}
</script>
