export default {
  setPopular(state, people) {
    state.popular = people
  },

  setCurrent(state, person) {
    state.current = person
  },

  setSearchResult(state, result) {
    state.searchResult = result
  },

  sortCast({ current }) {
    const { cast } = current.credits
    const withoutDate = cast.filter((item) => item.release_date === '')
    const withDate = cast.filter((item) => item.release_date !== '')
    withDate.sort((a, b) => Number(new Date(a.release_date)) - Number(new Date(b.release_date)))
    current.credits.cast = withoutDate.concat(withDate)
  },

  sortCrew({ current }) {
    const { crew } = current.credits
    const withoutDate = crew.filter((item) => item.release_date === '')
    const withDate = crew.filter((item) => item.release_date !== '')
    withDate.sort((a, b) => Number(new Date(a.release_date)) - Number(new Date(b.release_date)))
    current.credits.crew = withoutDate.concat(withDate)
  },
}
