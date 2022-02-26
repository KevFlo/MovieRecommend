const mediaUtil = {
    formatData: (data, media_type="") => {
        data.media_type = media_type || data.media_type;
        const media = {
            id: data.id,
            type: data.type || data.media_type,
            title: data.title || data.name,
            poster_path: data.poster || data.poster_path || 'https://via.placeholder.com/500x750',
            backdrop_path: data.backdrop || data.backdrop_path || 'https://via.placeholder.com/500x281',
            year: data.year || data.release_date?.substring(0, 4) || data.first_air_date?.substring(0, 4),
            vote_average: data.vote_average,
            language: data.language || data.original_language,
        }

        if (media.poster_path.substring(0, 4) !== 'http') {
            media.poster_path = `https://image.tmdb.org/t/p/w500${media.poster_path}`;
        }
        if (media.backdrop_path.substring(0, 4) !== 'http') {
            media.backdrop_path = `https://image.tmdb.org/t/p/w500${media.backdrop_path}`;
        }

        console.log(media);
        return media;
    }
}

export default mediaUtil;