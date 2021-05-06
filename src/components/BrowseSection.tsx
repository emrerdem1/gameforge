import React from 'react';
import './BrowseSection.scss';

export const BrowseSection: React.FC = () => {
  return (
    <div className="browse-container">
      <div className="filters">
        <h2>Browse Games</h2>
        <div className="option-list">
          <div className="option-list--item">
            <div className="collapse-header">State</div>
            <div className="selection-list">
              <div>Available</div>
              <div>Patching</div>
              <div>Maintenance</div>
            </div>
          </div>
        </div>
      </div>
      <div className="games">
        <div className="dropdown">Title A-Z</div>
        <div className="game-list">
          <div className="game-list--item">
            <div className="game-list--item_letter"></div>
            <div className="game-list--item_bullets">
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
