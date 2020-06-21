<template>
  <div class="d-flex overflow-auto">
    <ma-media-card
      class="mx-1"
      v-for="movie in media"
      :key="movie.id"
      :media="movie"
    />
  </div>
</template>

<script>
import MaMediaCard from '../card/MaMediaCard.vue'

export default {
  components: {
    MaMediaCard,
  },

  props: {
    media: {
      type: Array,
      required: true,
    },
  },
}
</script>
