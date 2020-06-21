<template>
  <div>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(media, index) in currentPerson.credits.cast"
        :key="index"
      >

        <router-link class="text-info mr-3" to="#">
          <font-awesome-icon icon="link" />
        </router-link>

        <span class="mr-3" v-if="media.release_date !== ''">
          {{ media.release_date | formatYear }}
        </span>
        <span class="ml-3 mr-4 px-2" v-else>-</span>
        <router-link class="font-weight-bold text-dark text-decoration-none" to="#" >
          <span>{{ media.title }}</span>
        </router-link>
        <span class="text-secondary"> as </span>
        <span>{{ media.character }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    currentPerson() {
      return this.$store.state.currentPerson
    },
  },
}
</script>

<style></style>
