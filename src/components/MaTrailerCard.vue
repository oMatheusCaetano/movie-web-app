<template>
  <div>
    <div
      class="imageBackground position-relative"
      data-toggle="modal"
      data-target="#trailerModal"
      @mouseenter="zoom = true"
      @mouseleave="zoom = false"
    >
      <span
        class="imageBackground_icon position-absolute text-white"
        :class="{ zoom: zoom }"
      >
        <font-awesome-icon icon="play" />
      </span>
      <img
        class="imageBackground_image rounded mx-2 shadow"
        src="../assets/test/image3.jpg"
        alt="movie-image"
        :class="{ zoom: zoom }"
      />
    </div>
    <div class="text-center text-white font-weight-bold mt-3">
      <span>METALCORE MASH-UP</span>
    </div>
    <div class="text-center text-white">
      <span>[Architects, Animals As Leaders, Periphery, FEVER333]</span>
    </div>
    <ma-trailer-frame />
  </div>
</template>

<script>
import MaTrailerFrame from './MaTrailerFrame.vue'

export default {
  components: {
    MaTrailerFrame,
  },

  data: () => ({
    zoom: false,
  }),
}
</script>

<style lang="scss" scoped>
.imageBackground {
  cursor: pointer;

  &_image {
    width: 400px;
  }

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
