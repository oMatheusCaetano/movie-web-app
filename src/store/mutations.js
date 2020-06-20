export default {
  setCurrentMedia(state, currentMedia) {
    state.currentMedia = currentMedia
  },

  clearCurrentMedia(state) {
    state.currentMedia = []
  },

  setPopularMedia(state, popularMedia) {
    state.popularMedia = popularMedia
  },

  setUpcomingMedia(state, upcomingMedia) {
    state.upcomingMedia = upcomingMedia
  },

  setVideos(state, videos) {
    state.videos = videos
  },

  setTrendingMovies(state, trendingMovies) {
    state.trendingMovies = trendingMovies
  },

  setTrendingTv(state, trendingTv) {
    state.trendingTv = trendingTv
  },

  setPopularPeople(state, popularPeople) {
    state.popularPeople = popularPeople
  },
}
