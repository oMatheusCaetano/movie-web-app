<template>
  <toggle-switch :options="options" @change="loadMedia" />
</template>

<script>
export default {
  props: ['data', 'width', 'preSelected'],

  data: () => ({
    options: {
      layout: {
        color: 'black',
        backgroundColor: 'white',
        selectedColor: 'white',
        selectedBackgroundColor: 'gray',
        fontWeightSelected: 'bold',
        noBorder: false,
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
      switch (value) {
        case 'On TV':
          this.$store.dispatch('popularMedia', 'tv')
          break
        case 'Movies Today':
          this.$store.dispatch('trendingMovies', 'day')
          break
        case 'Movies This Week':
          this.$store.dispatch('trendingMovies', 'week')
          break
        case 'TV Today':
          this.$store.dispatch('trendingTv', 'day')
          break
        case 'TV This Week':
          this.$store.dispatch('trendingTv', 'week')
          break
        default:
          this.$store.dispatch('popularMedia', 'movies')
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
