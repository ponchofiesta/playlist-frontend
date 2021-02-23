import { Container, Grid, Row, Col, Placeholder, Message} from 'rsuite';
import { useParams } from "react-router-dom";
import { useContext, useEffect } from 'react';
import useRequest from '../lib/request';
import { useHistory } from "react-router-dom";
import ConfigContext from '../ConfigContext';
import Search from './Search';
import Playlist from './Playlist';


function SearchPage() {

    console.log("search");

    const [context] = useContext(ConfigContext);
    const [playsState, setPlaysUrl] = useRequest(null, null);
    const {term} = useParams();
    const history = useHistory();

    useEffect(() => {
        const params = new URLSearchParams({ term });
        setPlaysUrl(`${context.config.apiUrl}/${context.station.key}/search?${params.toString()}`);
    }, [term, setPlaysUrl, context.config.apiUrl, context.station]);

    const onSearch = term => {
        const params = new URLSearchParams({ term });
        history.push(`/${context.station.key}/search?${params.toString()}`);
    };

    return (
        <Container>
            <Grid>
                <Row>
                    <Col xs={24} sm={24} md={24}>
                        <h2>Suche</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24}>
                        <Search onSearch={onSearch} />
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={24} sm={24} md={24}>
                        {playsState.error && <Message showIcon type="error" title="Fehler" description={playsState.error.message} />}
                        {playsState.loading && (
                            <>
                                <Placeholder.Paragraph rows={2} style={{ marginTop: 30 }} graph="circle" active />
                                <Placeholder.Paragraph rows={2} style={{ marginTop: 30 }} graph="circle" active />
                                <Placeholder.Paragraph rows={2} style={{ marginTop: 30 }} graph="circle" active />
                            </>
                        )}
                        {!playsState.loading && playsState.data && (
                            <Playlist plays={playsState.data.plays} />
                        )}
                    </Col>
                </Row>
            </Grid>
        </Container>
    );
}

export default SearchPage;