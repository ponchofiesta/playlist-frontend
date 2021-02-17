import useRequest from '../lib/request';
import Playlist from './Playlist';
import { Container, Grid, Row, Col, Placeholder, Message, Dropdown, Calendar, Loader } from 'rsuite';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import moment from 'moment';

function MainPage() {

    const [playsState, setPlaysUrl] = useRequest(null, null);
    const [monthState, setMonthUrl] = useRequest(null, null);
    const { date = moment().format("YYYY-MM-DD") } = useParams();

    useEffect(() => {
        setPlaysUrl(`http://localhost:8080/fritz/${date}`);
    }, [date, setPlaysUrl]);

    return (
        <Container>
            <Grid>
                <Row>
                    <Col>
                        <Dropdown title="Date" onOpen={() => setMonthUrl(`http://localhost:8080/fritz/month/${date}`)}>
                            {monthState.error && <Message showIcon type="error" title="Fehler" description={monthState.error.message} />}
                            {monthState.loading && (
                                 <Loader size="lg" center />
                            )}
                            {!monthState.loading && monthState.data && (
                                <Calendar bordered renderCell={() => null} />
                            )}
                        </Dropdown>
                        
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