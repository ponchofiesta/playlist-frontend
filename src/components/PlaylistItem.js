import styled from 'styled-components';
import { Avatar } from 'rsuite';

function PlaylistItem(props) {

    const Item = styled.div`
        border: 1px solid red;
    `;

    return (
        <Item>
            <Avatar circle src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" />
            <div>
                <p>{props.title}</p>
                <p>{props.artist}</p>
            </div>
        </Item>
    );
}

export default PlaylistItem;