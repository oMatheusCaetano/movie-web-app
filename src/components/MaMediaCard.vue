<template>
  <div class="position-relative">
    <div class="mediaRating position-absolute p-1 rounded-circle shadow-sm bg-dark">
      <div class="p-1 rounded-circle bg-light">{{ media.vote_average | formatRate }}</div>
    </div>
    <router-link
      class=" text-decoration-none font-weight-bold text-dark"
      to="#"
    >
      <img
        class="mediaImage mb-3 rounded shadow-sm"
        :src="`https://image.tmdb.org/t/p/w200/${this.media.poster_path}`"
        alt="picture" />
      <span>{{ media.title }}</span>
    </router-link>
    <p class="text-secondary">{{ media.release_date | formatDate }}</p>
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

<style lang="scss" scoped>
.mediaRating {
  z-index: 1;
  left: 5px;
  bottom: 140px;
}

.mediaImage {
  transition: .2s;

  &:hover {
    filter: brightness(50%);
  }
}
</style>
