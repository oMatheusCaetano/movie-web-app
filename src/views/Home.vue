<template>
  <div>
    <ma-navbar />
    <div class="px-3">
      <ma-scroller class="" />
    </div>
  </div>
</template>

<script>
import MaNavbar from '../components/MaNavbar.vue'
import MaScroller from '../components/MaScroller.vue'

export default {
  components: {
    MaNavbar,
    MaScroller,
  },
}
</script>

<style lang="scss" scoped>
</style>
