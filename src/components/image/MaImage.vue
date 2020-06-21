<template>
  <div>
    <img
      class="image mb-3 rounded shadow mx-1"
      alt="content-image"
      data-toggle="modal"
      data-target="#imageModal"
      :src="`https://image.tmdb.org/t/p/w${size}/${this.image.file_path}`"
      @click="showImage()"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },

    size: {
      type: Number,
      required: true,
    },
  },

  methods: {
    showImage() {
      this.$store.commit('setImage', this.image)
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  cursor: pointer;
  transition: .3s;

  &:hover {
    filter: brightness(50%);
  }
}
</style>
