<template>
  <div v-if="currentMedia.id">
    <ma-media-banner />
    <div class="d-flex flex-wrap">
      <div class="col-12 col-lg-10">
        <h2 class="mb-3 mt-4 ml-2">
          <font-awesome-icon class="text-warning" icon="star" />
          Cast
        </h2>
        <ma-people-scroller :people="currentMedia.credits.cast" />
        <h2 class="mb-3 mt-4 ml-2">
          <font-awesome-icon class="text-info" icon="briefcase" />
          Cast
        </h2>
        <ma-people-scroller :people="currentMedia.credits.crew" />
      </div>
      <ma-media-other-info class="col-12 col-lg-2 mx-auto" />
    </div>
    <div class="py-5 ml-3 bg-light">
      <span class="h3">
        <font-awesome-icon class="text-danger" icon="fire" />
        Reviews
      </span>
      <span class="badge badge-pill badge-light">
        {{ currentMedia.reviews.total_results }}
      </span>
      <ma-reviews-scroller v-if="currentMedia.reviews.total_results > 0" />
    </div>
    <ma-footer />
    <ma-trailer-frame class="iframe" />
  </div>
</template>

<script>
import MaMediaBanner from '../components/MaMediaBanner.vue'
import MaTrailerFrame from '../components/MaTrailerFrame.vue'
import MaPeopleScroller from '../components/MaPeopleScroller.vue'
import MaMediaOtherInfo from '../components/MaMediaOtherInfo.vue'
import MaReviewsScroller from '../components/MaReviewsScroller.vue'
import MaFooter from '../components/MaFooter.vue'

export default {
  components: {
    MaMediaBanner,
    MaTrailerFrame,
    MaPeopleScroller,
    MaMediaOtherInfo,
    MaReviewsScroller,
    MaFooter,
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
