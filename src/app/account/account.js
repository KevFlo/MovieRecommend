import { useState, useEffect } from "react";
import watchlist from "../utils/watchlist";
import MediaListItem from "../media/media-list-item";

const Account = () => {
    const [mediaList, setMediaList] = useState([]);

    useEffect(() => {
        const data = watchlist.getWatchlist();
        setMediaList(data);
    }, []);

    return (
        <div>
            <h2>Watchlist</h2>
            <div className="media_list">
                {
                    mediaList.map((media, index) => {
                        return (
                            <MediaListItem key={index} item={media} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Account;