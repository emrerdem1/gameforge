import React, { useState } from 'react';
import './HeroSection.scss';
import LOGO_PATH from '../assets/media/gameforge-logo.png';
import SEARCH_ICON_PATH from '../assets/media/search.svg';
import CLOSE_ICON_PATH from '../assets/media/close.svg';
import * as BACKGROUND_VIDEO_PATH from '../assets/media/gameforge-video.mp4';
import { ORIGIN_LINKS } from '../common/constants';

export const HeroSection: React.FC = (): JSX.Element => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="hero-container">
      <header className="header">
        <a
          href={ORIGIN_LINKS.homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="header--logo" alt="gameforce now" src={LOGO_PATH} />
        </a>
        <div className="header--items">
          <li>
            <a
              href={ORIGIN_LINKS.games}
              target="_blank"
              rel="noopener noreferrer"
            >
              Games
            </a>
          </li>
          <li>
            <a
              href={ORIGIN_LINKS.membership}
              target="_blank"
              rel="noopener noreferrer"
            >
              Membership
            </a>
          </li>
          <li>
            <a
              href={ORIGIN_LINKS.download}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </li>
          <li>
            <a
              href={ORIGIN_LINKS.blog}
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href={ORIGIN_LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
            >
              Support
            </a>
          </li>
          <a href={ORIGIN_LINKS.play} target="_blank" rel="noopener noreferrer">
            <button>Let's Play</button>
          </a>
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
              <div
                className="search--bar__close"
                onClick={() => setSearchInput('')}
              >
                <img
                  className="search--bar__close-icon"
                  src={CLOSE_ICON_PATH}
                  alt="close icon"
                />
              </div>
              <div className="searchPreview"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
