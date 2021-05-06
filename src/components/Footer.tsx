import React from 'react';
import './Footer.scss';
import DOWN_ARROW_ICON from '../assets/media/down-arrow.svg';
import FACEBOOK_ICON from '../assets/media/icon-facebook.svg';
import TWITTER_ICON from '../assets/media/icon-twitter.svg';
import YOUTUBE_ICON from '../assets/media/icon-youtube.svg';
import INSTAGRAM_ICON from '../assets/media/icon-instagram.svg';

export const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="contact">
        <div className="navigation">
          <div className="navigation--links">
            <li>Games</li>
            <li>Membership</li>
            <li>Download</li>
          </div>
          <div className="navigation--links">
            <li>Contact Us</li>
            <li>Blog</li>
          </div>
          <div className="navigation--links">
            <li>FAQs</li>
            <li>Service Status</li>
          </div>
        </div>
        <div className="socialAndLanguage">
          <div className="socials">
            <p>Follow Us!</p>
            <div className="icons">
              <img src={FACEBOOK_ICON} alt="facebook" />
              <img src={TWITTER_ICON} alt="twitter" />
              <img src={INSTAGRAM_ICON} alt="instagram" />
              <img src={YOUTUBE_ICON} alt="youtube" />
            </div>
          </div>
          <div className="language">
            <p>Site Language</p>
            <div className="language--dropdown">
              <span>English</span>
              <img src={DOWN_ARROW_ICON} />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="policy">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
        </div>
        <div className="copyright-text">
          <li>Tüm hakları saklıdır.</li>
        </div>
      </div>
    </div>
  );
};
