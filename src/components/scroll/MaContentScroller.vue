<template>
  <div>
    <div class="d-flex overflow-auto" v-if="this.contentType === 'backdrops'">
      <ma-image
        v-for="(image, index) in this.currentMedia.images.backdrops"
        :key="index"
        :image="image"
        :size="400"
      />
    </div>

    <div class="d-flex overflow-auto" v-else-if="this.contentType === 'posters'">
      <ma-image
        v-for="(image, index) in this.currentMedia.images.posters"
        :key="index"
        :image="image"
        :size="200"
      />
    </div>

    <div class="d-flex overflow-auto" v-else>
      <ma-trailer-card
        v-for="(video, index) in this.currentMedia.videos.results"
        :key="index"
        :media="video"
        :fromVideo="true"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MaTrailerCard from '../card/MaTrailerCard.vue'
import MaImage from '../image/MaImage.vue'

export default {
  components: {
    MaTrailerCard,
    MaImage,
  },

  props: ['contentType'],

  computed: {
    ...mapGetters({
      currentMedia: 'media/current',
    }),
  },
}
</script>
