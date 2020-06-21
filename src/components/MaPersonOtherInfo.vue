<template>
      <div>
      <ma-image
        class="text-center text-md-left"
        :image="{ file_path: currentPerson.profile_path }"
        :size="300"
      />
      <div>
        <span class="font-weight-bold">Also Known As</span>
        <div class="d-flex flex-column">
          <span
            v-for="(name, index) in currentPerson.also_known_as"
            :key="index"
          >
            {{ name }}
          </span>
        </div>

        <span class="font-weight-bold">Known For</span>
        <span>{{ currentPerson.known_for_department }}</span>
      </div>
    </div>
</template>

<script>
import MaImage from './MaImage.vue'

export default {
  components: {
    MaImage,
  },

  computed: {
    currentPerson() {
      return this.$store.state.currentPerson
    },
  },
}
</script>
