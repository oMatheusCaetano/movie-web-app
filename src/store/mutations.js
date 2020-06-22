export default {
  setVideo(state, video) {
    state.video = video
  },

  setImage(state, image) {
    state.image = image
  },

  setInstantSearchValue(state, result) {
    state.instantSearchValue = result
  },

  resetInstantSearchValue(state) {
    state.instantSearchValue = ''
  },

  setInstantSearchResult(state, result) {
    state.instantSearchResult = result
  },
}
