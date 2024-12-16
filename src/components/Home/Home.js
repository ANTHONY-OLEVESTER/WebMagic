import React from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../Projects/ProjectsData"; // Import projects data
import "./Home.css"; // Add CSS for retro styling

const Home = () => {
  const latestProject = projectsData[projectsData.length - 1]; // Get the last project added
  console.log("Rendering Home with projects:", projectsData);

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to WebMagicAPP</h1>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <Link
            to={`/project/${project.id}`} // Navigate to the specific project route
            key={project.id}
            className="project-card"
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
          </Link>
        ))}
      </div>
      <div className="latest-project">
        <h2>Latest Project</h2>
        <Link
          to={`/project/${latestProject.id}`} // Navigate to the latest project
          className="latest-project-card"
        >
          <h3>{latestProject.title}</h3>
          <p>{latestProject.description}</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
