import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Feeds from './apps/homepage/components/feeds/Feeds';

const React = require('react');

const App = () => (
  <div className="App">
    <Container fluid className="appContainer">
      <Row>
        <Col className=".bg-transparent" />
        <Col lg={6}>
          <Feeds />
        </Col>
        <Col />
      </Row>
    </Container>
  </div>
);

export default App;
