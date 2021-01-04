import PlaylistItem from './PlaylistItem';

function Playlist(props) {

    return (
        <>
            {props.plays && (
                <div>
                    {props.plays.map(item => (
                        <PlaylistItem key={item.id} date={item.date} artist={item.song.artist.name} title={item.song.title} />
                    ))}
                </div>
            )}
        </>
    );
}

export default Playlist;