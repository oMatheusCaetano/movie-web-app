<template>
  <div>
    <ma-carousel />

    <div class="px-3 pt-4 bg-light">
      <div class="d-flex flex-wrap py-3 bg-light">
        <ma-title
          class="mx-auto ml-md-2 mr-md-0 text-lg-left"
          title="What's Popular"
          icon="heart"
          iconColor="danger"
        />
        <ma-category-switcher
          class="mx-auto ml-md-4 text-lg-left"
          width="20"
          preSelected="Movies"
          :data="[{ name: 'Movies' }, { name: 'On TV' }]"
        />
      </div>
      <ma-scroller :media="popularMedia" />
    </div>

    <ma-video-scroller class="py-5 rounded mx-1" :media="upcomingMedia" />

    <div class="px-3 pt-4 bg-light">
      <div class="d-flex flex-wrap py-3 bg-light">
        <ma-title
          class="mx-auto ml-md-2 mr-md-0 text-lg-left"
          title="Trending Movies"
          icon="star"
          iconColor="warning"
        />
        <ma-category-switcher
          class="mx-auto ml-md-4 text-lg-left"
          width="20"
          preSelected="Movies Today"
          :data="[{ name: 'Movies Today' }, { name: 'Movies This Week' }]"
        />
      </div>
      <ma-scroller :media="trendingMovies" />
    </div>

    <div class="px-3 pt-4 bg-light">
      <div class="d-flex flex-wrap py-3 bg-light">
        <ma-title
          class="mx-auto ml-md-2 mr-md-0 text-lg-left"
          title="Trending On TV"
          icon="star"
          iconColor="warning"
        />
        <ma-category-switcher
          class="mx-auto ml-md-4 text-lg-left"
          width="20"
          preSelected="TV Today"
          :data="[{ name: 'TV Today' }, { name: 'TV This Week' }]"
        />
      </div>
      <ma-scroller :media="trendingTvShows" />
    </div>

    <ma-footer class="mt-5" />
    <ma-trailer-frame />
  </div>
</template>

<script>
import MaCarousel from '../components/MaCarousel.vue'
import MaTitle from '../components/MaTitle.vue'
import MaCategorySwitcher from '../components/MaCategorySwitcher.vue'
import MaScroller from '../components/MaScroller.vue'
import MaVideoScroller from '../components/MaVideoScroller.vue'
import MaFooter from '../components/MaFooter.vue'
import MaTrailerFrame from '../components/MaTrailerFrame.vue'

export default {
  components: {
    MaCarousel,
    MaTitle,
    MaTrailerFrame,
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
    this.$store.dispatch('popularMedia', 'movies')
    this.$store.dispatch('upcomingMedia')
    this.$store.dispatch('trendingMovies', 'day')
    this.$store.dispatch('trendingTv', 'day')
  },
}
</script>
