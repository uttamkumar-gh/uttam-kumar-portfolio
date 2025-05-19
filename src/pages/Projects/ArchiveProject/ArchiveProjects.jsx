import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import './ArchiveProjects.css';

import projects from '../../../data/projects';

function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="project-img">
              <img src={project.image} alt={project.alt} />
            </div>
            <div className="project-name">
              <h3>{project.title}</h3>
            </div>
            <div className="project-category">
              <span>{project.category}</span>
            </div>
            <div className="project-detail">
              <Link to={`/projects/${project.id}/${project.slug}`}>Details</Link>
              <GoArrowUpRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
