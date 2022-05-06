import React from 'react';
import './smallCard.css';

interface SmallCardProps {
  photo: string,
  title: string
}

export const SmallCard = ({ photo, title }: SmallCardProps) => (
  <div className="small-card">
    <div className="image-container image-container--wide">
      <img className="image image--bordered" alt="Card" src={photo} />
    </div>
    <div className="title">
      {title}
    </div>
  </div>
);

export default SmallCard;
