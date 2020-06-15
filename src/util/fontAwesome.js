import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faHeart, faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faPlay, faHeart, faFire)
