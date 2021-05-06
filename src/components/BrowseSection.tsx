import React, { useState } from 'react';
import './BrowseSection.scss';
import POLYGON from '../assets/media/polygon.png';

const SortingType = {
  ascending: 'ASCENDING',
  descending: 'DESCENDING',
};

export const BrowseSection: React.FC = () => {
  const [dropdownSelection, setDropdownSelection] = useState<string>(
    SortingType.ascending
  );
  const [isDropdownShown, setIsDropdownShown] = useState<boolean>(false);

  const handleDropdownSelection = (sortingType: string): void => {
    setIsDropdownShown(false);
    setDropdownSelection(sortingType);
  };

  const sortingButtonText =
    dropdownSelection === SortingType.ascending ? 'Title A-Z' : 'Title Z-A';

  const gameListItems = generateMultipleGameList();

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
            <button
              className="dropdown-button"
              onClick={() => setIsDropdownShown(!isDropdownShown)}
            >
              {sortingButtonText}
            </button>
            {isDropdownShown && (
              <div className="dropdown-options">
                <button
                  className={`dropdown-button ${
                    dropdownSelection === SortingType.ascending
                      ? 'highlightText'
                      : ''
                  }`}
                  onClick={() => handleDropdownSelection(SortingType.ascending)}
                >
                  Title A-Z
                </button>
                <button
                  className={`dropdown-button ${
                    dropdownSelection === SortingType.descending
                      ? 'highlightText'
                      : ''
                  }`}
                  onClick={() =>
                    handleDropdownSelection(SortingType.descending)
                  }
                >
                  Title Z-A
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="game-list">
          {gameListItems.map((game, idx) => (
            <div key={game.letter + idx} className="game-list--item">
              <div className="game-list--item_letter">
                <span>{game.letter}</span>
                <img src={POLYGON} alt="green polygon" />
              </div>
              <div className="game-list--item_bullets">
                {game.bullets.map((bullet) => (
                  <p>{bullet}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GAME_LIST_LETTERS = ['A', 'B', 'C', 'D', 'E'];
const RANDOM_BULLET_POINTS = [
  'A missing slice of pizza inspires Namco.',
  'Video game fans go ape over Nintendo’s',
  'Disney taps into the video game craze.',
  'Multiplayer play takes a huge step forward',
  'Alexey Pajitnov creates Tetris, a puzzle game.',
  'John Madden Football introduces gridiron.',
  'World of Warcraft: Burning Crusade Classic',
  'Blizzard has also helpfully laid out',
  'The Titanfall 2 free weekend has finished',
  'Battle pass should not differ from previous',
];

interface MultiGameListSpec {
  letter: string;
  bullets: string[];
}
/// Make a random distributed bullets points to make them look good.
const generateMultipleGameList = (): MultiGameListSpec[] => {
  return GAME_LIST_LETTERS.map((letter) => ({
    letter,
    bullets: RANDOM_BULLET_POINTS,
  }));
};
