import { useNavigate } from 'react-router-dom';
import mediaUtil from '../utils/media';

const MediaListItem = ({item}) => {
    const navigate = useNavigate();

    const go_to_media = () => {
        navigate(`/${item.media_type}/${item.id}`);
    }

    const share_url = (id, title, type) => {
        const data = {files: [], text: `Have you seen "${title}" yet?`, url: `https://movierecommend-d5801.web.app/${type}/${id}`, title: title};
        if (navigator.canShare(data)) {
            navigator.share(data);
        }
    }

    const media = mediaUtil.formatData(item);

    return (
        <div className="search__results__list__item" key={media.id}>
            <div className="search__results__list__item__poster">
                <img src={media.poster_path} alt={media.title} onClick={go_to_media} />
            </div>
            <div className="search__results__list__item__info">
                <h3 className="search__results__list__item__info__title" onClick={go_to_media}>{media.title}</h3>
                <div className="result_metadata">
                    <span className="metadata_item lang">{media.language}</span>
                    <span className="metadata_item date">{media.year}</span>
                </div>
                <div className="result_actions">
                    <button className="btn btn-primary" onClick={() => share_url(media.id, media.title, media.type)}>Recommend</button>
                    <button className="btn btn-primary">Add to List</button>
                </div>
            </div>
        </div>
    );
}

export default MediaListItem;