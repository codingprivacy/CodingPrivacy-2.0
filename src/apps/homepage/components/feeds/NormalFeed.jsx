import './NormalFeed.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Heart, ChatSquareDots } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import feedProfileImage from './assets/images/feed_profile2.png';

const FeedTopView = (props) => {
  const {
    postData,
  } = props;
  return (
    <Row>
      <Col lg={3} xs={4} sm={3} md={{ span: 3 }}>
        <Row className="profileInfoRow text-center">
          <Col xs={12} sm={12} md={12} lg={12}>
            <img
              src={feedProfileImage}
              alt="Profile"
              className="feedProfileImage img-fluid"
            />
          </Col>
          <Col className="normalFeedProfileCol">
            <p className="feedProfileName h6">
              {postData.profileName}
            </p>
            <p className="feedUploadedDate h6">
              {postData.uploadedDate}
            </p>
          </Col>
        </Row>
      </Col>
      <Col className="feedLikesCommentsCol text-center noGutters m-auto" xs={3} sm={4} md={{ span: 3 }} lg={7}>
        <Row className="likeCommentRow normalFeedLikeCommentRow">
          <Col>
            <Heart className="likeAndCommentIcon img-fluid" />
            <span className="likesAndCommentsText">
              &nbsp;&nbsp;
              { postData.noOfLikes }
            </span>
          </Col>
        </Row>
        <Row className="likeCommentRow normalFeedLikeCommentRow">
          <Col>
            <ChatSquareDots className="likeAndCommentIcon img-fluid" />
            <span className="likesAndCommentsText ">
              &nbsp;&nbsp;
              { postData.noOfComments }
            </span>
          </Col>
        </Row>
      </Col>
      <Col className="m-auto text-center" lg={{ span: 2, offset: 2 }} sm={4} xs={4} md={5}>
        <input type="button" className="buttonRed " value="Save" />
      </Col>
    </Row>
  );
};

const NormalFeed = (props) => {
  const {
    postData,
    FeedDescription,
  } = props;
  return (
    <Container className="feedComponent col-xl-12">
      <FeedTopView postData={postData} />
      <FeedDescription
        feedPostName={postData.feedPostName}
        feedPostSeriesName={postData.feedPostSeriesName}
      />
    </Container>
  );
};

FeedTopView.propTypes = {
  postData: PropTypes.isRequired,
};

NormalFeed.propTypes = {
  postData: PropTypes.isRequired,
  FeedDescription: PropTypes.isRequired,
};

export default NormalFeed;
export { FeedTopView };
