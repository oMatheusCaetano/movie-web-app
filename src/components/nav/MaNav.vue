<template>
  <div class="row">
    <div class="col-3">
      <div
        class="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          class="nav-link active d-flex justify-content-between"
          id="movies-pill"
          data-toggle="pill"
          href="#movies-reult"
          role="tab"
          aria-controls="movies-reult"
          aria-selected="true"
        >
          Movies<span class="badge badge-light">4</span>
        </a>
        <a
          class="nav-link d-flex justify-content-between"
          id="tv-pill"
          data-toggle="pill"
          href="#tv-result"
          role="tab"
          aria-controls="tv-result"
          aria-selected="false"
        >
          TV Shows<span class="badge badge-light">4</span>
        </a>
        <a
          class="nav-link d-flex justify-content-between"
          id="people-pill"
          data-toggle="pill"
          href="#people-reult"
          role="tab"
          aria-controls="people-reult"
          aria-selected="false"
        >
          People<span class="badge badge-light">4</span>
        </a>
      </div>
    </div>
    <div class="col-9 pr-md-4">
      <div class="tab-content" id="v-pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="movies-reult"
          role="tabpanel"
          aria-labelledby="movies-pill"
        >
          <ma-nav-card class="mb-3" />
        </div>
        <div
          class="tab-pane fade"
          id="tv-result"
          role="tabpanel"
          aria-labelledby="tv-pill"
        >
          <ma-nav-card class="mb-3" />
        </div>
        <div
          class="tab-pane fade"
          id="people-reult"
          role="tabpanel"
          aria-labelledby="people-pill"
        >
          <ma-nav-card class="mb-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaNavCard from '../card/MaNavCard.vue'

export default {
  components: {
    MaNavCard,
  },
}
</script>

<style></style>
