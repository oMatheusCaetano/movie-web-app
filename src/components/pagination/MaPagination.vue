<template>
  <ul class="pagination justify-content-around">
    <li class="page-item" :class="{ disabled: nextPageIndex <= 2 }">
      <a class="page-link" href="#" @click="previousPage()">Previous</a>
    </li>
    <li class="page-item" :class="{ disabled: nextPageIndex > 500 }">
      <a class="page-link" href="#" @click="nextPage()">Next</a>
    </li>
  </ul>
</template>

<script>
export default {
  data: () => ({
    nextPageIndex: 2,
  }),

  methods: {
    previousPage() {
      this.$store.dispatch('people/popular', --this.nextPageIndex - 1)
    },

    nextPage() {
      this.$store.dispatch('people/popular', this.nextPageIndex++)
    },
  },
}
</script>
