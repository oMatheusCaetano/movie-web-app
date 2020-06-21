import Api from '../services/api'

export default {
  async video(context, id) {
    const { data } = await Api.get(`movies/${id}/videos`)
    context.commit('setVideo', data[0])
  },
}
