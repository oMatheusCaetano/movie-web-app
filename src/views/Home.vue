<template>
  <div>
    <ma-navbar />
    <div class="px-3">
      <div class="d-flex flex-wrap">
        <h2 class="col-12 col-md-4 col-lg-2 h3">What's Popular</h2>
        <ma-category-switcher
          class="col-12 col-md-8 col-lg-10"
          width="20"
          preSelected="Movies"
          :data="[{ name: 'Movies' }, { name: 'On TV' }]"
        />
      </div>
      <ma-scroller :media="popularMedia" />
    </div>

    <div class="px-3">
      <div class="d-flex flex-wrap">
        <h2 class="col-12 col-md-4 col-lg-3 h3">Trending Movies</h2>
        <ma-category-switcher
          class="col-12 col-md-8 col-lg-19"
          width="20"
          preSelected="Movies Today"
          :data="[{ name: 'Movies Today' }, { name: 'Movies This Week' }]"
        />
      </div>
      <ma-scroller :media="trendingMovies" />
    </div>

    <div class="px-3">
      <div class="d-flex flex-wrap">
        <h2 class="col-12 col-md-4 col-lg-2 h3">Trending TV</h2>
        <ma-category-switcher
          class="col-12 col-md-8 col-lg-10"
          width="20"
          preSelected="TV Today"
          :data="[{ name: 'TV Today' }, { name: 'TV This Week' }]"
        />
      </div>
      <ma-scroller :media="trendingTvShows" />
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

  computed: {
    popularMedia() {
      return this.$store.state.popularMedia
    },

    trendingMovies() {
      return this.$store.state.trendingMovies
    },

    trendingTvShows() {
      return this.$store.state.trendingTv
    },
  },

  created() {
    this.$Progress.start()
    this.$store.dispatch('popularMedia', 'movies')
    this.$store.dispatch('trendingMovies', 'day')
    this.$store.dispatch('trendingTv', 'day')
    this.$Progress.finish()
  },
}
</script>
