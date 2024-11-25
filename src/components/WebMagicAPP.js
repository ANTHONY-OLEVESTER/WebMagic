import React, { useState } from "react";
import GameBoard from "./Chicken-Crossing/GameBoard";
import "./WebMagicAPP.css";

const WebMagicAPP = () => {
  const [showGame, setShowGame] = useState(false); // Controls whether the game is displayed

  // Toggle to show the game or the card page
  const handleCardClick = () => {
    setShowGame(true);
  };

  // Return to the card page
  const handleBackToCards = () => {
    setShowGame(false);
  };

  return (
    <div className="app">
      {showGame ? (
        <div className="game-container">
          <button className="back-button" onClick={handleBackToCards}>
            Back to Cards
          </button>
          <GameBoard />
        </div>
      ) : (
        <div className="cards-container">
          <h1>Choose a Game</h1>
          <div className="cards">
            {/* Example cards */}
            <div className="card" onClick={handleCardClick}>
              <h3>Chicken Crossing</h3>
              <p>Help the chicken cross the road!</p>
            </div>
            <div className="card">
              <h3>Game 2</h3>
              <p>Coming soon...</p>
            </div>
            <div className="card">
              <h3>Game 3</h3>
              <p>Coming soon...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebMagicAPP;
