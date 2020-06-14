<template>
  <toggle-switch :options="options" @change="loadMedia"  />
</template>

<script>
export default {
  props: ['data', 'width'],

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
      window.EventBus.$emit(value)
    },
  },

  created() {
    this.options.items.labels = this.data
    this.options.size.width = this.width
  },
}
</script>
