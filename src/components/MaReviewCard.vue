<template>
  <div class="card shadow my-4 mx-auto">
    <div class="card-body d-flex">
      <div>
        <span class="card_image p-2 mr-2 border bg-gradient rounded-circle">
          RI
        </span>
      </div>
      <div>
        <h5 class="card-title font-weight-bold">
          {{ review.author }}
        </h5>
        <p class="card-text">{{ review.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  width: 95%;
}
</style>
