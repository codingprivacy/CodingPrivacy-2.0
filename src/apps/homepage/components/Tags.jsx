import './Tags.scss';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Tags = () => {
  const tagsList = [
    {
      tagName: 'html',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'python',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'javascript',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'java',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'machinelearning',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'php',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'datascience',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'devops',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'gui',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'go',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'java',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'machinelearning',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'php',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'datascience',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'devops',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'gui',
      tagUrl: '/tags/html',
    },
    {
      tagName: 'go',
      tagUrl: '/tags/html',
    },
  ];
  return (
    <Container xl={12} className="tagsContainer">
      <Row>
        <Col lg={{ span: 10, offset: 2 }} sm={12} md={12} xs={12} className="noGutters">
          <p className="tagHeading h3 font-weight-bold">Tags</p>
          {
          tagsList.map((tag) => (
            <p className="tag h5">
              <a href={tag.tagUrl}>
                #
                {tag.tagName}
              </a>
            </p>
          ))
        }
        </Col>
      </Row>
    </Container>
  );
};

export default Tags;
