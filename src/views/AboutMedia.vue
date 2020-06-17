<template>
  <div v-if="this.$store.state.currentMedia.id">
    <ma-media-banner />
    <ma-trailer-frame class="iframe" />
  </div>
</template>

<script>
import MaMediaBanner from '../components/MaMediaBanner.vue'
import MaTrailerFrame from '../components/MaTrailerFrame.vue'

export default {
  components: {
    MaMediaBanner,
    MaTrailerFrame,
  },

  created() {
    this.$store.dispatch('showMedia', this.$route.params)
  },
}
</script>

<style>

</style>
