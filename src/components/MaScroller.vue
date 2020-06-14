<template>
  <div>
    <div class="overflow-auto d-flex">
      <ma-media-card
        class="mx-1"
        v-for="movie in media"
        :key="movie.id"
        :media="movie"
      />
    </div>
  </div>
</template>

<script>
import MaMediaCard from './MaMediaCard.vue'

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
