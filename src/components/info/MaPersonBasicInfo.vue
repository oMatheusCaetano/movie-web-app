<template>
  <div>
    <h2 class="font-weight-bold mb-4">{{ this.person.name }}</h2>
    <h4>Biography</h4>
    <p>{{ this.person.biography }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      person: 'people/current',
    }),
  },
}
</script>
