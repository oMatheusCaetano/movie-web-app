import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: '#00b4db',
  failedColor: 'red',
  thickness: '3px',
  transition: {
    speed: '0.3s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
})
