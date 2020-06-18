<template>
  <div v-if="media.backdrop_path !== null">
    <div
      class="imageBackground position-relative"
      data-toggle="modal"
      data-target="#trailerModal"
      @mouseenter="zoom = true"
      @mouseleave="zoom = false"
      @click="getVideo()"
    >
      <span
        class="imageBackground_icon position-absolute text-white"
        :class="{ zoom: zoom }"
      >
        <font-awesome-icon icon="play" />
      </span>
      <img
        class="imageBackground_image rounded mx-2 shadow"
        :src="`https://image.tmdb.org/t/p/w400/${this.media.backdrop_path}`"
        alt="movie-image"
        :class="{ zoom: zoom }"
      />
    </div>
    <div class="text-center text-white font-weight-bold mt-3">
      <span>{{ media.title }}</span>
    </div>
    <div class="text-center text-white">
      <span class="text-secondary">{{ media.release_Date | formatDate }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    media: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    zoom: false,
  }),

  methods: {
    getVideo() {
      this.$store.dispatch('videos', this.media.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.iframe {
  z-index: 111111;
}

.imageBackground {
  cursor: pointer;

  &_icon {
    left: 47%;
    top: 43%;
    font-size: 40px;
    transition: 0.3s;

    &.zoom {
      left: 46%;
      top: 40%;
      font-size: 50px;
    }
  }
}
</style>
