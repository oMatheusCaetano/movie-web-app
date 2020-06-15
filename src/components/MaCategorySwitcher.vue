<template>
  <toggle-switch :options="options" @change="loadMedia" />
</template>

<script>
export default {
  props: ['data', 'width', 'preSelected'],

  data: () => ({
    options: {
      layout: {
        color: '#2c3e50',
        backgroundColor: 'whitesmoke',
        selectedColor: 'white',
        selectedBackgroundColor: '#06648f',
        fontWeightSelected: 'bold',
        noBorder: true,
      },
      size: {
        fontSize: 1,
        height: 2,
        width: 30,
        padding: 0,
      },
      items: {
        delay: 0.5,
        preSelected: 'Movies',
        disabled: false,
        labels: [],
      },
    },
  }),

  methods: {
    loadMedia({ value }) {
      this.$Progress.start()
      switch (value) {
        case 'On TV':
          this.$store.dispatch('popularMedia', 'tv')
          this.$Progress.finish()
          break
        case 'Movies Today':
          this.$store.dispatch('trendingMovies', 'day')
          this.$Progress.finish()
          break
        case 'Movies This Week':
          this.$store.dispatch('trendingMovies', 'week')
          this.$Progress.finish()
          break
        case 'TV Today':
          this.$store.dispatch('trendingTv', 'day')
          this.$Progress.finish()
          break
        case 'TV This Week':
          this.$store.dispatch('trendingTv', 'week')
          this.$Progress.finish()
          break
        default:
          this.$store.dispatch('popularMedia', 'movies')
          this.$Progress.finish()
      }
    },
  },

  created() {
    this.options.items.preSelected = this.preSelected
    this.options.items.labels = this.data
    this.options.size.width = this.width
  },
}
</script>
