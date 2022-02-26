import SearchResultItem from "./result-item";

const SearchResults = ({results}) => {
    return (
        <div className="search__results">
            <div className="search__results__list">
                {
                    (results.length > 0) ? (
                        results.map(result => (
                            <SearchResultItem key={result.id} item={result} />
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