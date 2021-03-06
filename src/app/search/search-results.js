import MediaListItem from "../media/media-list-item";

const SearchResults = ({results}) => {

    const relevantResults = results.filter(result => result.media_type === 'movie' || result.media_type === 'tv');

    return (
        <div className="search__results">
            <div className="search__results__list">
                {
                    (relevantResults.length > 0) ? (
                        relevantResults.map(result => (
                            <MediaListItem key={result.id} item={result} />
                        ))
                    ) : (
                        <p>No results found</p>
                    )
                }
            </div>
        </div>
    );
};

export default SearchResults;