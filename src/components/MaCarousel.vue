<template>
  <div class="carousel slide position-relative" data-ride="carousel">
    <div class="carousel-inner">
      <div class="searchBar position-absolute w-75">
        <h2 class="text-shadow text-white font-weight-bold h1">Welcome.</h2>
        <h3 class="text-shadow text-white">
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
        <ma-search-bar class="shadow" />
      </div>
      <div
        class="carousel-item"
        :class="{ active: index === 0 }"
        :key="index"
        v-for="(image, index) in images"
      >
        <div
          class="d-flex flex-wrap align-items-center bg-dark"
          v-if="image.backdrop_path"
        >
          <img
            class="img d-block mx-auto"
            :src="`https://image.tmdb.org/t/p/original/${image.backdrop_path}`"
            alt="media-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaSearchBar from './MaSearchBar.vue'

export default {
  components: {
    MaSearchBar,
  },

  computed: {
    images() {
      return this.$store.state.popularMedia
    },
  },
}
</script>

<style scoped>
img {
  height: 450px;
  width: 100%;
  object-fit: cover;
  object-position: top;
  filter: blur(3px);
  opacity: 0.8;
}

.searchBar {
  z-index: 1;
  top: 50%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

.text-shadow {
  text-shadow: 2px 2px 5px #1d1d1d;
}
</style>
