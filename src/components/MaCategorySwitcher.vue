<template>
  <toggle-switch :options="options" @change="loadMedia"  />
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      requid: true,
    },
  },

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
        padding: 0,
        width: 30,
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
  },
}
</script>
