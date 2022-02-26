import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import tmdb from "../utils/tmdb";
import mediaUtil from "../utils/media";
import watchlist from "../utils/watchlist";

const Media = () => {
    const { id } = useParams();
    const location = useLocation();
    const media_type = location.pathname.split("/")[1];
    const [media, setMedia] = useState({});
    const [inWatchlist, setInWatchlist] = useState(false);

    useEffect(() => {
        tmdb.getMedia(media_type, id).then(data => {
            const media = mediaUtil.formatData(data, media_type);
            setMedia(media);
        });
    }, [id, media_type]);

    useEffect(() => {
        setInWatchlist(watchlist.isInWatchlist(id, media_type));
    }, [id, media_type]);
    
    const shareURL = () => {
        const data = {files: [], text: `Have you seen "${media.title}" yet?`, url: `https://movierecommend-d5801.web.app/${media.type}/${media.id}`, title: media.title};
        if (navigator.canShare(data)) {
            navigator.share(data);
        }
    }

    const toggleWatchlist = () => {
        if (inWatchlist) {
            watchlist.removeFromWatchlist(id, media_type);
        } else {
            watchlist.addToWatchlist(id, media_type, media.title, media.poster_path, media.year, media.language);
        }
        setInWatchlist(!inWatchlist);
    }

    return (
        <div>
            <img src={media.backdrop_path} alt={media.title} className="media__backdrop" />
            <div className="media__poster">
                <img src={media.poster_path} alt={media.title} />
            </div>
            <div className="media__info">
                <h3 className="media__info__title">{media.title}</h3>
                <div className="media__info__metadata">
                    <span className="metadata_item date">{media.year}</span>
                    <span className="metadata_item lang">{media.language}</span>
                </div>
                <div className="result_actions">
                    <button className="btn btn-primary" onClick={shareURL}>Recommend</button>
                    <button className="btn btn-primary" onClick={toggleWatchlist}>{inWatchlist ? "Remove from watchlist" : "Add to watchlist"}</button>
                </div>
            </div>
        </div>
    )
}

export default Media;