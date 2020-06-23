<template>
  <div
    class="footer bg-dark-blue text-white d-flex flex-column justify-content-center
    align-items-center"
  >
    <h5 class="font-weight-bold py-5 d-flex flex-column">
      <a
        class="text-decoration-none text-light py-2"
        href="https://github.com/CaetanoMatheus/movie-web-app"
        target="_blank"
      >
        View Front-End Source Code
      </a>
      <a
        class="text-decoration-none text-light"
        href="https://github.com/CaetanoMatheus/movie-api"
        target="_blank"
      >
        View Back-End Source Code
      </a>
    </h5>
    <div class="">
      <span>This Applications was made unsing</span>
      <img src="../../assets/img/tmdb.svg" alt="tmdb-image" />
    </div>
    <span class="mx-auto pt-2">API</span>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  height: 300px;
  width: 100%;
}
</style>
