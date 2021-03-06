import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import tmdb from "../utils/tmdb";
import mediaUtil from "../utils/media";
import watchlist from "../utils/watchlist";
import StreamProvider from "./StreamProvider/StreamProvider";

const Media = () => {
    const { id } = useParams();
    const location = useLocation();
    const media_type = location.pathname.split("/")[1];
    const [media, setMedia] = useState({});
    // const [videos, setVideos] = useState([]);
    const [inWatchlist, setInWatchlist] = useState(false);
    const [watchProviders, setWatchProviders] = useState([]);

    useEffect(() => {
        tmdb.getMedia(media_type, id).then(data => {
            const media = mediaUtil.formatData(data, media_type);
            setMedia(media);
        });
        // tmdb.getMediaVideos(media_type, id).then(data => {
        //     setVideos(data);
        // });
        if (media_type === "tv") {
            tmdb.getTVStreamingProviders(id).then(data => {
                const providers = data?.US?.flatrate;
                if (providers) {
                    if (providers.length > 3) {
                        setWatchProviders(providers.slice(0, 3));
                    } else {
                        setWatchProviders(providers);
                    }
                }
            });
        } else {
            tmdb.getMovieStreamingProviders(id).then(data => {
                const providers = data?.US?.flatrate;
                if (providers) {
                    if (providers.length > 3) {
                        setWatchProviders(providers.slice(0, 3));
                    } else {
                        setWatchProviders(providers);
                    }
                }
            });
        }
    }, [id, media_type]);

    useEffect(() => {
        setInWatchlist(watchlist.isInWatchlist(media.id, media.type));
    }, [media.id, media.type]);
    
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
        <div className="media-page">
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
                <div className="actions">
                    <button className="btn btn-primary recommend" onClick={shareURL}>Recommend</button>
                    <button className="btn btn-primary watchlist" onClick={toggleWatchlist}>{inWatchlist ? "Remove from watchlist" : "Add to watchlist"}</button>
                </div>
            </div>
            {/* <div className="media-videos">
                <h3 className="media-videos-title">Videos</h3>
                <div className="media-videos-list">
                    {videos.map(video => (
                        <div className="media-videos-list-item" key={video.id}>
                            <img src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`} alt={video.id} />
                        </div>
                    ))}
                </div>
            </div> */}
            { watchProviders && watchProviders.length > 0 ? (
                <StreamProvider providers={watchProviders} />
            ) : null }
        </div>
    )
}

export default Media;