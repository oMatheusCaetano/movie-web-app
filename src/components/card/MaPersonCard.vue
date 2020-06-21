<template>
  <div v-if="this.person.profile_path && uncredited()">
    <router-link
      class=" text-decoration-none font-weight-bold text-dark"
      :to="{ name: 'AboutPerson', params: { person_id: this.person.id }}"
    >
      <img
        class="personImage mb-2 rounded shadow"
        alt="picture"
        :src="`https://image.tmdb.org/t/p/w200/${this.person.profile_path}`"
      />
      <div>
        <span
          class="personName text-default-dark"
          >{{ this.person.name }}</span
        >
      </div>
    </router-link>
    <p class="personJob">{{ characterOrJob() }}</p>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },

    noUncredited: {
      type: Boolean,
      required: false,
    },
  },

  methods: {
    uncredited() {
      return this.person.character && this.noUncredited
        ? this.person.character.indexOf('(uncredited)') === -1
        : true
    },

    characterOrJob() {
      return this.person.character ? this.person.character : this.person.job
    },
  },
}
</script>

<style lang="scss" scoped>
.personImage {
  height: 250px;
  transition: 0.3s;

  &:hover {
    filter: brightness(50%);
  }
}

.personName {
  line-height: 0.5;
}

.personJob {
  line-height: 1.1;
}
</style>
