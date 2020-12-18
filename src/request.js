const API_KEY = "54fcb95bfbca61f2a056c7fcf1226561";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    fetchThriller: `/discover/tv?api_key=${API_KEY}&with_genres=53`,
    fetchtTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
    fetchOtherShows: `/discover/tv?api_key=${API_KEY}&with_genres=80`,

}

export default requests;