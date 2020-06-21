<template>
  <div>
    <h2 class="font-weight-bold mb-4">{{ currentPerson.name }}</h2>
    <h4>Biography</h4>
    <p>{{ currentPerson.biography }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    currentPerson() {
      return this.$store.state.currentPerson
    },
  },
}
</script>
