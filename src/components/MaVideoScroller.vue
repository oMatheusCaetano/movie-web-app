<template>
  <div>
    <div class="scroller overflow-auto bg-dark d-flex align-items-center">
      <ma-trailer-card v-for="item in array" :key="item" />
    </div>
  </div>
</template>

<script>
import MaTrailerCard from './MaTrailerCard.vue'

export default {
  components: {
    MaTrailerCard,
  },

  data: () => ({
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  }),
}
</script>

<style lang="scss" scoped>
.scroller {
  height: 400px;
  width: 100%;
}
</style>
