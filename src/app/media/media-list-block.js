import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import mediaUtil from '../utils/media';

const MediaListBlock = ({item}) => {
    const [media, setMedia] = useState({});

    useEffect(() => {
        setMedia(mediaUtil.formatData(item));
    }, [item]);

    const navigate = useNavigate();
    const goToMedia = () => {
        navigate(`/${media.type}/${media.id}`);
    }

    return (
        <div className="media-list-block" key={media.id}>
            <div className="poster">
                <img src={media.poster_path} alt={media.title} onClick={goToMedia} />
            </div>
        </div>
    );
}

export default MediaListBlock;