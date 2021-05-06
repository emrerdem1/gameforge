import React from 'react';
import './HeroSection.scss';
import LOGO_PATH from '../assets/media/gameforge-logo.png';
import * as BACKGROUND_VIDEO from '../assets/media/gameforge-video.mp4';

export const HeroSection: React.FC = () => {
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
        <video
          id="gameforgeVideo"
          playsInline={true}
          autoPlay={true}
          loop={true}
          muted={true}
          src={BACKGROUND_VIDEO.default}
        />
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <p>
          With the Cloud Gaming, you can join, play, and share games online with
          anyone in the world. Play any game on any device!
        </p>
        <div className="search--bar">
          <span className="search--bar__icon"></span>
          <input type="text" placeholder="Search Games" />
          <span className="search--bar__close"></span>
        </div>
      </div>
    </div>
  );
};
