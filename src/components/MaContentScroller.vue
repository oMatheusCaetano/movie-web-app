<template>
  <div>
    <!-- <div class="d-flex overflow-auto">
      <img
        class="thumbnail mb-3 rounded shadow mx-1"
        alt="content-video"
        v-for="(video, index) in currentMedia.videos.results"
        :key="index"
        :src="`https://img.youtube.com/vi/${video.key}/sddefault.jpg`"
      />
    </div> -->

    <div class="d-flex overflow-auto">
      <ma-trailer-card
        v-for="(video, index) in currentMedia.videos.results"
        :key="index"
        :media="video"
        :fromVideo="true"
      />
    </div>

    <div class="d-flex overflow-auto" v-if="false">
      <img
        class="mb-3 rounded shadow mx-1"
        alt="content-image"
        v-for="(image, index) in currentMedia.images.backdrops"
        :key="index"
        :src="`https://image.tmdb.org/t/p/w400/${image.file_path}`"
      />
    </div>

    <div class="d-flex overflow-auto" v-if="false">
      <img
        class="mb-3 rounded shadow mx-1"
        alt="content-image"
        v-for="(image, index) in currentMedia.images.posters"
        :key="index"
        :src="`https://image.tmdb.org/t/p/w200/${image.file_path}`"
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

  computed: {
    currentMedia() {
      return this.$store.state.currentMedia
    },
  },
}
</script>

<style scoped>
.thumbnail {
  width: 400px;
}
</style>
