<template>
  <div
    class="searchResults position-absolute bg-light w-100 bg-gradient shadow"
    v-if="this.searchValue.length > 2"
  >
    <div v-if="this.instantSearchResult.length > 0">
      <ma-instant-search-item
        v-for="(item, index) in this.instantSearchResult"
        :key="index"
        :item="item"
      />
    </div>
    <div class="text-truncate px-2 py-3">No results for '{{ this.searchValue }}'</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MaInstantSearchItem from '../item/InstantSearchItem.vue'

export default {
  components: {
    MaInstantSearchItem,
  },

  props: ['searchValue'],

  computed: {
    ...mapGetters({
      instantSearchResult: 'instantSearchResult',
    }),
  },
}
</script>

<style scoped>
.searchResults {
  z-index: 1111;
}
</style>
