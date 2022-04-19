import React from 'react';
import './smallCard.css';

export const WelcomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const Cards = [
    { photo: 'https://misc.scdn.co/liked-songs/liked-songs-640.png', title: 'Liked songs' },
    { photo: 'https://i.scdn.co/image/ab67616d00001e0209cc5969335de8a8352b97f4', title: 'Dreamland' },
    { photo: 'https://i.scdn.co/image/ab67616d00001e024ab2520c2c77a1d66b9ee21d', title: 'Dawn FM' },
    { photo: 'https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57', title: 'IGOR' },
    { photo: 'https://i.scdn.co/image/ab67616d00001e025755e164993798e0c9ef7d7a', title: 'Whenever You Need Somebody' },
    { photo: 'https://i.scdn.co/image/ab67616d00001e02f353c2eb0545f7fc7aaf08b8', title: 'Polydans' },
  ];

  return (
    <div className="card-wrapper">
      <div className="welcome-message">
        Good evening
      </div>
      <div className="card-container">
        {/* TODO list of GenericCard  */}
      </div>
    </div>
  );
};

export default WelcomePage;
