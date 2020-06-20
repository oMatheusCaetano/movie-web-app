import Api from '../services/api'

export default {
  async showMedia(context, params) {
    const { data } = await Api.get(`${params.media_type}/about/${params.media_id}`)
    context.commit('setCurrentMedia', data)
  },

  async popularMedia(context, type) {
    const { data } = await Api.get(`${type}/popular`)
    context.commit('setPopularMedia', data)
  },

  async upcomingMedia(context) {
    const { data } = await Api.get('movies/upcoming')
    context.commit('setUpcomingMedia', data)
  },

  async video(context, id) {
    const { data } = await Api.get(`movies/${id}/videos`)
    context.commit('setVideo', data[0])
  },

  async trendingMovies(context, timeWindow) {
    const { data } = await Api.get(`movies/trending/${timeWindow}`)
    context.commit('setTrendingMovies', data)
  },

  async trendingTv(context, timeWindow) {
    const { data } = await Api.get(`tv/trending/${timeWindow}`)
    context.commit('setTrendingTv', data)
  },

  async popularPeople(context, pageNumber) {
    const page = pageNumber > 0 ? pageNumber : 1
    const { data } = await Api.get(`person/popular?page=${page}`)
    context.commit('setPopularPeople', data)
  },
}
