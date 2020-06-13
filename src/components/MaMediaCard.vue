<template>
  <div class="position-relative">
    <div class="mediaRating position-absolute p-1 rounded-pill shadow-sm bg-dark">
      <div class="p-1 rounded-pill bg-light">{{ media.rate }}</div>
    </div>
    <router-link
      class="text-decoration-none font-weight-bold text-dark"
      to="#"
    >
      <img class="mb-3 rounded shadow-sm" src="../assets/test/actor3.jpg" alt="picture" />
      <span>{{ media.title }}</span>
    </router-link>
    <p>{{ media.date }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    media: {
      title: 'Brahms: Boneco do Mal II',
      date: 'Jul 05, 2017',
      rate: '7.5',
    },
  }),
}
</script>

<style scoped>
img {
  height: 300px;
}

.mediaRating {
  bottom: 70px;
  left: 5px;
}
</style>
