<template>
  <div class="tt">
    <smooth-scrollbar>
      <div class="overflow-auto d-flex">
        <ma-person-card
          class="mx-1"
          v-for="(person, index) in people"
          :key="index"
          :person="person"
        />
      </div>
    </smooth-scrollbar>
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

<style scoped>
.tt {
  height: 500px;
}
</style>
