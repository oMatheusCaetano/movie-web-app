import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,
  state: {
    current: {},
    popular: [],
    upcoming: [],
    searchMoviesResult: [],
    searchTvResult: [],
    trendingMovies: [],
    trendingTvShows: [],
  },
  mutations,
  actions,
  getters,
}
