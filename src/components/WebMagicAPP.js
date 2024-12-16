import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import Home from "./Home/Home";
import { projectsData } from "./Projects/ProjectsData"; // Access project data
import "./WebMagicAPP.css";

const WebMagicAPP = () => {
  const [user, setUser] = useState(null);
  const [collapsed, setCollapsed] = useState(false); // Tracks sidebar collapse state

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <div className="app">
      {/* Top Bar */}
      <div className="top-bar">
        {user ? (
          <div className="profile">
            <img src={user.picture} alt="Profile" className="profile-icon" />
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <button className="login-button">Login</button> // Placeholder for login
        )}
      </div>

      {/* Sidebar */}
      <div className={`left-nav ${collapsed ? "collapsed" : ""}`}>
        <button onClick={toggleCollapse} className="collapse-button">
          {collapsed ? ">" : "<"}
        </button>
        <ul>
          <li>
            <Link to="/">
              <FaHome className="nav-icon" />
              {!collapsed && <span>Home</span>}
            </Link>
          </li>
          <li>
            <FaProjectDiagram className="nav-icon" />
            {!collapsed && <span>Projects</span>}
            <ul>
              {projectsData.map((project) => (
                <li key={project.id}>
                  <Link to={`/project/${project.id}`}>{project.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Home />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 WebMagicAPP. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WebMagicAPP;
