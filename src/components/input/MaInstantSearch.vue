<template>
  <div class="position-relative col-lg-5 col-xl-4">
    <form class="form-inline my-2 my-lg-0 col-12">
      <input
        class="form-control mr-sm-2 col-12"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="value"
        @keydown="search()"
      />
    </form>
    <ma-instant-search-list :searchValue="this.value" />
  </div>
</template>

<script>
import MaInstantSearchList from '../list/MaInstantSearchList.vue'

export default {
  components: {
    MaInstantSearchList,
  },

  data: () => ({
    value: '',
  }),

  methods: {
    search() {
      if (this.validateSearchValue()) {
        this.$store.dispatch('search', this.value)
      }
    },

    validateSearchValue() {
      if (this.value.length < 2) return false
      return true
    },

    clearValue() {
      this.value = ''
    },
  },
}
</script>
