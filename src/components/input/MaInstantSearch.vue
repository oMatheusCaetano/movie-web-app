<template>
  <div class="position-relative col-lg-5 col-xl-4">
    <form class="form-inline my-2 my-lg-0 col-12">
      <input
        class="form-control mr-sm-2 col-12"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="searchValue"
        @focusout="loseFocus()"
        @keypress="search()"
        @keypress.delete="search()"
      />
    </form>
    <ma-instant-search-list />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MaInstantSearchList from '../list/MaInstantSearchList.vue'

export default {
  components: {
    MaInstantSearchList,
  },

  computed: {
    searchValue: {
      get() {
        return this.$store.state.instantSearchValue
      },

      set(value) {
        this.$store.commit('setInstantSearchValue', value)
      },
    },
  },

  methods: {
    ...mapActions(['search']),

    loseFocus() {
      setTimeout(() => {
        this.$store.commit('resetInstantSearchValue')
      }, 100)
    },
  },
}
</script>
