<template>
  <div class="d-flex">
    <div class="col-3">
      <div
        class="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          class="nav-link d-flex justify-content-between"
          data-toggle="pill"
          role="tab"
          aria-selected="true"
          :id="`${option.id}-pill`"
          :href="`#${option.id}-result`"
          :aria-controls="`${option.id}-result`"
          :class="{ active: index === 0 }"
          :key="index"
          v-for="(option, index) in options"
        >
          {{ option.title }}
          <span class="badge badge-light" v-if="option.id === 'movies'">{{
            movies.length
          }}</span>
          <span class="badge badge-light" v-else-if="option.id === 'tv'">{{
            tv.length
          }}</span>
          <span class="badge badge-light" v-else>{{ people.length }}</span>
        </a>
      </div>
    </div>
    <div class="col-9">
      <div class="tab-content" id="v-pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="movies-result"
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
          id="people-result"
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

  data: () => ({
    options: [
      { title: 'Movies', id: 'movies' },
      { title: 'TV Shows', id: 'tv' },
      { title: 'People', id: 'people' },
    ],
  }),

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
