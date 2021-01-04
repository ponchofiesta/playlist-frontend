import useRequest from '../lib/request';
import Playlist from './Playlist';
import { Container, Grid, Row, Col, Placeholder, Message } from 'rsuite';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

function MainPage() {

    const [{ data, loading, error }, setUrl] = useRequest(null, null);
    const { date } = useParams();

    useEffect(() => {
        if (date) {
            setUrl(`http://localhost:8000/api/plays/${date}`);
        } else {
            setUrl(`http://localhost:8000/api/plays/2020-12-30`);
        }
    }, [date, setUrl]);

    return (
        <Container>
            <Grid>
                <Row className="show-grid">
                    <Col xs={24} sm={24} md={12}>
                        <h2>Playlist for {date ? date : 'today'}</h2>
                        {error && <Message showIcon type="error" title="Fehler" description={error.message} />}
                        {loading && (
                            <>
                                <Placeholder.Paragraph rows={2} style={{ marginTop: 30 }} graph="circle" active />
                                <Placeholder.Paragraph rows={2} style={{ marginTop: 30 }} graph="circle" active />
                                <Placeholder.Paragraph rows={2} style={{ marginTop: 30 }} graph="circle" active />
                            </>
                        )}
                        {!loading && data && (
                            <Playlist plays={data.data} />
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