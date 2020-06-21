<template>
  <div>
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
        class="rounded mx-2 shadow"
        alt="movie-image"
        v-if="!fromVideo"
        :src="`https://image.tmdb.org/t/p/w400/${this.media.backdrop_path}`"
        :class="{ zoom: zoom }"
      />
      <img
        class="imageBackground_image rounded mx-2 shadow"
        alt="movie-image"
        v-else
        :src="`https://img.youtube.com/vi/${this.media.key}/sddefault.jpg`"
        :class="{ zoom: zoom }"
      />
    </div>
    <div class="text-center text-white font-weight-bold mt-3">
      <span>{{ media.title ? media.title : media.name }}</span>
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

    fromVideo: {
      type: Boolean,
      required: false,
    },
  },

  data: () => ({
    zoom: false,
  }),

  methods: {
    getVideo() {
      return this.fromVideo
        ? this.$store.commit('setVideo', this.media)
        : this.$store.dispatch('video', this.media.id)
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

  &_image {
    width: 400px;
  }
}
</style>
