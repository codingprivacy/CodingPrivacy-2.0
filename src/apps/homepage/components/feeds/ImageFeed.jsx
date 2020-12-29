import './ImageFeed.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Heart, ChatSquareDots } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import feedProfileImage from './assets/images/feed_profile2.png';
import feedPost from './assets/images/feedPost.png';

const ImageFeed = (props) => {
  const {
    postData,
    FeedDescription,
  } = props;
  return (
    <Container className="feedComponent">
      <Row>
        <Col lg={3} className="profileInfoCol">
          <Row className="profileInfoRow">
            <Col className="text-center">
              <img
                src={feedProfileImage}
                alt="Profile"
                className="feedProfileImage img-fluid"
              />
              <p className="feedProfileName h6">
                {postData.profileName}
              </p>
              <p className="feedUploadedDate h6">
                {postData.uploadedDate}
              </p>
            </Col>
          </Row>
          <Row className="feedLikesCommentsRow">
            <Col className="feedLikesCommentsCol">
              <Row className="likeCommentRow">
                <Col>
                  <Heart className="likeAndCommentIcon img-fluid" />
                  <span className="likesAndCommentsText">
                    &nbsp;&nbsp;
                    { postData.noOfLikes }
                  </span>
                </Col>
              </Row>
              <Row className="likeCommentRow">
                <Col>
                  <ChatSquareDots className="likeAndCommentIcon img-fluid" />
                  <span className="likesAndCommentsText">
                    &nbsp;&nbsp;
                    { postData.noOfComments }
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="noLargeDisplay">
            <input type="button" className="buttonRed" value="Save" />
          </Row>
        </Col>
        <Col lg={7} className="my-auto feedPostImageCol">
          <img
            src={feedPost}
            alt="Post"
            className="feedImage img-fluid my-auto"
            centered
          />
        </Col>
        <Col lg={2} className="saveCol text-center">
          <input type="button" className="buttonRed onlyLargeDisplay" value="Save" />
        </Col>
      </Row>
      <FeedDescription
        feedPostName={postData.feedPostName}
        feedPostSeriesName={postData.feedPostSeriesName}
      />
    </Container>
  );
};

ImageFeed.propTypes = {
  postData: PropTypes.isRequired,
  FeedDescription: PropTypes.isRequired,
};

export default ImageFeed;
