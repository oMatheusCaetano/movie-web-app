<template>
  <div class="scroller overflow-auto">
    <ma-review-card
      v-for="review in reviews.results"
      :key="review.id"
      :review="review"
    />
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

<style scoped>
.scroller {
  height: 300px;
}
</style>
