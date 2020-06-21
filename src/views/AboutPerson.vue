<template>
  <div class="container-fluid py-4" v-if="currentPerson.credits">
    <div class="d-flex flex-wrap">

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

        <ma-person-credits />
      </div>

    </div>
    <ma-image-modal />
  </div>
</template>

<script>
import MaPersonOtherInfo from '../components/MaPersonOtherInfo.vue'
import MaPersonBasicInfo from '../components/MaPersonBasicInfo.vue'
import MaTitle from '../components/MaTitle.vue'
import MaScroller from '../components/MaScroller.vue'
import MaPersonCredits from '../components/MaPersonCredits.vue'
import MaImageModal from '../components/MaImageModal.vue'

export default {
  components: {
    MaPersonOtherInfo,
    MaPersonBasicInfo,
    MaTitle,
    MaScroller,
    MaPersonCredits,
    MaImageModal,
  },

  computed: {
    currentPerson() {
      return this.$store.state.currentPerson
    },
  },

  created() {
    this.$store.dispatch('showPerson', this.$route.params.person_id)
  },
}
</script>
