<template>
  <div>
    <ma-navbar />
    <div class="px-3">
      <ma-category-switcher
        class="m-4"
        style="width: 350px"
        :data="switcherData"
      />
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
    window.EventBus.$on('Movies', () => { this.$store.dispatch('popularMedia', 'movies') })
    window.EventBus.$on('On TV', () => { this.$store.dispatch('popularMedia', 'tv') })
  },
}
</script>

<style lang="scss" scoped>
</style>
