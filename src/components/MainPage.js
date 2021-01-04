import useRequest from '../lib/request';
import Playlist from './Playlist';
import { Container, Grid, Row, Col, Placeholder } from 'rsuite';

function MainPage() {

    const { data, loading, error } = useRequest('http://localhost:8000/api/plays/2020-12-30');

    return (
        <Container>
            <Grid>
                <Row className="show-grid">
                    <Col xs={24} sm={24} md={12}>
                        <h2>Playlist</h2>
                        {error && <div>Something went wrong ...{error.message}</div>}
                        {loading && (
                            <>
                                <Placeholder.Paragraph rows={2} style={{ marginTop: 30 }} graph="circle" />
                                <Placeholder.Paragraph rows={2} style={{ marginTop: 30 }} graph="circle" />
                                <Placeholder.Paragraph rows={2} style={{ marginTop: 30 }} graph="circle" />
                            </>
                        )}
                        {!loading && data !== null && (
                            <Playlist plays={data.data} />
                        )}
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <Placeholder.Paragraph style={{ marginTop: 30 }} graph="circle" />
                    </Col>
                </Row>
            </Grid>
        </Container>
    );
}

export default MainPage;