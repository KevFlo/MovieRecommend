const APIKey = process.env.REACT_APP_TMDB_API_KEY;

const tmdb = {
    getPopularMovies: async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}
        `);
        const data = await response.json();
        return data.results;
    },
    getMedia: async (type, id) => {
        const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${APIKey}`);
        const data = await response.json();
        return data;
    },
    searchSuggestions: async (query) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/keyword?api_key=${APIKey}&query=${query}`);
        const data = await response.json();
        return data.results;
    },
    search: async (query) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${APIKey}&query=${query}`);
        const data = await response.json();
        return data.results;
    },
    getMediaVideos: async (type, id) => {
        const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${APIKey}`);
        let data = await response.json();
        data = data.results.filter(video => video.site === "YouTube");
        return data;
    }
};

export default tmdb;