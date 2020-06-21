<template>
  <div>
    <ma-image
      class="text-center text-md-left"
      :image="{ file_path: currentPerson.profile_path }"
      :size="300"
    />

    <div class="text-center text-md-left pl-2">

      <ma-title title="Personal Info" />

      <div>
        <span class="font-weight-bold">Known For</span>
        <p>{{ currentPerson.known_for_department }}</p>
      </div>

      <div>
        <span class="font-weight-bold">Gender</span>
        <p>{{ currentPerson.gender | formatGender }}</p>
      </div>

      <div>
        <span class="font-weight-bold">Birthday</span>
        <p>{{ currentPerson.birthday | formatDate }}</p>
      </div>

      <div v-if="currentPerson.deathday">
        <span class="font-weight-bold">Deathday</span>
        <p>{{ currentPerson.deathday | formatDate }}</p>
      </div>

      <div>
        <span class="font-weight-bold">Place Of Birth</span>
        <p>{{ currentPerson.place_of_birth }}</p>
      </div>

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
      </div>
    </div>
  </div>
</template>

<script>
import MaImage from './MaImage.vue'
import MaTitle from './MaTitle.vue'

export default {
  components: {
    MaImage,
    MaTitle,
  },

  computed: {
    currentPerson() {
      return this.$store.state.currentPerson
    },
  },
}
</script>
