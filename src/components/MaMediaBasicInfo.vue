<template>
  <div class="text-white">
    <h2 class="px-2 text-center text-lg-left">
      <span class="font-weight-bold mr-2">{{ titleOrName() }}</span>
      <span class="text-secondary">({{ date() | formatYear }})</span>
    </h2>
    <p class="mediaGenres mb-5 mx-2 text-center text-lg-left">
      <span class="mr-1" v-for="(genre, index) in media.genres" :key="genre.id">
        {{
          index === media.genres.length - 1 ? genre.name : `${genre.name},`
        }}
      </span>|
      <span class="mr-1">{{ `${media.runtime}min` }}</span>|
      <span>{{ media.vote_average }}</span>
    </p>
    <h4 class="mx-2 text-center text-lg-left">Overview</h4>
    <p class="mx-2 text-center text-lg-left">{{ media.overview }}</p>
    <div class="d-flex flex-wrap">
      <div
        class="col-4"
        v-for="(person, index) in media.credits.crew"
        :key="person.title"
      >
        <span class="mx-2 text-center text-lg-left" v-if="index <= 2">
          <h5 class="personName mt-3">{{ person.name }}</h5>
          <p class="personJob">{{ person.job }}</p>
        </span>
      </div>
    </div>
    <button
      class="btn btn-dark-blue bg-gradient mt-5 mx-auto d-block d-lg-inline"
      data-toggle="modal"
      data-target="#trailerModal"
      @click="defineVideo()"
    >
      <font-awesome-icon icon="play" />
      Watch Trailer
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    media() {
      return this.$store.state.currentMedia
    },
  },

  methods: {
    defineVideo() {
      this.$store.commit('setVideos', this.media.videos.results)
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

<style scoped>
.personName {
  font-size: 18px;
}

.personJob {
  font-size: 15px;
}
</style>
