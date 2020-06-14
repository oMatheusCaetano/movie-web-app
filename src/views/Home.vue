<template>
  <div>
    <ma-navbar />
    <div class="px-3">
      <div class="d-flex flex-wrap">
        <h2 class="col-12 col-md-4 col-lg-2 h3">What's Popular</h2>
        <ma-category-switcher
          class="col-12 col-md-8 col-lg-10"
          width="20"
          :data="switcherData"
        />
      </div>
      <ma-scroller class="" />
    </div>
  </div>
</template>

<script>
import MaNavbar from '../components/MaNavbar.vue'
import MaCategorySwitcher from '../components/MaCategorySwitcher.vue'
import MaScroller from '../components/MaScroller.vue'

export default {
  components: {
    MaNavbar,
    MaCategorySwitcher,
    MaScroller,
  },

  data: () => ({
    switcherData: [
      { name: 'Movies', type: 'movies' },
      { name: 'On TV', type: 'tv' },
    ],
  }),

  created() {
    window.EventBus.$on('Movies', () => {
      this.$store.dispatch('popularMedia', 'movies')
    })
    window.EventBus.$on('On TV', () => {
      this.$store.dispatch('popularMedia', 'tv')
    })
  },
}
</script>

<style lang="scss" scoped></style>
