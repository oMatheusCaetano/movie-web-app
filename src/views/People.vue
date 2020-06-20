<template>
  <div class="container">
    <h2 class="h3 pl-3 pt-4 pb-3 text-center text-md-left text-default-dark">
      <font-awesome-icon class="text-danger" icon="heart" />
      Who's Popular
    </h2>
    <div class="d-flex flex-wrap">
      <ma-person-card
        class="col-6 col-md-3 col-lg-2 text-center"
        v-for="(person, index) in popularPeople.results"
        :key="index"
        :person="person"
      />
    </div>
    <ma-pagination />
  </div>
</template>

<script>
import MaPersonCard from '../components/MaPersonCard.vue'
import MaPagination from '../components/MaPagination.vue'

export default {
  components: {
    MaPersonCard,
    MaPagination,
  },

  computed: {
    popularPeople() {
      return this.$store.state.popularPeople
    },
  },

  created() {
    this.$store.dispatch('popularPeople')
  },
}
</script>
