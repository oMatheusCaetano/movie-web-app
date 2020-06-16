<template>
  <div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('showMedia', this.$route.params)
  },
}
</script>

<style></style>
