<template>
  <div v-if="currentMedia.id">
    <ma-media-banner />

    <div class="d-flex flex-wrap">
      <div class="col-12 col-lg-10">
        <ma-title
          class="mb-3 mt-4 ml-2"
          title="Cast"
          icon="star"
          iconColor="warning"
        />
        <ma-people-scroller :people="currentMedia.credits.cast" />

        <ma-title
          class="mb-3 mt-4 ml-2"
          title="Crew"
          icon="briefcase"
          iconColor="info"
        />
        <ma-people-scroller :people="currentMedia.credits.crew" />

        <router-link
          class="btn btn-info bg-gradient my-3 float-right"
          :to="{ name: 'PeopleFromMedia' }"
        >
          See All Cast & Crew
        </router-link>
      </div>

      <ma-media-other-info class="col-12 col-lg-2 mx-auto" />
    </div>

    <div class="py-4 bg-gradient">
      <div class="d-flex flex-wrap mb-4">
        <ma-title
          class="mx-auto mx-md-3"
          title="Content"
          icon="star"
          iconColor="warning"
        />

        <div class="mx-auto mx-md-0">
          <a
            class="btn contentOption"
            :class="{ currentContent: currentContent === 'videos' }"
            @click="currentContent = 'videos'"
          >
            Videos
            <span class="badge badge-light">{{ quantityOfVideos() }}</span>
          </a>
          <a
            class="btn contentOption"
            :class="{ currentContent: currentContent === 'backdrops' }"
            @click="currentContent = 'backdrops'"
          >
            Backdrops
            <span class="badge badge-light">{{ quantityOfBackdrops() }}</span>
          </a>
          <a
            class="btn contentOption"
            :class="{ currentContent: currentContent === 'posters' }"
            @click="currentContent = 'posters'"
          >
            Posters
            <span class="badge badge-light">{{ quantityOfPosters() }}</span>
          </a>
        </div>
      </div>

      <ma-content-scroller class="shadow" :contentType="currentContent" />
    </div>

    <div class="py-5 ml-3 bg-light">
      <div class="d-flex">
        <ma-title
          class="h3 ml-3"
          title="Reviews"
          icon="fire"
          iconColor="danger"
        />
        <span class="badge badge-pill badge-light">
          {{ currentMedia.reviews.total_results }}
        </span>
      </div>
      <ma-reviews-scroller v-if="currentMedia.reviews.total_results > 0" />
    </div>

    <div class="px-3 pt-4 pb-5">
      <ma-title
        class="mb-3 mt-4 ml-2"
        title="Similiar"
        icon="clone"
        iconColor="dark"
      />
      <ma-scroller :media="currentMedia.similar.results" />
    </div>
    <ma-footer />
    <ma-trailer-frame />
    <ma-image-modal />
  </div>
</template>

<script>
import MaMediaBanner from '../components/MaMediaBanner.vue'
import MaTitle from '../components/MaTitle.vue'
import MaPeopleScroller from '../components/MaPeopleScroller.vue'
import MaMediaOtherInfo from '../components/MaMediaOtherInfo.vue'
import MaContentScroller from '../components/MaContentScroller.vue'
import MaReviewsScroller from '../components/MaReviewsScroller.vue'
import MaScroller from '../components/MaScroller.vue'
import MaFooter from '../components/MaFooter.vue'
import MaTrailerFrame from '../components/MaTrailerFrame.vue'
import MaImageModal from '../components/MaImageModal.vue'

export default {
  components: {
    MaMediaBanner,
    MaTitle,
    MaPeopleScroller,
    MaMediaOtherInfo,
    MaContentScroller,
    MaReviewsScroller,
    MaScroller,
    MaFooter,
    MaTrailerFrame,
    MaImageModal,
  },

  data: () => ({
    currentContent: 'videos',
  }),

  computed: {
    currentMedia() {
      return this.$store.state.currentMedia
    },
  },

  methods: {
    quantityOfVideos() {
      return this.$store.state.currentMedia.videos.results.length
    },

    quantityOfBackdrops() {
      return this.$store.state.currentMedia.images.backdrops.length
    },

    quantityOfPosters() {
      return this.$store.state.currentMedia.images.posters.length
    },
  },

  created() {
    this.$store.dispatch('showMedia', this.$route.params)
  },
}
</script>

<style lang="scss" scoped>
.contentOption {
  &:hover {
    box-shadow: 3px 3px 3px #008080;
    color: #fff;
    transition: 0.3s;
  }

  &.currentContent {
    border: #d3d3d3 1px solid;
    box-shadow: 3px 3px 3px #008080;
    color: #fff;
    transition: 0.3s;
  }
}
</style>
