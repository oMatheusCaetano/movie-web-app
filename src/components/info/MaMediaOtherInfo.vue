<template>
  <div class="bg-gradient p-4">
    <span class="font-weight-bold">Status</span>
    <p>{{ this.media.status }}</p>
    <span class="font-weight-bold">Budget</span>
    <p>{{ this.media.budget ? `$ ${this.media.budget}` : '-' }}</p>
    <span class="font-weight-bold">Language</span>
    <p class="text-uppercase">{{ this.media.original_language }}</p>
    <span class="font-weight-bold">Release Date</span>
    <p>{{ this.media.release_date | formatDate }}</p>
    <span class="font-weight-bold">Runtime</span>
    <p>{{ this.media.runtime ? `${this.media.runtime}min` : '-' }}</p>
    <span class="font-weight-bold">Rate</span>
    <p>{{ this.media.vote_average }}</p>
        <span class="font-weight-bold">Vote Count</span>
    <p>{{ this.media.vote_count }}</p>
    <span class="font-weight-bold">Adult</span>
    <p>{{ this.media.adult ? 'Yes' : 'No' }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      media: 'media/current',
    }),
  },
}
</script>
