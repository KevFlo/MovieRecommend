import { useState } from "react";
import SearchBar from "./search-bar";
import SearchResults from "./search-results";

const Search = ({ query, setQuery }) => {
    const [searchResults, setSearchResults] = useState([]);

    return (
        <div className="search">
            <SearchBar setResults={setSearchResults} query={query} setQuery={setQuery} />
            <SearchResults results={searchResults} />
        </div>
    );
}

export default Search;