import Api from '../../../services/api'

export default {
  async show(context, params) {
    const { data } = await Api.get(`${params.media_type}/about/${params.media_id}`)
    context.commit('setCurrent', data)
  },

  async popular(context, type) {
    const { data } = await Api.get(`${type}/popular`)
    context.commit('setPopular', data)
  },

  async upcoming(context) {
    const { data } = await Api.get('movies/upcoming')
    context.commit('setUpcoming', data)
  },

  async trendingMovies(context, timeWindow) {
    const { data } = await Api.get(`movies/trending/${timeWindow}`)
    context.commit('setTrendingMovies', data)
  },

  async trendingTv(context, timeWindow) {
    const { data } = await Api.get(`tv/trending/${timeWindow}`)
    context.commit('setTrendingTvShows', data)
  },
}
