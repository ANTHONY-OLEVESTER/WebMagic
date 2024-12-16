import React from "react";
import { projectsData } from "../Projects/ProjectsData"; // Import projects data
import "./Home.css"; // Add CSS for retro styling

const Home = ({ onSelectProject }) => {
  const latestProject = projectsData[projectsData.length - 1]; // Get the last project added
  console.log("Rendering Home with projects:", projectsData);

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to WebMagicAPP</h1>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => onSelectProject(project)} // Notify parent about selected project
          >
            {project.video ? (
              <div className="card-video-container">
                <iframe
                  className="card-video"
                  src={`https://www.youtube.com/embed/${project.video}?autoplay=1&mute=1&loop=1&playlist=${project.video}`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="card-placeholder">
                <h3>{project.title}</h3>
              </div>
            )}
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="latest-project">
        <h2>Latest Project</h2>
        <div
          className="latest-project-card"
          onClick={() => onSelectProject(latestProject)} // Notify parent about latest project selection
        >
          <h3>{latestProject.title}</h3>
          <p>{latestProject.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
