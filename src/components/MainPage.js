import useRequest from '../lib/request';
import Playlist from './Playlist';
import { Container, Grid, Row, Col, Placeholder, Message } from 'rsuite';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import moment from 'moment';
import DayChooser from './DayChooser';
import { useHistory } from "react-router-dom";

function MainPage(props) {

    const [playsState, setPlaysUrl] = useRequest(null, null);
    const { date = moment().format("YYYY-MM-DD") } = useParams();
    const history = useHistory();

    useEffect(() => {
        setPlaysUrl(`${props.config.apiUrl}/${props.station.key}/${date}`);
    }, [date, setPlaysUrl, props.config.apiUrl, props.station]);

    const onDayChange = date => {
        history.push(`/${props.station}/${date}`);
    };

    return (
        <Container>
            <Grid>
                <Row>
                    <Col>
                        <DayChooser config={props.config} station={props.station} date={date} onSelect={onDayChange} />
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row className="show-grid">
                    <Col xs={24} sm={24} md={12}>
                        <h2>Playlist for {date ?? 'today'}</h2>
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