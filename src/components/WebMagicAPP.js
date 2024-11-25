import React, { useState } from "react";
import GameBoard from "./Chicken-Crossing/GameBoard"; // Chicken Crossing Game
import PlinkoGame from "./Plinko/PlinkoGame"; // Plinko Game
import GoogleLogin from "./1Login/GoogleLogin"; // Google Login Script
import { FaHome, FaGamepad, FaPuzzlePiece, FaLock } from "react-icons/fa"; // Icons for navigation
import "./WebMagicAPP.css";

const WebMagicAPP = () => {
  const [activeGame, setActiveGame] = useState(null); // Tracks the currently selected game
  const [user, setUser] = useState(null); // Tracks the logged-in user
  const [collapsed, setCollapsed] = useState(false); // Tracks collapse state of the side panel

  // Toggle to show the selected game
  const handleGameSelect = (game) => {
    setActiveGame(game);
  };

  // Return to the card page
  const handleBackToCards = () => {
    setActiveGame(null);
  };

  // Handle Google login state
  const handleLogin = (userInfo) => {
    setUser(userInfo); // Set user info after login
  };

  const handleLogout = () => {
    setUser(null); // Clear user state on logout
  };

  // Toggle collapsible menu
  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className="app">
      {/* Top Navigation */}
      <div className="top-bar">
        {user ? (
          <div className="profile">
            <img
              src={user.picture}
              alt="Profile"
              className="profile-icon"
              title={user.name}
            />
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <GoogleLogin onLoginSuccess={handleLogin} />
        )}
      </div>

      {/* Left Navigation Bar */}
      <div className={`left-nav ${collapsed ? "collapsed" : ""}`}>
        <button onClick={toggleCollapse} className="collapse-button">
          {collapsed ? ">" : "<"}
        </button>
        <ul>
          <li onClick={() => handleGameSelect(null)}>
            <FaHome className="nav-icon" />
            {!collapsed && <span>Home</span>}
          </li>
          <li onClick={() => handleGameSelect("chicken")}>
            <FaGamepad className="nav-icon" />
            {!collapsed && <span>Chicken Crossing</span>}
          </li>
          <li onClick={() => handleGameSelect("plinko")}>
            <FaPuzzlePiece className="nav-icon" />
            {!collapsed && <span>Plinko</span>}
          </li>
          <li>
            <FaLock className="nav-icon" />
            {!collapsed && <span>Game 3 (Coming Soon)</span>}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
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
    </div>
  );
};

export default WebMagicAPP;
