export default {
  searchMoviesResult: ({ searchMoviesResult }) => searchMoviesResult,
  searchTvResult: ({ searchTvResult }) => searchTvResult,
  current: ({ current }) => current,
  popular: ({ popular }) => popular,
  upcoming: ({ upcoming }) => upcoming,
  trendingMovies: ({ trendingMovies }) => trendingMovies,
  trendingTvShows: ({ trendingTvShows }) => trendingTvShows,
  titleOrName: ({ current }) => (current.title ? current.title : current.name),
  date: ({ current }) => (
    current.release_date
      ? current.release_date
      : current.first_air_date),
}
