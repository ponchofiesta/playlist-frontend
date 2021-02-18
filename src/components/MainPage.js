import useRequest from '../lib/request';
import Playlist from './Playlist';
import { Container, Grid, Row, Col, Placeholder, Message } from 'rsuite';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import moment from 'moment';
import DayChooser from './DayChooser';

function MainPage(props) {

    const [playsState, setPlaysUrl] = useRequest(null, null);
    const { date = moment().format("YYYY-MM-DD") } = useParams();

    useEffect(() => {
        setPlaysUrl(`${props.config.apiUrl}/${props.station.key}/${date}`);
    }, [date, setPlaysUrl, props.config.apiUrl, props.station]);

    return (
        <Container>
            <Grid>
                <Row>
                    <Col>
                        <DayChooser config={props.config} station={props.station} date={date} />
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
                            <Playlist plays={playsState.data.data} />
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