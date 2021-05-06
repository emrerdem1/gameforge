import React from 'react';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="contact">
        <div className="navigation">
          <div>
            <li>Games</li>
            <li>Membership</li>
            <li>Download</li>
          </div>
          <div>
            <li>Contact Us</li>
            <li>Blog</li>
          </div>
          <div>
            <li>FAQs</li>
            <li>Service Status</li>
          </div>
        </div>
        <div className="socials">
          <span>Follow Us!</span>
          <div className="icons"></div>
        </div>
        <div className="language">
          <span>Site Language</span>
          <div>English</div>
        </div>
      </div>
      <div className="copyright">
        <div className="policy">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
        </div>
        <div className="copyright-text">Tüm hakları saklıdır.</div>
      </div>
    </div>
  );
};
