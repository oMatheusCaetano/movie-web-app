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
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'Home' }">
            Home
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
