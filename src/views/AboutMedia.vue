<template>
  <div v-if="this.$store.state.currentMedia.id" class="pb-5">
    <ma-media-banner />
    <ma-people-scroller :people="people.cast" />
    <ma-people-scroller :people="people.crew" />
    <ma-trailer-frame class="iframe" />
  </div>
</template>

<script>
import MaMediaBanner from '../components/MaMediaBanner.vue'
import MaTrailerFrame from '../components/MaTrailerFrame.vue'
import MaPeopleScroller from '../components/MaPeopleScroller.vue'

export default {
  components: {
    MaMediaBanner,
    MaTrailerFrame,
    MaPeopleScroller,
  },

  computed: {
    people() {
      return this.$store.state.currentMedia.credits
    },
  },

  created() {
    this.$store.dispatch('showMedia', this.$route.params)
  },
}
</script>

<style>

</style>
