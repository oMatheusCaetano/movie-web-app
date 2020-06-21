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

  setVideo(state, video) {
    state.video = video
  },

  setImage(state, image) {
    state.image = image
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

  setCurrentPerson(state, currentPerson) {
    state.currentPerson = currentPerson
  },
}
