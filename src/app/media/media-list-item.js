import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import mediaUtil from '../utils/media';
import watchlist from '../utils/watchlist';

const MediaListItem = ({item}) => {
    const [media, setMedia] = useState({});
    const [inWatchlist, setInWatchlist] = useState(false);

    useEffect(() => {
        setMedia(mediaUtil.formatData(item));
    }, [item]);
    
    useEffect(() => {
        setInWatchlist(watchlist.isInWatchlist(media.id, media.type));
    }, [media]);

    const navigate = useNavigate();
    const goToMedia = () => {
        navigate(`/${media.type}/${media.id}`);
    }

    const shareURL = () => {
        const data = {files: [], text: `Have you seen "${media.title}" yet?`, url: `https://movierecommend-d5801.web.app/${media.type}/${media.id}`, title: media.title};
        if (navigator.canShare(data)) {
            navigator.share(data);
        }
    }

    const toggleWatchlist = () => {
        if (inWatchlist) {
            watchlist.removeFromWatchlist(media.id, media.type);
        } else {
            watchlist.addToWatchlist(media.id, media.type, media.title, media.poster_path, media.year, media.language);
        }
        setInWatchlist(!inWatchlist);
    }

    return (
        <div className="search__results__list__item media-list-item" key={media.id}>
            <div className="search__results__list__item__poster">
                <img src={media.poster_path} alt={media.title} onClick={goToMedia} />
            </div>
            <div className="search__results__list__item__info">
                <h3 className="search__results__list__item__info__title" onClick={goToMedia}>{media.title}</h3>
                <div className="result_metadata">
                    <span className="metadata_item lang">{media.language}</span>
                    <span className="metadata_item date">{media.year}</span>
                </div>
                <div className="actions">
                    <button className="action_button recommend" onClick={shareURL}>Recommend</button>
                    <button className="action_button watchlist" onClick={toggleWatchlist}>{!inWatchlist ? "ADD" : "REMOVE"}</button>
                </div>
            </div>
        </div>
    );
}

export default MediaListItem;