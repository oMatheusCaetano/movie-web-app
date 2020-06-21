<template>
  <div class="scroller overflow-auto">
    <ma-review-card
      v-for="review in this.currentMedia.reviews.results"
      :key="review.id"
      :review="review"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MaReviewCard from '../card/MaReviewCard.vue'

export default {
  components: {
    MaReviewCard,
  },

  computed: {
    ...mapGetters({
      currentMedia: 'media/current',
    }),
  },
}
</script>

<style scoped>
.scroller {
  height: 300px;
}
</style>
