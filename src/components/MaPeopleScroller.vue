<template>
  <div class="d-flex overflow-auto">
    <ma-person-card
      class="mx-1"
      v-for="(person, index) in people"
      :noUncredited="true"
      :key="index"
      :person="person"
    />
  </div>
</template>

<script>
import MaPersonCard from './MaPersonCard.vue'

export default {
  components: {
    MaPersonCard,
  },

  props: {
    people: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
