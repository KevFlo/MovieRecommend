import { useState, useEffect } from "react";
import MediaListBlock from "../media/media-list-block";
import tmdb from "../utils/tmdb";
import watchlist from "../utils/watchlist";
import Flickity from "react-flickity-component";

const Dashboard = () => {
    const [mediaList, setMediaList] = useState({});
    const [watchlistMedia, setWatchlistMedia] = useState([]);

    useEffect(() => {
        tmdb.getTrendingMedia().then(data => {
            setMediaList(data);
        });
        setWatchlistMedia(watchlist.getWatchlist());
    }, []);
    
    const flickityOptions = {
        freeScroll: true,
        contain: true,
        pageDots: false,
        prevNextButtons: false,
    }

    return (
        <div>
            <h1>Dashboard</h1>
            {
                (mediaList !== undefined && mediaList.length > 0) ? (
                    <>
                    <h2 className="text-left">Trending Now</h2>
                    <Flickity options={flickityOptions} className="media-list-trending">
                        {
                            mediaList.map(item => (
                                <MediaListBlock key={item.id} item={item} />
                            ))
                        }
                    </Flickity>
                    </>
                ) : (
                    <div>Loading...</div>
                )
            }
            <br />
            <br />
            <br />
            {
                (watchlistMedia !== undefined && watchlistMedia.length > 0) ? (
                    <>
                    <h2 className="text-left">My Watchlist</h2>
                    <Flickity options={flickityOptions} className="media-list-trending">
                        {
                            watchlistMedia.map(item => (
                                <MediaListBlock key={item.id} item={item} />
                            ))
                        }
                    </Flickity>
                    </>
                ) : (
                    <div>Loading...</div>
                )
            }
        </div>
    );
}

export default Dashboard;