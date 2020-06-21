<template>
  <div class="position-relative">
    <form class="form-inline my-2 my-lg-0">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-info bg-gradient my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
    <div class="searchResults position-absolute bg-light w-100 bg-gradient">
      <router-link
        class="searchResults_link d-flex align-items-center pl-1 pr-2 py-2 text-decoration-none
          text-dark border-bottom"
        v-for="item in array"
        to="#"
        :key="item"
      >
        <div class="searchResults_imageBox mr-3">
          <ma-image
            class="searchImage"
            :image="{ file_path: media.poster_path }"
            :size="200"
          />
        </div>
        {{ media.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MaImage from '../image/MaImage.vue'

export default {
  components: {
    MaImage,
  },

  data: () => ({
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  }),

  computed: {
    ...mapGetters({
      media: 'media/current',
    }),
  },
}
</script>

<style lang="scss" scoped>
.searchResults {
  z-index: 1111;

  &_link {
    transition: .3s;

    &:hover {
      background-color: #d3d3d3;
      color: #000 !important;
    }
  }

  &_imageBox {
    height: 70px;
    width: 50px;
  }
}
</style>
