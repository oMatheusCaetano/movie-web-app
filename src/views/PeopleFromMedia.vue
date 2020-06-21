<template>
  <div>
    <div class="container pb-5">
      <ma-title
        class="mb-3 mt-4 ml-2"
        title="Cast"
        icon="star"
        iconColor="warning"
      />
      <div class="row">
        <ma-person-card
          class="col-6 col-md-3 col-lg-2 text-center"
          v-for="(person, index) in people.cast"
          :key="index"
          :person="person"
        />
      </div>

      <ma-title
        class="mb-3 mt-4 ml-2"
        title="Crew"
        icon="briefcase"
        iconColor="info"
      />
      <div class="d-flex flex-wrap">
        <ma-person-card
          class="col-6 col-md-3 col-lg-2 text-center"
          v-for="(person, index) in people.crew"
          :key="index"
          :person="person"
        />
      </div>
    </div>

    <ma-footer />
  </div>
</template>

<script>
import MaTitle from '../components/text/MaTitle.vue'
import MaPersonCard from '../components/card/MaPersonCard.vue'
import MaFooter from '../components/footer/MaFooter.vue'

export default {
  components: {
    MaTitle,
    MaPersonCard,
    MaFooter,
  },

  computed: {
    people() {
      return this.$store.state.currentMedia.credits
    },
  },
}
</script>
