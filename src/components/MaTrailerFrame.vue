<template>
  <div
    class="modal fade bd-example-modal-lg"
    tabindex="-1"
    role="dialog"
    id="trailerModal"
    aria-hidden="true"
    @click="close()"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <iframe
          class="h-100"
          src="https://www.youtube.com/embed/lYAfhjudtSg"
          allowfullscreen
          frameborder="0"
        ></iframe>
        <button class="btn" @click="close()">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      window.$('#trailerModal').remove()
      window.$('.modal-backdrop').remove()
    },
  },
}
</script>

<style scoped>
.modal-dialog,
.modal-content {
  height: 90%;
}
</style>
