<template>
  <div class="position-relative">
    <div class="mediaRating position-absolute p-1 rounded-pill shadow-sm bg-dark">
      <div class="p-1 rounded-pill bg-light">{{ media.vote_average }}</div>
    </div>
    <router-link
      class="text-decoration-none font-weight-bold text-dark"
      to="#"
    >
      <img
        class="mb-3 rounded shadow-sm"
        :src="`https://image.tmdb.org/t/p/w300/${this.media.poster_path}`"
        alt="picture" />
      <span>{{ media.title }}</span>
    </router-link>
    <p class="text-secondary">{{ media.release_date }}</p>
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
}
</script>

<style scoped>
img {
  height: 300px;
}

.mediaRating {
  bottom: 70px;
  left: 5px;
}
</style>
