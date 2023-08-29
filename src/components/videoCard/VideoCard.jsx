import React from 'react';

import './index.scss';

const VideoCard = ({ img, title, onClick }) => {
  return (
    <div className="videoCard">
      <div className="videoCard__img">
        <img src={img} alt="video" />
        {play(onClick)}
      </div>
      <div className="videoCard__title">{title}</div>
    </div>
  );

  function play(onClick) {
    return (
      <div className="videoCard__play" onClick={onClick}>
        <svg width="100%" height="100%" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.8" cx="26.5" cy="26.5" r="26.5" fill="white" />
          <path
            d="M36.4268 24.768C37.7601 25.5378 37.7601 27.4623 36.4268 28.2321L23.0365 35.963C21.7032 36.7328 20.0365 35.7705 20.0365 34.2309L20.0365 18.7692C20.0365 17.2296 21.7032 16.2674 23.0365 17.0372L36.4268 24.768Z"
            fill="#7481FF"
          />
        </svg>
      </div>
    );
  }
};

export default VideoCard;
