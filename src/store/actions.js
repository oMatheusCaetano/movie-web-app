import Api from '../services/api'

const popularMoviesRoute = 'movies/popular'

export default {
  async popularMovies(context) {
    const { data } = await Api.get(popularMoviesRoute)
    context.commit('setPopularMovies', data)
  },
}
