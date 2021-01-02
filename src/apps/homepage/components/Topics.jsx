import './Topics.scss';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Topics = () => {
  const topicsList = [
    {
      topicName: 'GUI Development using Python - Tkinter',
      topicUrl: '/topics/tkinter',
    },
    {
      topicName: 'Data analytics in Python',
      topicUrl: '/topics/tkinter',
    },
    {
      topicName: 'Machine Learning in Python',
      topicUrl: '/topics/tkinter',
    },
    {
      topicName: 'GUI Development using Python - Tkinter',
      topicUrl: '/topics/tkinter',
    },
    {
      topicName: 'Data analytics in Python',
      topicUrl: '/topics/tkinter',
    },
    {
      topicName: 'Machine Learning in Python',
      topicUrl: '/topics/tkinter',
    },
    {
      topicName: 'GUI Development using Python - Tkinter',
      topicUrl: '/topics/tkinter',
    },
    {
      topicName: 'Data analytics in Python',
      topicUrl: '/topics/tkinter',
    },
    {
      topicName: 'Machine Learning in Python',
      topicUrl: '/topics/tkinter',
    },
  ];
  const topics = 'Topics';
  return (
    <Container className="topicsContainer">
      <Row>
        <Col lg={10} sm={12} md={12} xs={12} className="noGutters">
          <p className="tagHeading h3 font-weight-bold">{topics}</p>
          {
            topicsList.map((topic) => (
              <button
                type="button"
                className="topicItem"
              >
                {topic.topicName}
              </button>
            ))
          }
        </Col>
      </Row>
    </Container>
  );
};

export default Topics;
