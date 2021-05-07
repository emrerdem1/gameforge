import React from 'react';
import './Footer.scss';
import DOWN_ARROW_ICON from '../assets/media/down-arrow.svg';
import FACEBOOK_ICON from '../assets/media/icon-facebook.svg';
import TWITTER_ICON from '../assets/media/icon-twitter.svg';
import YOUTUBE_ICON from '../assets/media/icon-youtube.svg';
import INSTAGRAM_ICON from '../assets/media/icon-instagram.svg';
import { ORIGIN_LINKS, SOCIAL_LINKS } from '../common/constants';

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
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FACEBOOK_ICON} alt="facebook" />
              </a>

              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TWITTER_ICON} alt="twitter" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={INSTAGRAM_ICON} alt="instagram" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={YOUTUBE_ICON} alt="youtube" />
              </a>
            </div>
          </div>
          <div className="language">
            <p>Site Language</p>
            <div className="language--dropdown">
              <span>English</span>
              <img src={DOWN_ARROW_ICON} alt="language selector" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="policy">
          <li>
            <a
              href={ORIGIN_LINKS.termOfUse}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a>
          </li>
          <li>
            <a
              href={ORIGIN_LINKS.policy}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href={ORIGIN_LINKS.cookies}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookies
            </a>
          </li>
        </div>
        <div className="copyright-text">
          <li>Tüm hakları saklıdır.</li>
        </div>
      </div>
    </div>
  );
};
