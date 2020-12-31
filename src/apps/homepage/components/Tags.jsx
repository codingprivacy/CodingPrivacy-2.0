import './Tags.scss';
import React from 'react';
import { Container } from 'react-bootstrap';

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
    <Container className="tagsContainer justify-content-center d-flex">
      <div className="tagsdiv justify-content-left">
        <p className="tagHeading h4 font-weight-bold">Tags</p>
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
      </div>
    </Container>
  );
};

export default Tags;
