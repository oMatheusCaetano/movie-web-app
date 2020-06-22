<template>
  <div class="pt-4" v-if="currentPerson.credits">
    <div class="container-fluid d-flex flex-wrap">

      <div class="col-12 col-md-5 col-lg-4 col-xl-3 text-center">
        <ma-person-other-info />
      </div>

      <div class="col-12 col-md-7 col-lg-8 col-xl-9">
        <ma-person-basic-info />

        <ma-title class="h4 mt-4" title="Known For" />
        <ma-scroller
          v-if="currentPerson.credits"
          :media="currentPerson.credits.cast"
        />
        <ma-title class="h4 mt-4" title="Pictures" />
        <ma-content-scroller contentType="posters" :isPerson="true" />

        <ma-title class="h4 mt-4" title="Acting" />
        <ma-person-credits />

        <ma-title class="h4 mt-4" title="As Crew" />
        <ma-person-credits :asCrew="true" />
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MaPersonOtherInfo from '../components/info/MaPersonOtherInfo.vue'
import MaPersonBasicInfo from '../components/info/MaPersonBasicInfo.vue'
import MaTitle from '../components/text/MaTitle.vue'
import MaScroller from '../components/scroll/MaScroller.vue'
import MaContentScroller from '../components/scroll/MaContentScroller.vue'
import MaPersonCredits from '../components/list/MaPersonCredits.vue'

export default {
  components: {
    MaPersonOtherInfo,
    MaPersonBasicInfo,
    MaTitle,
    MaScroller,
    MaContentScroller,
    MaPersonCredits,
  },

  computed: {
    ...mapGetters({
      currentPerson: 'people/current',
    }),
  },

  created() {
    this.$store.dispatch('people/show', this.$route.params.person_id)
  },
}
</script>
