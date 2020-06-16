import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: {
    currentMedia: [],
    popularMedia: [],
    upcomingMedia: [],
    trendingMovies: [],
    trendingTv: [],
    videos: [],
  },
  mutations,
  actions,
})
