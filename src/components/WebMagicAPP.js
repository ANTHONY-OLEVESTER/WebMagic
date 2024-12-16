import React, { useState } from "react";
import GoogleLogin from "./1Login/GoogleLogin";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import "./WebMagicAPP.css";
import Projects from "./Projects/Projects";
import Home from "./Home/Home";

const WebMagicAPP = () => {
  const [user, setUser] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [activeView, setActiveView] = useState("home"); // Tracks the active view
  const [selectedProject, setSelectedProject] = useState(null); // Tracks the selected project

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setActiveView("home");
  };

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  const renderContent = () => {
    // Render selected project if available
    if (selectedProject) {
      return <Projects selectedProject={selectedProject} />;
    }

    // Render views based on activeView
    switch (activeView) {
      case "home":
        return <Home onSelectProject={setSelectedProject} />;
      case "projects":
        return <Projects onSelectProject={setSelectedProject} />;
      default:
        return <Home onSelectProject={setSelectedProject} />;
    }
  };

  return (
    <div className="app">
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
          <GoogleLogin />
        )}
      </div>
      <div className={`left-nav ${collapsed ? "collapsed" : ""}`}>
        <button onClick={toggleCollapse} className="collapse-button">
          {collapsed ? ">" : "<"}
        </button>
        <ul>
          <li onClick={() => { setActiveView("home"); setSelectedProject(null); }}>
            <FaHome className="nav-icon" />
            {!collapsed && <span>Home</span>}
          </li>
          <li onClick={() => { setActiveView("projects"); setSelectedProject(null); }}>
            <FaProjectDiagram className="nav-icon" />
            {!collapsed && <span>Projects</span>}
          </li>
        </ul>
      </div>
      <div className="main-content">{renderContent()}</div>
      <footer className="footer">
        <p>© 2024 WebMagicAPP. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WebMagicAPP;
