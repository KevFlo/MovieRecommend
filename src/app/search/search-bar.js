import { useRef, useEffect } from "react";
import tmdb from "../utils/tmdb";

const SearchBar = ({setResults, query, setQuery}) => {

    const input = useRef(null);
    
    const handle_query_change = () => {
        setQuery(input.current.value);
    }

    useEffect(() => {
        if (query === "") {
            setResults([]);
        } else {
            tmdb.search(query).then(data => {
                setResults(data);
            });
        }
    }, [query, setResults]);

    return (
        <div className="search__bar">
            <div className="search__form">
                <input type="text" className="search__input" placeholder="Search" value={query} ref={input} onChange={handle_query_change} />
            </div>
        </div>
    );
}

export default SearchBar;