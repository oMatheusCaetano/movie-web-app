<template>
  <div class="position-relative" v-if="this.media.poster_path">
    <div
      class="mediaRating position-absolute p-1 rounded-circle shadow-sm bg-gradient"
    >
      <div class="p-1 rounded-circle bg-light">
        {{ media.vote_average | formatRate }}
      </div>
    </div>
    <router-link
      class=" text-decoration-none font-weight-bold text-dark"
      :to="{
        name: 'AboutMedia',
        params: { media_type: movieOrTvShow(), media_id: media.id },
      }"
    >
      <img
        class="mediaImage mb-3 rounded shadow"
        @click="updatePage()"
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
    updatePage() {
      if (this.$route.name === 'AboutMedia') {
        this.$store.dispatch('showMedia', {
          media_type: this.movieOrTvShow(),
          media_id: this.media.id,
        })
      }
      this.$store.commit('clearCurrentMedia')
    },

    movieOrTvShow() {
      return this.media.title ? 'movies' : 'tv'
    },

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
