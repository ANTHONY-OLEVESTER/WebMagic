import React, { lazy, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "./ProjectsData";
import "./ProjectDetails.css"; // Reuse the same CSS file for consistent styling

// Lazy load project components to avoid circular imports
const Project1 = lazy(() => import("./Project1/Project1"));
const Project2 = lazy(() => import("./Project2/Project2"));
const Project3 = lazy(() => import("./Project3/Project3"));

const projectComponents = {
  1: Project1,
  2: Project2,
  3: Project3,
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === parseInt(id, 10));
  const ProjectComponent = project ? projectComponents[project.id] : null;

  if (!project) {
    return (
      <div className="project-page">
        <h2>Project not found</h2>
        <p>The requested project does not exist. Please check the URL or explore our other projects.</p>
        <Link to="/" className="back-button">Go Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      {/* Render Lazy-loaded Project Component */}
      {ProjectComponent ? (
        <Suspense fallback={<div className="fallback">Loading Project...</div>}>
          <ProjectComponent />
        </Suspense>
      ) : (
        <div className="fallback">Component not available for this project.</div>
      )}

      {/* Back to Projects */}
      <Link to="/" className="back-button">
        Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetail;
