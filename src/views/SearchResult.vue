<template>
  <div class="py-4">
    <ma-search-bar class="col-11 mx-auto" />
    <ma-nav class="mt-4" />
  </div>
</template>

<script>
import MaSearchBar from '../components/input/MaSearchBar.vue'
import MaNav from '../components/nav/MaNav.vue'

export default {
  components: {
    MaSearchBar,
    MaNav,
  },

  destroyed() {
    this.$store.commit('resetSearchValue')
  },
}
</script>
