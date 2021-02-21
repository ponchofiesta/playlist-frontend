import useRequest from '../lib/request';
import Playlist from './Playlist';
import { Container, Grid, Row, Col, Placeholder, Message} from 'rsuite';
import { useParams } from "react-router-dom";
import { useContext, useEffect } from 'react';
import moment from 'moment';
import DayChooser from './DayChooser';
import { useHistory } from "react-router-dom";
import ConfigContext from '../ConfigContext';
import Search from './Search';

function MainPage() {

    const [context] = useContext(ConfigContext);
    const [playsState, setPlaysUrl] = useRequest(null, null);
    const { date = moment().format("YYYY-MM-DD") } = useParams();
    const history = useHistory();

    useEffect(() => {
        setPlaysUrl(`${context.config.apiUrl}/${context.station.key}/${date}`);
    }, [date, setPlaysUrl, context.config.apiUrl, context.station]);

    const onDayChange = date => {
        history.push(`/${context.station.key}/${date}`);
    };
    const onSearch = term => {
        const params = new URLSearchParams({ term });
        history.push(`/${context.station.key}/search?${params.toString()}`);
    };

    return (
        <Container>
            <Grid>
                <Row>
                    <Col xs={24} sm={24} md={24}>
                        <h2>Playlist for {date ?? 'today'}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={12}>
                        <DayChooser defaultDate={date} onSelect={onDayChange} />
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <Search onSearch={onSearch} />
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={24} sm={24} md={12}>
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
                    <Col xs={24} sm={24} md={12}>
                        <Placeholder.Paragraph rows={2} style={{ marginTop: 30 }} graph="circle" active />
                        <Placeholder.Paragraph rows={2} style={{ marginTop: 30 }} graph="circle" active />
                        <Placeholder.Paragraph rows={2} style={{ marginTop: 30 }} graph="circle" active />
                    </Col>
                </Row>
            </Grid>
        </Container>
    );
}

export default MainPage;