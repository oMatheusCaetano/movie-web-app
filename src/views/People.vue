<template>
  <div class="container">
    <ma-title
      class="pl-3 pt-4 pb-3 text-center text-md-left"
      title="Who's Popular"
      icon="heart"
      iconColor="danger"
    />
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
import MaTitle from '../components/text/MaTitle.vue'
import MaPersonCard from '../components/card/MaPersonCard.vue'
import MaPagination from '../components/pagination/MaPagination.vue'

export default {
  components: {
    MaTitle,
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
