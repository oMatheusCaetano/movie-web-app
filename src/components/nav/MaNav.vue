<template>
  <div class="row">
    <div class="col-3">
      <div
        class="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          class="nav-link active d-flex justify-content-between"
          id="movies-pill"
          data-toggle="pill"
          href="#movies-reult"
          role="tab"
          aria-controls="movies-reult"
          aria-selected="true"
        >
          Movies<span class="badge badge-light">{{ this.movies.length }}</span>
        </a>
        <a
          class="nav-link d-flex justify-content-between"
          id="tv-pill"
          data-toggle="pill"
          href="#tv-result"
          role="tab"
          aria-controls="tv-result"
          aria-selected="false"
        >
          TV Shows<span class="badge badge-light">{{ this.tv.length }}</span>
        </a>
        <a
          class="nav-link d-flex justify-content-between"
          id="people-pill"
          data-toggle="pill"
          href="#people-reult"
          role="tab"
          aria-controls="people-reult"
          aria-selected="false"
        >
          People<span class="badge badge-light">{{ this.people.length }}</span>
        </a>
      </div>
    </div>
    <div class="col-9 pr-md-4">
      <div class="tab-content" id="v-pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="movies-reult"
          role="tabpanel"
          aria-labelledby="movies-pill"
        >
          <ma-nav-card
            v-for="(movie, index) in this.movies"
            :key="index"
            class="mb-3"
            :item="movie"
          />
        </div>
        <div
          class="tab-pane fade"
          id="tv-result"
          role="tabpanel"
          aria-labelledby="tv-pill"
        >
          <ma-nav-card
            v-for="(tvShow, index) in this.tv"
            :key="index"
            class="mb-3"
            :item="tvShow"
          />
        </div>
        <div
          class="tab-pane fade d-flex flex-wrap text-center"
          id="people-reult"
          role="tabpanel"
          aria-labelledby="people-pill"
        >
          <ma-person-card
            class="mb-3 mx-1 col-md-5 col-lg-3 col-xl-2"
            v-for="(person, index) in this.people"
            :key="index"
            :person="person"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MaNavCard from '../card/MaNavCard.vue'
import MaPersonCard from '../card/MaPersonCard.vue'

export default {
  components: {
    MaNavCard,
    MaPersonCard,
  },

  computed: {
    ...mapGetters({
      movies: 'media/searchMoviesResult',
      tv: 'media/searchTvResult',
      people: 'people/searchResult',
    }),
  },

  created() {
    this.$store.dispatch('media/searchMovies')
    this.$store.dispatch('media/searchTv')
    this.$store.dispatch('people/search')
  },
}
</script>
