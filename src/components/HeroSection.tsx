import React, { useState } from 'react';
import './HeroSection.scss';
import LOGO_PATH from '../assets/media/gameforge-logo.png';
import SEARCH_ICON_PATH from '../assets/media/search.svg';
import CLOSE_ICON_PATH from '../assets/media/close.svg';
import * as BACKGROUND_VIDEO_PATH from '../assets/media/gameforge-video.mp4';

export const HeroSection: React.FC = (): JSX.Element => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="hero-container">
      <header className="header">
        <img className="header--logo" alt="gameforce now" src={LOGO_PATH} />
        <div className="header--items">
          <li>Games</li>
          <li>Membership</li>
          <li>Download</li>
          <li>Blog</li>
          <li>Support</li>
          <button>Let's Play</button>
        </div>
      </header>
      <div className="search">
        <div className="video-wrapper">
          <video
            id="gameforgeVideo"
            playsInline={true}
            autoPlay={true}
            loop={true}
            muted={true}
            src={BACKGROUND_VIDEO_PATH.default}
          />
        </div>
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <p>
          With the Cloud Gaming, you can join, play, and share games online with
          anyone in the world. Play any game on any device!
        </p>
        <div className="search--bar">
          <img
            className="search--bar__icon"
            src={SEARCH_ICON_PATH}
            alt="search icon"
          />
          <input
            type="text"
            placeholder="Search Games"
            onChange={handleSearch}
            value={searchInput}
          />
          {searchInput && (
            <>
              <a
                className="search--bar__close"
                onClick={() => setSearchInput('')}
                href="#"
              >
                <img
                  className="search--bar__close-icon"
                  src={CLOSE_ICON_PATH}
                  alt="close icon"
                />
              </a>
              <div className="searchPreview"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
