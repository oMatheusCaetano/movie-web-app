<template>
  <form class="input-group mb-3" @submit.prevent="makeRequest()">
    <input
      type="search"
      class="form-control"
      placeholder="Search here..."
      v-model="searchValue"
    />
    <div class="input-group-append">
      <button class="btn btn-info bg-gradient" type="submit">
        Search
      </button>
    </div>
  </form>
</template>

<script>
export default {
  computed: {
    searchValue: {
      get() {
        return this.$store.state.searchValue
      },

      set(value) {
        this.$store.commit('setSearchValue', value)
      },
    },
  },

  methods: {
    makeRequest() {
      if (this.$route.name !== 'SearchResult') {
        this.$router.replace('SearchResult')
      } else {
        this.$store.dispatch('media/searchMovies')
        this.$store.dispatch('media/searchTv')
        this.$store.dispatch('people/search')
      }
    },
  },
}
</script>
