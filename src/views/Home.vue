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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MaCarousel from '../components/carousel/MaCarousel.vue'
import MaTitle from '../components/text/MaTitle.vue'
import MaCategorySwitcher from '../components/toggle/MaCategorySwitcher.vue'
import MaScroller from '../components/scroll/MaScroller.vue'
import MaVideoScroller from '../components/scroll/MaVideoScroller.vue'

export default {
  components: {
    MaCarousel,
    MaTitle,
    MaCategorySwitcher,
    MaScroller,
    MaVideoScroller,
  },

  computed: {
    ...mapGetters({
      popularMedia: 'media/popular',
      upcomingMedia: 'media/upcoming',
      trendingMovies: 'media/trendingMovies',
      trendingTvShows: 'media/trendingTvShows',
    }),
  },

  created() {
    this.$store.dispatch('media/popular', 'movies')
    this.$store.dispatch('media/upcoming')
    this.$store.dispatch('media/trendingMovies', 'day')
    this.$store.dispatch('media/trendingTv', 'day')
  },
}
</script>
