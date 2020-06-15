<template>
  <div>
    <ma-carousel />

    <div class="px-3 pt-4 bg-light">
      <div class="d-flex flex-wrap py-3 bg-light">
        <h2 class="col-12 col-md-4 col-lg-2 h3 text-default-dark">
          <font-awesome-icon class="text-danger" icon="heart" />
          What's Popular
        </h2>
        <ma-category-switcher
          class="col-12 col-md-8 col-lg-10"
          width="20"
          preSelected="Movies"
          :data="[{ name: 'Movies' }, { name: 'On TV' }]"
        />
      </div>
      <ma-scroller :media="popularMedia" />
    </div>

    <ma-video-scroller class="my-5 rounded mx-1" :media="upcomingMedia" />

    <div class="px-3 pt-4 bg-light">
      <div class="d-flex flex-wrap py-3 bg-light">
        <h2 class="col-12 col-md-4 col-lg-2 h3 text-default-dark">
          <font-awesome-icon class="text-info" icon="fire" />
          Trending Movies
        </h2>
        <ma-category-switcher
          class="col-12 col-md-8 col-lg-19"
          width="20"
          preSelected="Movies Today"
          :data="[{ name: 'Movies Today' }, { name: 'Movies This Week' }]"
        />
      </div>
      <ma-scroller :media="trendingMovies" />
    </div>

    <div class="px-3 pt-4 bg-light">
      <div class="d-flex flex-wrap py-3 bg-light">
        <h2 class="col-12 col-md-4 col-lg-2 h3 text-default-dark">
          <font-awesome-icon class="text-info" icon="fire" />
          Trending TV
        </h2>
        <ma-category-switcher
          class="col-12 col-md-8 col-lg-10"
          width="20"
          preSelected="TV Today"
          :data="[{ name: 'TV Today' }, { name: 'TV This Week' }]"
        />
      </div>
      <ma-scroller :media="trendingTvShows" />
    </div>

    <ma-footer class="mt-5"/>
  </div>
</template>

<script>
import MaCarousel from '../components/MaCarousel.vue'
import MaCategorySwitcher from '../components/MaCategorySwitcher.vue'
import MaScroller from '../components/MaScroller.vue'
import MaVideoScroller from '../components/MaVideoScroller.vue'
import MaFooter from '../components/MaFooter.vue'

export default {
  components: {
    MaCarousel,
    MaCategorySwitcher,
    MaScroller,
    MaVideoScroller,
    MaFooter,
  },

  computed: {
    popularMedia() {
      return this.$store.state.popularMedia
    },

    upcomingMedia() {
      return this.$store.state.upcomingMedia
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
    this.$store.dispatch('upcomingMedia')
    this.$store.dispatch('trendingMovies', 'day')
    this.$store.dispatch('trendingTv', 'day')
    this.$Progress.finish()
  },
}
</script>
