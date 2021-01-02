import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Feeds from './apps/homepage/components/feeds/Feeds';
import Tags from './apps/homepage/components/Tags';
import SearchBar from './apps/homepage/components/SearchBar';
import Topics from './apps/homepage/components/Topics';

const React = require('react');

const App = () => (
  <div className="App">
    <Container fluid className="appContainer">
      <Row>
        <SearchBar />
      </Row>
      <Row>
        <Col className=".bg-transparent">
          <Topics />
        </Col>
        <Col lg={6} xl={6}>
          <Feeds />
        </Col>
        <Col>
          <Tags />
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
