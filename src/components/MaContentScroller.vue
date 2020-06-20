<template>
  <div>
    <div class="d-flex overflow-auto" v-if="contentType === 'backdrops'">
      <ma-image
        v-for="(image, index) in currentMedia.images.backdrops"
        :key="index"
        :image="image"
        :size="400"
      />
    </div>

    <div class="d-flex overflow-auto" v-else-if="contentType === 'posters'">
      <ma-image
        v-for="(image, index) in currentMedia.images.posters"
        :key="index"
        :image="image"
        :size="200"
      />
    </div>

    <div class="d-flex overflow-auto" v-else>
      <ma-trailer-card
        v-for="(video, index) in currentMedia.videos.results"
        :key="index"
        :media="video"
        :fromVideo="true"
      />
    </div>
  </div>
</template>

<script>
import MaTrailerCard from './MaTrailerCard.vue'
import MaImage from './MaImage.vue'

export default {
  components: {
    MaTrailerCard,
    MaImage,
  },

  props: ['contentType'],

  computed: {
    currentMedia() {
      return this.$store.state.currentMedia
    },
  },
}
</script>
