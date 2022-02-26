const mediaUtil = {
    formatData: (data, media_type="") => {
        data.media_type = media_type || data.media_type;
        const media = {
            id: data.id,
            type: data.type || data.media_type,
            title: data.title || data.name,
            poster_path: data.poster || `https://image.tmdb.org/t/p/w500${data.poster_path}` || 'https://via.placeholder.com/500x750',
            backdrop_path: (data.backdrop_path) ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}` : 'https://via.placeholder.com/500x281',
            year: data.year || data.release_date?.substring(0, 4) || data.first_air_date?.substring(0, 4),
            vote_average: data.vote_average,
            language: data.language || data.original_language,
        }
        return media;
    }
}

export default mediaUtil;