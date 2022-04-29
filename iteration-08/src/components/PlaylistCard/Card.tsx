import React, { useState } from 'react';
import './card.css';
import playIcon from '../assets/play.svg';
import pauseIcon from '../assets/stop.svg';

export interface CardProps {
  image: string,
  name: string,
  description: string,
}

export const Card = ({ image, name, description } : CardProps) => {
  const [paused, pauseState] = useState(true);

  return (
    <div className="card">
      <div className="card__image-wrapper">
        <img
          alt=""
          className="image image--rounded"
          src={image}
        />
        <button className="card__play" style={!paused ? { display: 'block' } : {}} type="button" onClick={() => pauseState(!paused)}>
          <img alt={paused ? 'Play' : 'Stop'} className="image image--play" src={paused ? playIcon : pauseIcon} />
        </button>
      </div>
      <div className="card__name">
        {name}
      </div>
      <div className="card__description">
        {description}
      </div>
    </div>
  );
};

export default Card;
