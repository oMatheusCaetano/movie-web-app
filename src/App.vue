<template>
  <div id="app">
    <ma-pre-loader />
    <ma-navbar />
    <transition name="fader">
      <router-view />
    </transition>
    <vue-progress-bar />
    <ma-footer class="mt-5" />
    <ma-trailer-frame />
    <ma-image-modal />
  </div>
</template>

<script>
import MaPreLoader from './components/preLoader/MaPreLoader.vue'
import MaNavbar from './components/nav/MaNavbar.vue'
import MaFooter from './components/footer/MaFooter.vue'
import MaTrailerFrame from './components/modal/MaTrailerFrame.vue'
import MaImageModal from './components/modal/MaImageModal.vue'

export default {
  components: {
    MaPreLoader,
    MaNavbar,
    MaFooter,
    MaTrailerFrame,
    MaImageModal,
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
  transition: 0.3s;
}

.fader-enter,
.fader-leave-to {
  filter: blur(10px);
  opacity: 0;
}
</style>
