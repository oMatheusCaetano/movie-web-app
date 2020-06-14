import Vue from 'vue'
import ToggleSwitch from 'vuejs-toggle-switch'
import App from './App.vue'
import router from './router'
import store from './store'
import './bootstrap'

Vue.use(ToggleSwitch)
Vue.config.productionTip = false

window.EventBus = new Vue()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
