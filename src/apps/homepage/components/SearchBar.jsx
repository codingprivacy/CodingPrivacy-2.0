import './SearchBar.scss';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SearchBar = () => (
  <Container fluid class="searchBarContainer m-auto justify-content-center">
    <Row className="searchBarRow justify-content-lg-center">
      <Col lg={4} md={10} sm={8} xs={8}>
        <input
          type="text"
          placeholder="Search here"
          className="searchBar"
        />
      </Col>
      <Col lg={1} md={2} sm={4} xs={4}>
        <input type="button" className="buttonRed" value="Search" />
      </Col>
    </Row>
  </Container>
);

export default SearchBar;
