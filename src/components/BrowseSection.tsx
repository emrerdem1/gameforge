import React from 'react';
import './BrowseSection.scss';

export const BrowseSection: React.FC = () => {
  return (
    <div className="browse-container">
      <div className="filters">
        <h2>Browse Games</h2>
        <div className="option-list"></div>
      </div>
      <div className="games">
        <div className="dropdown"></div>
        <div className="game-list"></div>
      </div>
    </div>
  );
};
