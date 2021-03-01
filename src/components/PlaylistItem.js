// import { Avatar } from 'rsuite';
import { Container, Image, Meta, Time, Title, Artist } from '../styles/playlist';
import Moment from 'react-moment';

function PlaylistItem(props) {
    return (
        <Container>
            <Image circle src={props.image} />
            <Meta>
                <Title>{props.title}</Title>
                <Artist>{props.artist}</Artist>
            </Meta>
            <Time>
                <Moment format="HH:mm">{props.date}</Moment>
            </Time>
        </Container>
    );
}

export default PlaylistItem;