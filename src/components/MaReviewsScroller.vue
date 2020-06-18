<template>
  <div class="scroller">
    <smooth-scrollbar>
      <ma-review-card
        v-for="review in reviews.results"
        :key="review.id"
        :review="review"
      />
    </smooth-scrollbar>
  </div>
</template>

<script>
import MaReviewCard from './MaReviewCard.vue'

export default {
  components: {
    MaReviewCard,
  },

  computed: {
    reviews() {
      return this.$store.state.currentMedia.reviews
    },
  },
}
</script>
