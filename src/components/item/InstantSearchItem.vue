<template>
  <div>
    <div v-if="itemType() !== 'person'">
      <router-link
        class="item d-flex align-items-center pl-1 pr-2 py-2 text-decoration-none
          text-dark border-bottom w-100 h-100"
        :to="{
          name: 'AboutMedia',
          params: { media_type: itemType(), media_id: this.item.id },
        }"
      >
        <div class="item_imageBox mr-3">
          <ma-image :image="{ file_path: profileOrPoster() }" :size="92" />
        </div>
        {{ titleOrName() }}
      </router-link>
    </div>

    <div v-else>
      <router-link
        class="item d-flex align-items-center pl-1 pr-2 py-2 text-decoration-none
          text-dark border-bottom w-100 h-100"
        :to="{ name: 'AboutPerson', params: { person_id: this.item.id } }"
      >
        <div class="item_imageBox mr-3">
          <ma-image :image="{ file_path: profileOrPoster() }" :size="92" />
        </div>
        {{ titleOrName() }}
      </router-link>
    </div>
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
    itemType() {
      if (this.item.title) return 'movies'
      return this.item.poster_path ? 'tv' : 'person'
    },

    titleOrName() {
      return this.item.title ? this.item.title : this.item.name
    },

    profileOrPoster() {
      return this.item.poster_path
        ? this.item.poster_path
        : this.item.profile_path
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
    height: 60px;
    width: 40px;
  }
}
</style>
