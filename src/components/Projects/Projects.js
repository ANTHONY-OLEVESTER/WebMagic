import React from "react";
import "./Projects.css";
import { projectsData } from "./ProjectsData"; // Data file for projects
import Project1 from "./Project1/Project1"; // Import project components
import Project2 from "./Project2/Project2"; // Import other project components as needed

const projectComponents = {
  1: Project1, // Map project ID to its component
  2: Project2, // Add other projects here
  // Add additional mappings as needed
};

const Projects = ({ selectedProject, onSelectProject }) => {
  // If a project is selected, render its corresponding component
  if (selectedProject) {
    const ProjectComponent = projectComponents[selectedProject.id];
    return (
      <div className="project-detail">
        {ProjectComponent ? (
          <ProjectComponent />
        ) : (
          <div>
            <h2>Project Not Found</h2>
            <p>The selected project does not have a defined component.</p>
            <button onClick={() => onSelectProject(null)} className="back-button">
              Back to Projects
            </button>
          </div>
        )}
      </div>
    );
  }

  // Render the list of projects
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <ul>
        {projectsData.map((project) => (
          <li
            key={project.id}
            className="project-item"
            onClick={() => onSelectProject(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
