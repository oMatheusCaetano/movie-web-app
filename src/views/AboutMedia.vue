<template>
  <div class="pb-5" v-if="currentMedia.id">
    <ma-media-banner />
    <div class="d-flex">
      <div>
        <ma-people-scroller class="col-12" :people="currentMedia.credits.cast" />
        <!-- <ma-people-scroller class="col-12" :people="currentMedia.credits.crew" /> -->
      </div>
      <div class="sideBox bg-gradient w-25">content</div>
    </div>
    <!-- <ma-review-scroller class="reviews mx-auto" /> -->
    <!-- <ma-trailer-frame class="iframe" /> -->
  </div>
</template>

<script>
import MaMediaBanner from '../components/MaMediaBanner.vue'
// import MaTrailerFrame from '../components/MaTrailerFrame.vue'
import MaPeopleScroller from '../components/MaPeopleScroller.vue'
// import MaReviewScroller from '../components/MaReviewsScroller.vue'

export default {
  components: {
    MaMediaBanner,
    // MaTrailerFrame,
    MaPeopleScroller,
    // MaReviewScroller,
  },

  computed: {
    currentMedia() {
      return this.$store.state.currentMedia
    },
  },

  created() {
    this.$store.dispatch('showMedia', this.$route.params)
  },
}
</script>

<style scoped>
.sideBox {
  width: 200px;
}

.reviews {
  height: 300px;
  width: 95vw;
}
</style>
