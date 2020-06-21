import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: {
    currentMedia: [],
    currentPerson: {},
    popularPeople: [],
    popularMedia: [],
    upcomingMedia: [],
    trendingMovies: [],
    trendingTv: [],
    video: {},
    image: {},
  },
  mutations,
  actions,
  getters,
})
