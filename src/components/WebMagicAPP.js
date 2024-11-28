import React, { useState, useEffect } from "react";
import GameBoard from "./Chicken-Crossing/GameBoard"; // Chicken Crossing Game
import PlinkoGame from "./Plinko/PlinkoGame"; // Plinko Game
import GoogleLogin from "./1Login/GoogleLogin"; // Google Login Script
import { FaHome, FaGamepad, FaPuzzlePiece, FaLock } from "react-icons/fa"; // Icons for navigation
import { Link } from "react-router-dom"; // For routing the Terms and Conditions link
import "./WebMagicAPP.css";

const WebMagicAPP = () => {
  const [activeGame, setActiveGame] = useState(null); // Tracks the currently selected game
  const [user, setUser] = useState(null); // Tracks the logged-in user
  const [collapsed, setCollapsed] = useState(false); // Tracks collapse state of the side panel

  // Effect to check for saved user login
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Automatically log in the user if info is found
    }
  }, []);

  // Handle Google login state
  const handleLogin = (userInfo) => {
    setUser(userInfo); // Set user info after login
    localStorage.setItem("user", JSON.stringify(userInfo)); // Save user info to local storage
  };

  const handleLogout = () => {
    setUser(null); // Clear user state on logout
    localStorage.removeItem("user"); // Remove user info from local storage
  };

  // Toggle collapsible menu
  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  // Check if user is logged in before performing an action
  const requireLogin = (action) => {
    if (!user) {
      alert("Please log in to access this feature.");
      return;
    }
    action();
  };

  // Toggle to show the selected game
  const handleGameSelect = (game) => {
    requireLogin(() => setActiveGame(game));
  };

  // Return to the card page
  const handleBackToCards = () => {
    setActiveGame(null);
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

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2024 WebMagicAPP. All rights reserved. |{" "}
          <Link to="/terms-and-conditions" className="footer-link">
            Terms and Conditions
          </Link>{" "}
          |{" "}
          <a 
            href="https://www.freeprivacypolicy.com/live/2493758f-1ebe-48f7-9ef3-e510c8f83a97" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <Link to="/refund-and-cancellation-policy" className="footer-link">
            Refund and Cancellation Policy
          </Link>
          {" "}
          |{" "}
          <Link to="/shipping-and-delivery-policy" className="footer-link">
            Shipping and Delivery Policy
          </Link>
          {" "}
          |{" "}
          <Link to="/contact-us" className="footer-link">
            Contact Us
          </Link>


        </p>
      </footer>

    </div>
  );
};

export default WebMagicAPP;
