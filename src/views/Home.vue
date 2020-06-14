<template>
  <div>
    <ma-navbar />
    <div class="px-3">
      <div class="d-flex flex-wrap">
        <ma-title class="col-12 col-md-4 col-lg-2" text="What's Popular" />
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
import MaTitle from '../components/MaTitle.vue'
import MaCategorySwitcher from '../components/MaCategorySwitcher.vue'
import MaScroller from '../components/MaScroller.vue'

export default {
  components: {
    MaNavbar,
    MaTitle,
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
