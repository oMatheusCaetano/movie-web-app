<template>
  <div class="bg-gradient shadow p-4">
    <span class="font-weight-bold">Status</span>
    <p>{{ currentMedia.status }}</p>
    <span class="font-weight-bold">Budget</span>
    <p>{{ currentMedia.budget ? `$ ${currentMedia.budget}` : '-' }}</p>
    <span class="font-weight-bold">Language</span>
    <p class="text-uppercase">{{ currentMedia.original_language }}</p>
    <span class="font-weight-bold">Release Date</span>
    <p>{{ currentMedia.release_date | formatDate }}</p>
    <span class="font-weight-bold">Runtime</span>
    <p>{{ currentMedia.runtime ? `${currentMedia.runtime}min` : '-' }}</p>
    <span class="font-weight-bold">Rate</span>
    <p>{{ currentMedia.vote_average }}</p>
        <span class="font-weight-bold">Vote Count</span>
    <p>{{ currentMedia.vote_count }}</p>
    <span class="font-weight-bold">Adult</span>
    <p>{{ currentMedia.adult ? 'Yes' : 'No' }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    currentMedia() {
      return this.$store.state.currentMedia
    },
  },
}
</script>

<style></style>
