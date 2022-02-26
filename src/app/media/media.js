import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import tmdb from "../utils/tmdb";

const Media = () => {
    const { id } = useParams();
    const location = useLocation();
    const media_type = location.pathname.split("/")[1];
    const [media, setMedia] = useState({});

    useEffect(() => {
        tmdb.getMedia(media_type, id).then(data => {
            setMedia(data);
        });
    }, [id, media_type]);
    
    const share_url = (id, title, type) => {
        const data = {files: [], text: `You should watch this ${type}:`, url: `https://movierecommend-d5801.web.app/${type}/${id}`, title: title};
        if (navigator.canShare(data)) {
            navigator.share(data);
        }
    }

    return (
        <div>
            <div className="media__poster">
                <img src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} alt={media.title} />
            </div>
            <div className="media__info">
                <h3 className="media__info__title">{media.title}</h3>
                <div className="media__info__metadata">
                    <span className="metadata_item date">{(new Date(media.release_date)).getFullYear()}</span>
                    <span className="metadata_item lang">{media.original_language}</span>
                </div>
                <div className="result_actions">
                    <button className="btn btn-primary" onClick={() => share_url(media.id, media.title, media_type)}>Recommend</button>
                    <button className="btn btn-primary">Add to List</button>
                </div>
            </div>
        </div>
    )
}

export default Media;