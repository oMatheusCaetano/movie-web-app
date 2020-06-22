<template>
  <div>
    <ma-image
      class="text-center text-md-left"
      :image="this.person"
      :size="300"
    />

    <div class="text-center text-md-left pl-2">

      <ma-title title="Personal Info" />

      <div>
        <span class="font-weight-bold">Known For</span>
        <p>{{ this.person.known_for_department }}</p>
      </div>

      <div>
        <span class="font-weight-bold">Gender</span>
        <p>{{ this.person.gender | formatGender }}</p>
      </div>

      <div>
        <span class="font-weight-bold">Birthday</span>
        <p>{{ this.person.birthday | formatDate }}</p>
      </div>

      <div v-if="this.person.deathday">
        <span class="font-weight-bold">Deathday</span>
        <p>{{ this.person.deathday | formatDate }}</p>
      </div>

      <div>
        <span class="font-weight-bold">Place Of Birth</span>
        <p>{{ this.person.place_of_birth }}</p>
      </div>

      <div>
        <span class="font-weight-bold">Also Known As</span>
        <div class="d-flex flex-column">
          <span
            v-for="(name, index) in this.person.also_known_as"
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
import { mapGetters } from 'vuex'
import MaImage from '../image/MaImage.vue'
import MaTitle from '../text/MaTitle.vue'

export default {
  components: {
    MaImage,
    MaTitle,
  },

  computed: {
    ...mapGetters({
      person: 'people/current',
    }),
  },
}
</script>
