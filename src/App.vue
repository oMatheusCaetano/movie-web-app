<template>
  <div id="app">
    <ma-navbar />
    <router-view/>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import MaNavbar from './components/MaNavbar.vue'

export default {
  components: {
    MaNavbar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #2c3e50;
}
</style>
