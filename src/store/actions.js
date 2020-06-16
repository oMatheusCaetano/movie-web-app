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

  async videos(context, id) {
    const { data } = await Api.get(`movies/${id}/videos`)
    context.commit('setVideos', data)
  },

  async trendingMovies(context, timeWindow) {
    const { data } = await Api.get(`movies/trending/${timeWindow}`)
    context.commit('setTrendingMovies', data)
  },

  async trendingTv(context, timeWindow) {
    const { data } = await Api.get(`tv/trending/${timeWindow}`)
    context.commit('setTrendingTv', data)
  },
}
