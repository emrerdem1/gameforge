import React from 'react';
import './BrowseSection.scss';
import COLLAPSE_ICON from '../assets/media/collapse-arrow.svg';
import POLYGON from '../assets/media/polygon.png';

export const BrowseSection: React.FC = () => {
  return (
    <div className="browse-container">
      <div className="filters">
        <h2>Browse Games</h2>
        <div className="option-list">
          <div className="option-list--item">
            <div className="collapse-header">State</div>
            <div className="selection-list">
              <div className="selection-list--item">
                <div className="checkbox-trigger">
                  <input type="checkbox"></input>
                </div>
                <span>Available</span>
              </div>
              <div className="selection-list--item">
                <div className="checkbox-trigger">
                  <input type="checkbox"></input>
                </div>
                <span>Patching</span>
              </div>
              <div className="selection-list--item">
                <div className="checkbox-trigger">
                  <input type="checkbox"></input>
                </div>
                <span>Maintenance</span>
              </div>
            </div>
          </div>
          <div className="option-list--item">
            <div className="collapse-header">State</div>
            <div className="selection-list">
              <div className="selection-list--item">
                <div className="checkbox-trigger">
                  <input type="checkbox"></input>
                </div>
                <span>Available</span>
              </div>
              <div className="selection-list--item">
                <div className="checkbox-trigger">
                  <input type="checkbox"></input>
                </div>
                <span>Patching</span>
              </div>
              <div className="selection-list--item">
                <div className="checkbox-trigger">
                  <input type="checkbox"></input>
                </div>
                <span>Maintenance</span>
              </div>
            </div>
            <div className="selection-list">
              <div className="selection-list--item">
                <div className="checkbox-trigger">
                  <input type="checkbox"></input>
                </div>
                <span>Available</span>
              </div>
              <div className="selection-list--item">
                <div className="checkbox-trigger">
                  <input type="checkbox"></input>
                </div>
                <span>Patching</span>
              </div>
              <div className="selection-list--item">
                <div className="checkbox-trigger">
                  <input type="checkbox"></input>
                </div>
                <span>Maintenance</span>
              </div>
            </div>
            <div className="selection-list">
              <div className="selection-list--item">
                <div className="checkbox-trigger">
                  <input type="checkbox"></input>
                </div>
                <span>Available</span>
              </div>
              <div className="selection-list--item">
                <div className="checkbox-trigger">
                  <input type="checkbox"></input>
                </div>
                <span>Patching</span>
              </div>
              <div className="selection-list--item">
                <div className="checkbox-trigger">
                  <input type="checkbox"></input>
                </div>
                <span>Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="games">
        <div className="dropdown">
          <div className="button-wrapper">
            <button className="dropdown-button">Title A-Z</button>
            <img src={COLLAPSE_ICON} alt="collapse icon" />
          </div>
          <div className="dropdown-items">
            <a href="#">Title A-Z</a>
            <a href="#">Title Z-A</a>
          </div>
        </div>
        <div className="game-list">
          <div className="game-list--item">
            <div className="game-list--item_letter">
              <span>A</span>
              <img src={POLYGON} alt="green polygon" />
            </div>
            <div className="game-list--item_bullets">
              <p>Lorem ipsum dolor sit</p>
              <p>Adipiscing consectetur dolor</p>
              <p>Consectetur lorem adipiscing</p>
              <p>Adipiscing consectetur dolor</p>
              <p>Consectetur lorem adipiscing</p>
              <p>Adipiscing consectetur dolor</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Adipiscing consectetur dolor</p>
              <p>Consectetur lorem adipiscing</p>
              <p>Adipiscing consectetur dolor</p>
              <p>Consectetur lorem adipiscing</p>
              <p>Adipiscing consectetur dolor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
