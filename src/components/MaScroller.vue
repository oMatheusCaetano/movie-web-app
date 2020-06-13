<template>
  <div class="overflow-auto d-flex">
    <ma-media-card class="mx-1" v-for="movie in popularMovies" :key="movie.id" :media="movie" />
  </div>
</template>

<script>
import MaMediaCard from './MaMediaCard.vue'

export default {
  components: {
    MaMediaCard,
  },

  computed: {
    popularMovies() {
      return this.$store.state.popularMovies
    },
  },

  created() {
    this.$store.dispatch('popularMovies')
  },
}
</script>
