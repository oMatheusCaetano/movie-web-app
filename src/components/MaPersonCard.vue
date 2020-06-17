<template>
  <div v-if="this.person.profile_path && uncredited()">
    <router-link
      class=" text-decoration-none font-weight-bold text-dark"
      to="#"
    >
      <img
        class="personImage mb-2 rounded shadow"
        alt="picture"
        :src="`https://image.tmdb.org/t/p/w200/${this.person.profile_path}`"
      />
      <span class="text-default-dark">{{ this.person.name }}</span>
    </router-link>
    <p>{{ characterOrJob() }}</p>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
  },

  methods: {
    uncredited() {
      return this.person.character
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
}
</style>
