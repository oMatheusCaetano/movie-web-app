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
      <div class="text-white col-12 col-lg-8 col-xl-7">
        <div class="">
          <h2>
            <span class="font-weight-bold mr-2">{{ titleOrName() }}</span>
            <span class="text-secondary">({{ date() | formatYear }})</span>
          </h2>
          <h4>Overview</h4>
          <p>{{ media.overview }}</p>
          <div class="d-flex flex-wrap">
            <div class="col-4" v-for="(person, index) in media.credits.crew" :key="person.id">
              <span v-if="index <= 2">
                <h5 class="personName mt-3">{{ person.name }}</h5>
                <span class="personJob">{{ person.job }}</span>
              </span>
            </div>
          </div>
        </div>
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
    background: #000000aa;
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

  .personName {
    font-size: 18px;
    line-height: 2px;

  }

  .personJob {
    font-size: 15px;
  }
}
</style>
