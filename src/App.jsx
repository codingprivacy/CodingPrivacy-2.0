import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Feeds from './apps/homepage/components/feeds/Feeds';
import Tags from './apps/homepage/components/Tags';
import SearchBar from './apps/homepage/components/SearchBar';

const React = require('react');

const App = () => (
  <div className="App">
    <Container fluid className="appContainer">
      <Row>
        <SearchBar />
      </Row>
      <Row>
        <Col className=".bg-transparent" />
        <Col lg={6}>
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
