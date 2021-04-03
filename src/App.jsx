import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Feeds from './apps/homepage/components/feeds/Feeds';
import Tags from './apps/homepage/components/Tags';
import SearchBar from './apps/homepage/components/SearchBar';
import Topics from './apps/homepage/components/Topics';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
// import menu from './components/Navbar/MenuList';
import Home from './components/Home';
import About from './components/About';

const React = require('react');

const App = () => (
  <div className="App">
    <Container fluid className="appContainer">
      <Row>
        <Router>
        <NavBar />
        <Switch>
          {/* { menu.map((item) => <Route exact={item.exact} path={item.path} component={}/>) } */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      </Row>
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
