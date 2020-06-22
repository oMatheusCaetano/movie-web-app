import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import media from './modules/media'
import people from './modules/people'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    media,
    people,
  },
  state: {
    video: {},
    image: {},
    instantSearchValue: '',
    instantSearchResult: [],
  },
  mutations,
  actions,
  getters,
})
