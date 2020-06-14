import Api from '../services/api'

export default {
  async popularMedia(context, type) {
    const { data } = await Api.get(`${type}/popular`)
    context.commit('setPopularMedia', data)
  },
}
