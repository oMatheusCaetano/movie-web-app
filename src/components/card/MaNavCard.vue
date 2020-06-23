<template>
  <div class="card shadow">
    <div class="card-body d-flex flex-wrap px-2 py-2 p-md-0">
      <div
        class="col-12 col-md-2 col-lg-1 text-center text-md-left mb-2 mr-md-3 mr-lg-4 m-md-0 px-0"
      >
        <img
          class="image rounded"
          alt="content-image"
          :src="
            this.item.poster_path
              ? `https://image.tmdb.org/t/p/w200/${this.item.poster_path}`
              : 'https://via.placeholder.com/300x400'
          "
        />
      </div>
      <div
        class="d-flex flex-column col-12 col-md-9 col-lg-10 text-center text-md-left px-0 py-2"
      >
        <div class="d-flex flex-column">
          <span class="font-weight-bold h5">{{ titleOrName() }}</span>
          <span class="text-secondary">{{ this.date() | formatDate }}</span>
        </div>
        <p class="mt-3 text-truncate">
          {{ this.item.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  methods: {
    titleOrName() {
      return this.item.title ? this.item.title : this.item.name
    },

    date() {
      return this.item.title ? this.item.release_date : this.item.first_air_date
    },
  },
}
</script>

<style scoped>
.image {
  width: 100px;
}
</style>
