<template>
  <div id="app">
    <ma-navbar />
    <transition name="fader">
      <router-view />
    </transition>
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

.fader-enter-active,
.fader-leave-active {
  transition: .3s;
}

.fader-enter,
.fader-leave-to {
  filter: blur(10px);
  opacity: 0;
}

</style>
