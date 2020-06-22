<template>
  <div @click="updatePage()">
    <router-link
      class="item d-flex align-items-center pl-1 pr-2 py-2 text-decoration-none
          text-dark border-bottom w-100 h-100"
      :to="{
        name: 'AboutMedia',
        params: { media_type: 'movies', media_id: this.item.id },
      }"
    >
      <div class="item_imageBox mr-3">
        <ma-image :image="{ file_path: this.item.poster_path }" :size="92" />
      </div>
      {{ this.item.title }}
    </router-link>
  </div>
</template>

<script>
import MaImage from '../image/MaImage.vue'

export default {
  components: {
    MaImage,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  methods: {
    updatePage() {
      if (this.$route.name === 'AboutMedia') {
        this.$store.dispatch('media/show', {
          media_type: 'movies',
          media_id: this.item.id,
        })
      }
      this.$store.commit('media/clearCurrent')
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  transition: 0.3s;

  &:hover {
    background-color: #d3d3d3;
    color: #000 !important;
  }

  &_imageBox {
    height: 70px;
    width: 50px;
  }
}
</style>
