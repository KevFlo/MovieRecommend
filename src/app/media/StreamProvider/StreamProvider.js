import "./StreamProvider.css";

const StreamProvider = ({providers}) => {
    return (
        <div className="stream-provider">
            <h3 className="stream-provider-title">Watch On:</h3>
            <div className="stream-provider-list">
                { providers.map(provider => (
                    <div className="stream-provider-list-item" key={provider.id}>
                        <img className="stream-provider-logo" src={`https://image.tmdb.org/t/p/original${provider.logo_path}`} alt={provider.name} />
                    </div>
                )) }
            </div>
        </div>
    );
}

export default StreamProvider;