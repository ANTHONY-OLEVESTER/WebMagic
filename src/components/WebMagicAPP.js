import React, { useState } from "react";
import GameBoard from "./Chicken-Crossing/GameBoard"; // Chicken Crossing Game
import PlinkoGame from "./Plinko/PlinkoGame"; // Plinko Game
import "./WebMagicAPP.css";

const WebMagicAPP = () => {
  const [activeGame, setActiveGame] = useState(null); // Tracks the currently selected game

  // Toggle to show the selected game
  const handleGameSelect = (game) => {
    setActiveGame(game);
  };

  // Return to the card page
  const handleBackToCards = () => {
    setActiveGame(null);
  };

  return (
    <div className="app">
      {activeGame ? (
        <div className="game-container">
          <button className="back-button" onClick={handleBackToCards}>
            Back to Cards
          </button>
          {activeGame === "chicken" && <GameBoard />}
          {activeGame === "plinko" && <PlinkoGame />}
        </div>
      ) : (
        <div className="cards-container">
          <h1>Choose a Game</h1>
          <div className="cards">
            <div className="card" onClick={() => handleGameSelect("chicken")}>
              <h3>Chicken Crossing</h3>
              <p>Help the chicken cross the road!</p>
            </div>
            <div className="card" onClick={() => handleGameSelect("plinko")}>
              <h3>Plinko</h3>
              <p>Drop balls and score big!</p>
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
