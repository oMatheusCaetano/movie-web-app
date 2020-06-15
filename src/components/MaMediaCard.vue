<template>
  <div class="position-relative">
    <div
      class="mediaRating position-absolute p-1 rounded-circle shadow-sm bg-gradient"
    >
      <div class="p-1 rounded-circle bg-light">
        {{ media.vote_average | formatRate }}
      </div>
    </div>
      <router-link
        class=" text-decoration-none font-weight-bold text-dark"
        to="#"
      >
        <img
          class="mediaImage mb-3 rounded shadow"
          alt="picture"
          :src="`https://image.tmdb.org/t/p/w200/${this.media.poster_path}`"
        />
        <span class="text-default-dark">{{ titleOrName() }}</span>
      </router-link>
    <p class="text-secondary">{{ date() | formatDate }}</p>
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

  methods: {
    titleOrName() {
      return this.media.title ? this.media.title : this.media.name
    },

    date() {
      return this.media.release_date
        ? this.media.release_date
        : this.media.first_air_date
    },
  },
}
</script>

<style lang="scss" scoped>
.mediaRating {
  z-index: 1;
  top: 3px;
  left: 3px;
}

.mediaImage {
  transition: 0.3s;

  &:hover {
    filter: brightness(50%);
  }
}

</style>
