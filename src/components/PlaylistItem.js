// import { Avatar } from 'rsuite';
import * as styles from '../styles/playlist';
import Moment from 'react-moment';

function PlaylistItem(props) {
    return (
        <styles.PlaylistItemContainer>
            <styles.PlaylistItemImage circle src={props.image} />
            <styles.PlaylistItemMeta>
                <styles.PlaylistItemTitle>{props.title}</styles.PlaylistItemTitle>
                <styles.PlaylistItemArtist>{props.artist}</styles.PlaylistItemArtist>
            </styles.PlaylistItemMeta>
            <styles.PlaylistItemTime>
                <Moment format="HH:mm">{props.date}</Moment>
            </styles.PlaylistItemTime>
        </styles.PlaylistItemContainer>
    );
}

export default PlaylistItem;