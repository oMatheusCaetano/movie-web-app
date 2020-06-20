<template>
  <div>
    <img
      class="image mb-3 rounded shadow mx-1"
      alt="content-image"
      :src="`https://image.tmdb.org/t/p/w${size}/${this.image.file_path}`"
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
