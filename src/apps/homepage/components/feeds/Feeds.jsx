import React from 'react';
import ImageFeed from './ImageFeed';
import NormalFeed from './NormalFeed';
import FeedDescription from './FeedDescription';

const Feeds = () => {
  const rows = [
    {
      profileName: 'Mathew Capaldi',
      uploadedDate: 'Dec 6, 2020',
      noOfLikes: '1000',
      noOfComments: '500',
      feedPostName: '12. Creating Checkbutton App In Tkinter (Python)',
      feedPostSeriesName: 'GUI development using Python - Tkinter',
      feedProfileImage: './assets/images/feed_profile2.png',
      feedPost: './assets/images/feedPost.png',
    },
    {
      profileName: 'Mathew Capaldi',
      uploadedDate: 'Dec 6, 2020',
      noOfLikes: '1000',
      noOfComments: '500',
      feedPostName: '12. Creating Checkbutton App In Tkinter (Python)',
      feedPostSeriesName: 'GUI development using Python - Tkinter',
      feedProfileImage: './assets/images/feed_profile2.png',
    },
  ];
  return (
    <div className="feedsCol">
      <p className="tagHeading h4 font-weight-bold">Feeds</p>
      {
      rows.map((item) => (
        <div>
          { item.feedPost
            ? (
              <ImageFeed
                className="feed"
                postData={item}
                FeedDescription={FeedDescription}
              />
            )
            : (
              <NormalFeed
                className="feed"
                postData={item}
                FeedDescription={FeedDescription}
              />
            )}
        </div>
      ))
      }
    </div>
  );
};

export default Feeds;
