import React from 'react';
import './smallCard.css';
import SmallCard, { SmallCardProps } from './SmallCard';

export const WelcomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const Cards = [
    { id: 1, photo: 'https://misc.scdn.co/liked-songs/liked-songs-640.png', title: 'Liked songs' },
    { id: 2, photo: 'https://i.scdn.co/image/ab67616d00001e0209cc5969335de8a8352b97f4', title: 'Dreamland' },
    { id: 3, photo: 'https://i.scdn.co/image/ab67616d00001e024ab2520c2c77a1d66b9ee21d', title: 'Dawn FM' },
    { id: 4, photo: 'https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57', title: 'IGOR' },
    { id: 5, photo: 'https://i.scdn.co/image/ab67616d00001e025755e164993798e0c9ef7d7a', title: 'Whenever You Need Somebody' },
    { id: 6, photo: 'https://i.scdn.co/image/ab67616d00001e02f353c2eb0545f7fc7aaf08b8', title: 'Polydans' },
  ];

  return (
    <div className="card-wrapper">
      <div className="welcome-message">
        Good evening
      </div>
      <div className="card-container">
        {Cards.map((props : SmallCardProps) => <SmallCard key={props.id} {...props} />)}
      </div>
    </div>
  );
};

export default WelcomePage;
