<template>
  <div>
    <img
      class="image mb-3 rounded shadow mx-1 img-fluid"
      alt="content-image"
      data-toggle="modal"
      data-target="#imageModal"
      :src="
        this.image.file_path
          ? `https://image.tmdb.org/t/p/w${size}/${this.image.file_path}`
          : 'https://via.placeholder.com/300x400'
      "
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
  transition: 0.3s;

  &:hover {
    filter: brightness(50%);
  }
}
</style>
