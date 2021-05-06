import React from 'react';
import './HeroSection.scss';

const LOGO_PATH = '/src/images/gameforge-logo.png';

export const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <header className="header">
        <img className="header--logo" src={LOGO_PATH}></img>
        <div className="header--items">
          <li>Games</li>
          <li>Membership</li>
          <li>Download</li>
          <li>Blog</li>
          <li>Support</li>
        </div>
        <button className="header--button">Let's Play</button>
      </header>
      <div className="search">
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <p>
          With the Cloud Gaming, you can join, play, and share games online with
          anyone in the world. Play any game on any device!
        </p>
        <div className="search--bar"></div>
      </div>
    </div>
  );
};
