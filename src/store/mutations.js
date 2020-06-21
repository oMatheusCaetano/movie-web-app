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

  sortCast({ currentPerson }) {
    const { cast } = currentPerson.credits
    const withoutDate = cast.filter((item) => item.release_date === '')
    const withDate = cast.filter((item) => item.release_date !== '')
    withDate.sort((a, b) => Number(new Date(a.release_date)) - Number(new Date(b.release_date)))
    currentPerson.credits.cast = withoutDate.concat(withDate)
  },

  sortCrew({ currentPerson }) {
    const { crew } = currentPerson.credits
    const withoutDate = crew.filter((item) => item.release_date === '')
    const withDate = crew.filter((item) => item.release_date !== '')
    withDate.sort((a, b) => Number(new Date(a.release_date)) - Number(new Date(b.release_date)))
    currentPerson.credits.crew = withoutDate.concat(withDate)
  },
}
