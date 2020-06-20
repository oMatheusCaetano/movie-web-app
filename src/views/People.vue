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

    <nav>
      <ul class="pagination justify-content-around">
        <li class="page-item" :class="{ disabled: nextPageIndex <= 2 }" >
          <a class="page-link" href="#" @click="previousPage()">Previous</a>
        </li>
        <li class="page-item" :class="{ disabled: nextPageIndex > 500 }">
          <a class="page-link" href="#" @click="nextPage()">Next</a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
import MaPersonCard from '../components/MaPersonCard.vue'

export default {
  components: {
    MaPersonCard,
  },

  data: () => ({
    nextPageIndex: 2,
  }),

  computed: {
    popularPeople() {
      return this.$store.state.popularPeople
    },
  },

  methods: {
    previousPage() {
      this.$store.dispatch('popularPeople', --this.nextPageIndex - 1)
    },

    nextPage() {
      this.$store.dispatch('popularPeople', this.nextPageIndex++)
    },
  },

  created() {
    this.$store.dispatch('popularPeople')
  },
}
</script>

<style></style>
