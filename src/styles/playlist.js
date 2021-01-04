import styled from 'styled-components';
import { Avatar } from 'rsuite';

const PlaylistItemContainer = styled.div`
    padding: 16px 8px;
    white-space: nowrap;
    display: flex;
`;
const PlaylistItemImage = styled(Avatar)`
    
`;
const PlaylistItemMeta = styled.div`
    padding: 0px 16px;
    min-width: 0;
    flex: 2;
`;
const PlaylistItemArtist = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
`;
const PlaylistItemTitle = styled.div`
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
`;
const PlaylistItemTime = styled.div`
    font-size: 1.3em;
    flex: 1;
`;

export {
    PlaylistItemContainer,
    PlaylistItemImage,
    PlaylistItemMeta,
    PlaylistItemArtist,
    PlaylistItemTitle,
    PlaylistItemTime,
};