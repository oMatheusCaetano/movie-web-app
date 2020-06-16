<template>
  <transition name="fade">
    <div class="preloader" v-if="show">
      <p>Loading OO</p>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    show: true,
  }),

  mounted() {
    this.showToggle()
  },

  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false
      }, 1000)
    },
  },
}
</script>

<style>

</style>
