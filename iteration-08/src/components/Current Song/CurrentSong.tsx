import React, { useState } from 'react';
import './currentSong.css';
import heartIcon from '../assets/heart.svg';

export interface CurrentSongProps {
  image: string,
  songName: string,
  artistName: string,
}

export const CurrentSong = ({ image, songName, artistName } : CurrentSongProps) => {
  const [favorited, favoriteState] = useState(false);
  return (
    <div className="song">
      <div className="image-wrapper">
        <img className="image" src={image} alt="Song" />
      </div>
      <div className="song__info">
        <p className="song__name">
          {songName}
        </p>
        <p className="song__artist">{artistName}</p>
      </div>
      <button className="button" type="button" onClick={() => favoriteState(!favorited)}>
        <img className={favorited ? 'image--green' : 'image'} alt="Like a song" src={heartIcon} />
      </button>
    </div>
  );
};

export default CurrentSong;
