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
          v-for="(person, index) in this.currentMedia.credits.cast"
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
          v-for="(person, index) in this.currentMedia.credits.crew"
          :key="index"
          :person="person"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MaTitle from '../components/text/MaTitle.vue'
import MaPersonCard from '../components/card/MaPersonCard.vue'

export default {
  components: {
    MaTitle,
    MaPersonCard,
  },

  computed: {
    ...mapGetters({
      currentMedia: 'media/current',
    }),
  },
}
</script>
