import styled from 'styled-components';
import { Avatar } from 'rsuite';

const Container = styled.div`
    padding: 16px 8px;
    white-space: nowrap;
    display: flex;
`;
const Image = styled(Avatar)`
    
`;
const Meta = styled.div`
    padding: 0px 16px;
    min-width: 0;
    flex: 2;
`;
const Artist = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
`;
const Title = styled.div`
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
`;
const Time = styled.div`
    font-size: 1.3em;
    flex: 1;
`;

export {
    Container,
    Image,
    Meta,
    Artist,
    Title,
    Time,
};