import Api from '../services/api'

export default {
  async search({ commit, getters }) {
    if (getters.instantSearchValue.length >= 2) {
      const { data } = await Api.get(`search/multi/${getters.instantSearchValue}`)
      commit('setInstantSearchResult', data)
    }
  },

  async video({ commit }, id) {
    const { data } = await Api.get(`movies/${id}/videos`)
    commit('setVideo', data[0])
  },
}
