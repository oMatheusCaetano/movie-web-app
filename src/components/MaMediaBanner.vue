<template>
  <div class="banner position-relative" id="banner">
    <div
      class="banner_content position-relative d-flex flex-wrap justify-content-center py-4"
    >
      <div class="">
        <img
          class="banner_posterImage"
          :src="`https://image.tmdb.org/t/p/w500/${media.poster_path}`"
          alt="media-poster-image"
        />
      </div>
      <div class="text-primary">
        <h1>Informações sobre aquele filme ou série</h1>
        <h1>Informações sobre aquele filme ou série</h1>
        <h1>Informações sobre aquele filme ou série</h1>
        <h1>Informações sobre aquele filme ou série</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    media() {
      return this.$store.state.currentMedia
    },
  },

  mounted() {
    document.getElementById(
      'banner',
    ).style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${this.media.backdrop_path}')`
  },
}
</script>

<style lang="scss" scoped>
.banner {
  max-height: auto;
  background-position: center;

  &::after {
    content: '';
    background: #00000099;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  &_content {
    z-index: 1;
  }

  &_posterImage {
    height: 500px;
  }
}
</style>
