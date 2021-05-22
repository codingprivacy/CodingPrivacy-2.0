import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const FeedDescription = (props) => {
  const {
    feedPostName,
    feedPostSeriesName,
  } = props;
  return (
    <>
      <Row className="feedPostName">
        <Col>
          <p className="h3 font-weight-bold">
            {feedPostName}
          </p>
        </Col>
      </Row>
      <Row className="feedPostSeries">
        <Col>
          <p className="h4 font-italic font-weight-bold">
            {feedPostSeriesName}
          </p>
        </Col>
      </Row>
    </>
  );
};

FeedDescription.propTypes = {
  feedPostName: PropTypes.string.isRequired,
  feedPostSeriesName: PropTypes.string.isRequired,
};

export default FeedDescription;
