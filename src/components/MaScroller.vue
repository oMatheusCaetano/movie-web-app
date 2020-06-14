<template>
  <div class="overflow-auto d-flex">
    <ma-media-card
      class="mx-1"
      v-for="movie in media"
      :key="movie.id"
      :media="movie"
    />
  </div>
</template>

<script>
import MaMediaCard from './MaMediaCard.vue'

export default {
  props: {
    media: {
      type: Array,
      required: true,
    },
  },
  components: {
    MaMediaCard,
  },
}
</script>
