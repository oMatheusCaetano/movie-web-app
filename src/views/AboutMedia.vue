<template>
  <div v-if="this.$store.state.currentMedia.id">
    <ma-media-banner />
  </div>
</template>

<script>
import MaMediaBanner from '../components/MaMediaBanner.vue'

export default {
  components: {
    MaMediaBanner,
  },

  created() {
    console.log(this.$route.params)
    this.$store.dispatch('showMedia', this.$route.params)
  },
}
</script>

<style>

</style>
