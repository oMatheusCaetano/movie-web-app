<template>
  <div>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(media, index) in !asCrew
          ? this.person.credits.cast
          : this.person.credits.crew"
        :key="index"
      >
        <router-link
          class="text-info mr-3"
          :to="{
            name: 'AboutMedia',
            params: { media_type: 'movies', media_id: media.id },
          }"
        >
          <font-awesome-icon icon="link" />
        </router-link>

        <span class="mr-3" v-if="media.release_date !== ''">
          {{ media.release_date | formatYear }}
        </span>
        <span class="ml-3 mr-4 px-2" v-else>-</span>
        <router-link
          class="font-weight-bold text-dark text-decoration-none"
          :to="{
            name: 'AboutMedia',
            params: { media_type: 'movies', media_id: media.id },
          }"
        >
          <span>{{ media.title }}</span>
        </router-link>
        <span class="text-secondary"> as </span>
        <span>{{ !asCrew ? media.character : media.job }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['asCrew'],

  computed: {
    ...mapGetters({
      person: 'people/current',
    }),
  },
}
</script>
