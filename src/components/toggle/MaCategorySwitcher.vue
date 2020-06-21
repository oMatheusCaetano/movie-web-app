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
        backgroundColor: '#ebe8e8',
        selectedColor: 'white',
        selectedBackgroundColor: '#003750',
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
      switch (value) {
        case 'On TV':
          this.$store.dispatch('media/popular', 'tv')
          break
        case 'Movies Today':
          this.$store.dispatch('media/trendingMovies', 'day')
          break
        case 'Movies This Week':
          this.$store.dispatch('media/trendingMovies', 'week')
          break
        case 'TV Today':
          this.$store.dispatch('media/trendingTv', 'day')
          break
        case 'TV This Week':
          this.$store.dispatch('media/trendingTv', 'week')
          break
        default:
          this.$store.dispatch('media/popular', 'movies')
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
