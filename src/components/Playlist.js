import useRequest from '../lib/request';

function Playlist() {

    const { data, loading, error } = useRequest('http://localhost:8000/api/plays/2020-12-30');

    return (
        <>
            {error && <div>Something went wrong ...{error.message}</div>}
            {loading && (
                <div>Loading ...</div>
            )}
            {!loading && data !== null && (
                <>
                    <h1>Playlist</h1>
                    <ul>
                        {data.data.map(item => (
                            <li key={item.id}>
                                {item.date}
                                {item.song.artist.name}
                                {item.song.title}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}

export default Playlist;