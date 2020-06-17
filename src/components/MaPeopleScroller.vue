<template>
  <smooth-scrollbar>
    <div class="d-flex">
      <ma-person-card
        class="mx-1"
        v-for="(person, index) in people"
        :key="index"
        :person="person"
      />
    </div>
  </smooth-scrollbar>
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
