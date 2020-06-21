<template>
  <div
    class="modal fade bd-example-modal-lg"
    tabindex="-1"
    role="dialog"
    id="imageModal"
    aria-hidden="true"
    v-if="this.image.file_path"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <img
          class="img-fluid"
          :src="`https://image.tmdb.org/t/p/original/${this.image.file_path}`"
          alt="Content-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      image: 'image',
    }),
  },
}
</script>
