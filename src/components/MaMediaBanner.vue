<template>
  <div class="banner position-relative" id="banner">
    <div
      class="banner_content position-relative d-flex align-items-center row py-4"
    >
      <div class="col-12 col-lg-3 col-xl-4 text-center">
        <img
          class="banner_posterImage"
          :src="`https://image.tmdb.org/t/p/w500/${media.poster_path}`"
          alt="media-poster-image"
        />
      </div>
      <ma-media-basic-info class="col-12 col-lg-8 col-xl-7 mt-4 mt-lg-0" />
    </div>
  </div>
</template>

<script>
import MaMediaBasicInfo from './MaMediaBasicInfo.vue'

export default {
  components: {
    MaMediaBasicInfo,
  },

  computed: {
    media() {
      return this.$store.state.currentMedia
    },
  },

  mounted() {
    if (this.media.backdrop_path) {
      document.getElementById(
        'banner',
      ).style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${this.media.backdrop_path}')`
    }
  },
}
</script>

<style lang="scss" scoped>
.banner {
  max-height: auto;
  background-position: center;

  &::after {
    content: '';
    background: #000000aa;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  &_content {
    z-index: 111;
  }

  &_posterImage {
    height: 500px;
  }
}
</style>
