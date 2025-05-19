// components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import './ProjectCard.css';

const ProjectCard = ({ id, slug, image, alt, title, category }) => {
  return (
    <div className="project">
      <div className="project-img">
        <img src={image} alt={alt || title} />
      </div>
      <div className="project-name">
        <h3>{title}</h3>
      </div>
      <div className="project-category">
        <span>{category}</span>
      </div>
      <div className="project-detail">
        <Link to={`/projects/${id}/${slug}`}>Details</Link>
        <GoArrowUpRight />
      </div>
    </div>
  );
};

export default ProjectCard;
