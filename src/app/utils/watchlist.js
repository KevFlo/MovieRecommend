const watchlist = {
    addToWatchlist: (id, type, title, poster, year, language) => {
        // Add to local storage
        const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        if (!watchlist.find(item => item.id === id && item.type === type)) {
            const newWatchlist = [...watchlist, {id, type, title, poster, year, language}];
            localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
        }
    },
    removeFromWatchlist: (id, type) => {
        // Remove from local storage
        const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        const newWatchlist = watchlist.filter(item => item.id !== id || item.type !== type);
        localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
    },
    isInWatchlist: (id, type) => {
        // Check if in local storage
        const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        return watchlist.some(item => item.id === id && item.type === type);
    },
    getWatchlist: () => {
        // Get local storage
        return JSON.parse(localStorage.getItem('watchlist')) || [];
    },
    clearWatchlist: () => {
        // Clear local storage
        localStorage.removeItem('watchlist');
    }
}

export default watchlist;