<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark-blue" id="pageNavbar">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      MovieWebApp
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'People' }">
            People
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  color: #fff !important;
}
</style>
