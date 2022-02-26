import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import mediaUtil from '../utils/media';

const MediaListItem = ({item}) => {
    const [media, setMedia] = useState({});

    useEffect(() => {
        setMedia(mediaUtil.formatData(item));
    }, [item]);

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

    return (
        <div className="search__results__list__item" key={media.id}>
            <div className="search__results__list__item__poster">
                <img src={media.poster_path} alt={media.title} onClick={goToMedia} />
            </div>
            <div className="search__results__list__item__info">
                <h3 className="search__results__list__item__info__title" onClick={goToMedia}>{media.title}</h3>
                <div className="result_metadata">
                    <span className="metadata_item lang">{media.language}</span>
                    <span className="metadata_item date">{media.year}</span>
                </div>
                <div className="result_actions">
                    <button className="btn btn-primary" onClick={shareURL}>Recommend</button>
                    <button className="btn btn-primary">Add to List</button>
                </div>
            </div>
        </div>
    );
}

export default MediaListItem;