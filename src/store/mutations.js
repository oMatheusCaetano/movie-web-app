export default {
  setVideo(state, video) {
    state.video = video
  },

  setImage(state, image) {
    state.image = image
  },

  setSearchValue(state, value) {
    state.searchValue = value
  },

  resetSearchValue(state) {
    state.searchValue = ''
  },

  setInstantSearchValue(state, value) {
    state.instantSearchValue = value
  },

  resetInstantSearchValue(state) {
    state.instantSearchValue = ''
  },

  setInstantSearchResult(state, result) {
    state.instantSearchResult = result
  },
}
