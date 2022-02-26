import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResultItem = ({item}) => {
    const navigate = useNavigate();

    const go_to_media = () => {
        navigate(`/${item.media_type}/${item.id}`);
    }

    const share_url = (id, title, type) => {
        const data = {files: [], text: `You should watch this ${type}`, url: `https://movierecommend-d5801.web.app/${type}/${id}`, title: title};
        if (navigator.canShare(data)) {
            navigator.share(data);
        }
    }

    return (
        <div className="search__results__list__item" key={item.id}>
            <div className="search__results__list__item__poster">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} onClick={go_to_media} />
            </div>
            <div className="search__results__list__item__info">
                <h3 className="search__results__list__item__info__title" onClick={go_to_media}>{item.title}</h3>
                <div className="result_metadata">
                    <span className="metadata_item date">{(new Date(item.release_date)).getFullYear()}</span>
                    <span className="metadata_item lang">{item.original_language}</span>
                </div>
                <div className="result_actions">
                    <button className="btn btn-primary" onClick={() => share_url(item.id, item.title, item.media_type)}>Recommend</button>
                    <button className="btn btn-primary">Add to List</button>
                </div>
            </div>
        </div>
    );
}

export default SearchResultItem;