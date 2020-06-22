import Api from '../services/api'

export default {
  async search(context, value) {
    const { data } = await Api.get(`search/movies/${value}`)
    context.commit('setInstantSearchResult', data)
  },

  async video(context, id) {
    const { data } = await Api.get(`movies/${id}/videos`)
    context.commit('setVideo', data[0])
  },
}
