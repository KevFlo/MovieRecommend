import { useState, useEffect } from "react";
import MediaListBlock from "../media/media-list-block";
import Slider from "../components/slider";
import tmdb from "../utils/tmdb";
import watchlist from "../utils/watchlist";

const Dashboard = () => {
    const [mediaList, setMediaList] = useState({});
    const [watchlistMedia, setWatchlistMedia] = useState([]);

    useEffect(() => {
        tmdb.getTrendingMedia().then(data => {
            setMediaList(data);
        });
        setWatchlistMedia(watchlist.getWatchlist());
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {
                (mediaList !== undefined && mediaList.length > 0) ? (
                    <>
                    <h2 className="text-left">Trending Now</h2>
                    <Slider>
                        {
                            mediaList.map(item => (
                                <MediaListBlock key={item.id} item={item} />
                            ))
                        }
                    </Slider>
                    </>
                ) : (
                    <></>
                )
            }
            {
                (watchlistMedia !== undefined && watchlistMedia.length > 0) ? (
                    <>
                    <h2 className="text-left">My Watchlist</h2>
                    <Slider>
                        {
                            watchlistMedia.map(item => (
                                <MediaListBlock key={item.id} item={item} />
                            ))
                        }
                    </Slider>
                    </>
                ) : (
                    <></>
                )
            }
        </div>
    );
}

export default Dashboard;