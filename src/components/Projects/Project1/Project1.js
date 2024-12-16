import React from 'react';
import './Project1.css';

// Key project data (used externally, remains unchanged)
export const project1Data = {
  id: 1,
  title: 'Reassemblable Robotic Arm - Quick Demo',
  description:
    'Demonstration of the Reassemblable Robotic Arm in action, showcasing its versatility and ease of use.',
  video: 'vSoKOCaQVpA', // Only one key video
};

// Videos specific to this project
const videos = [
  {
    id: 'QQCtvQF9WvE',
    title: 'Reassemblable Robotic Arm - Overview',
    description:
      'An introduction to the Reassemblable Robotic Arm project, highlighting its modular design and capabilities.',
  },
  {
    id: 'uPx1Nah18t0',
    title: 'Reassemblable Robotic Arm - Assembly Guide',
    description:
      'A step-by-step tutorial on assembling the Reassemblable Robotic Arm, detailing each component and the assembly process.',
  },
  {
    id: '2d9qnqH3ARc',
    title: 'Reassemblable Robotic Arm - Programming Basics',
    description:
      'An overview of programming the Reassemblable Robotic Arm, including setting up the development environment and writing basic control scripts.',
  },
  {
    id: 'WbEvZmzOUFc',
    title: 'Reassemblable Robotic Arm - Advanced Functions',
    description:
      'Demonstration of advanced functionalities of the Reassemblable Robotic Arm, such as complex movement patterns and task automation.',
  },
  {
    id: '3RM1WVW3LOU',
    title: 'Reassemblable Robotic Arm - Maintenance Tips',
    description:
      'Tips and best practices for maintaining the Reassemblable Robotic Arm to ensure optimal performance and longevity.',
  },
];

const Project1 = () => {
  return (
    <div className="project-page">
      <h1>Reassemblable Robotic Arm Project</h1>
      <p>
        Explore the development and functionalities of the Reassemblable Robotic
        Arm through the following videos:
      </p>

      {/* Main Video */}
      <div className="featured-video">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${project1Data.video}`}
          title={project1Data.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h3>{project1Data.title}</h3>
        <p>{project1Data.description}</p>
      </div>

      {/* Additional Videos */}
      <div className="video-gallery">
        <h2>Related Videos</h2>
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project1;
