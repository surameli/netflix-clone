const API_KEY = process.env.REACT_APP_API_KEY;
const requests ={
 fetchTreanding:`/trending/all/day?api_key=${API_KEY}&language=en-US`,
 fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
 fetchTopRatedmovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
 fetchActionmovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
 fetchAdventuremovies:`discover/movie?api_key=${API_KEY}&with_genres=12`,
 fetchAnimationmovies:`discover/movie?api_key=${API_KEY}&with_genres=16`,
 fetchComedymovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchCrimemovies:`discover/movie?api_key=${API_KEY}&with_genres=80`,
 fetchHorrormovies:`discover/movie?api_key=${API_KEY}&with_genres=27`,
 fetchFantasymovies:`discover/movie?api_key=${API_KEY}&with_genres=14`,
 fetchFamilymovies:`discover/movie?api_key=${API_KEY}&with_genres=10751`,
 fetchDramamovies:`discover/movie?api_key=${API_KEY}&with_genres=18`,
 fetchHistorymovies:`discover/movie?api_key=${API_KEY}&with_genres=36`,
 fetchScienceFictionmovies:`discover/movie?api_key=${API_KEY}&with_genres=878`,
 fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`
};
export default requests;