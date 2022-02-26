const watchlist = {
    addToWatchlist: (id, type) => {
        // Add to local storage
        const watchlist = localStorage.getItem('watchlist') || [];
        const newWatchlist = [...watchlist, {id, type}];
        localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
    },
    removeFromWatchlist: (id, type) => {
        // Remove from local storage
        const watchlist = localStorage.getItem('watchlist') || [];
        const newWatchlist = watchlist.filter(item => item.id !== id || item.type !== type);
        localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
    },
    isInWatchlist: (id, type) => {
        // Check if in local storage
        const watchlist = localStorage.getItem('watchlist') || [];
        return watchlist.some(item => item.id === id && item.type === type);
    },
    getWatchlist: () => {
        // Get local storage
        const watchlist = localStorage.getItem('watchlist') || [];
        return JSON.parse(watchlist);
    },
    clearWatchlist: () => {
        // Clear local storage
        localStorage.removeItem('watchlist');
    }
}

export default watchlist;