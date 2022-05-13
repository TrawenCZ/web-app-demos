import React, { useState } from 'react';
import './playbar.css';
import playIcon from '../assets/play.svg';
import pauseIcon from '../assets/stop.svg';

export const Playbar = () => {
  const [paused, playState] = useState(true);
  const [followed, followState] = useState(false);

  return (
    <div className="bar">
      <button className="bar__play" type="button" onClick={() => playState(!paused)}>
        <img alt="Play" className="image" src={paused ? playIcon : pauseIcon} />
      </button>
      <button className="bar__follow" type="button" onClick={() => followState(!followed)}>
        {followed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default Playbar;
