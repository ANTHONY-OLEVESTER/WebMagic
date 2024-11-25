import React, { useState, useEffect } from "react";
import Chicken from "./Chicken";
import Tile from "./Tile";
import Car from "./Car";
import "./Game.css";

const GameBoard = () => {
  // Game state variables
  const [money, setMoney] = useState(0); // Total money earned
  const [chickenPosition, setChickenPosition] = useState(0); // Chicken's current tile position
  const [tiles, setTiles] = useState([]); // Array of tiles with outcomes
  const [gameOver, setGameOver] = useState(false); // Tracks game over state

  // Initialize the game board with random tiles
  useEffect(() => {
    const newTiles = Array(10).fill(null).map(() => {
      return Math.random() > 0.7 ? "trap" : "double"; // 30% chance of a trap
    });
    setTiles(newTiles);
  }, []);

  // Move the chicken forward
  const moveChicken = () => {
    if (gameOver || chickenPosition >= tiles.length - 1) return; // Prevent movement if game over or at the last tile

    const nextPosition = chickenPosition + 1;
    const outcome = tiles[nextPosition];

    if (outcome === "trap") {
      setGameOver(true); // End the game if the chicken lands on a trap
    } else if (outcome === "double") {
      setMoney(prevMoney => prevMoney * 2 || 1); // Double the money (minimum of $1)
    }

    setChickenPosition(nextPosition); // Update chicken's position
  };

  // Cash out and reset the game
  const cashOut = () => {
    alert(`You cashed out with $${money}!`);
    resetGame();
  };

  // Reset the game to the initial state
  const resetGame = () => {
    setMoney(0);
    setChickenPosition(0);
    setGameOver(false);
    const newTiles = Array(10).fill(null).map(() => {
      return Math.random() > 0.7 ? "trap" : "double";
    });
    setTiles(newTiles);
  };

  return (
    <div className="game-board">
      <h1>Chicken Crossing</h1>
      <p>Money: ${money}</p>

      <div className="controls">
        <button onClick={moveChicken} disabled={gameOver}>
          Move Chicken
        </button>
        <button onClick={cashOut} disabled={gameOver || chickenPosition === 0}>
          Cash Out
        </button>
        <button onClick={resetGame}>Restart Game</button>
      </div>

      <div className="road">
        <Chicken position={chickenPosition} />
        {tiles.map((tile, index) => (
          <Tile key={index} type={tile} isCurrent={index === chickenPosition} />
        ))}
        <Car />
        <Car />
      </div>

      {gameOver && <p className="game-over">Game Over! You hit a trap!</p>}
    </div>
  );
};

export default GameBoard;
