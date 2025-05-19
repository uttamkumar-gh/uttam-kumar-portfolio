import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import './SingleProject.css';

import projects from '../../../data/projects';

function Project() {
  
  const {id} = useParams();
  const currentId = parseInt(id);
  const currentIndex = projects.findIndex((project) => project.id === currentId);
  const currentProject = projects[currentIndex];

  // Get next project
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  if(!currentProject) return <h2>Project not found</h2>;

  return (
    <div className="project-details">
        <h1 className='project-title'>{currentProject.title}</h1>
        <span className='project-category'>{currentProject.category}</span>
        <div className="project-screenshot">
            <img src={currentProject.image} alt={currentProject.alt} />
        </div>
        <div className="project-key-details">
            <div className="client-duration-platform">
                <div className='client-name'>
                    <h4>Client</h4>
                    {currentProject.client}
                </div>
                <div className='platform'>
                    <h4>Platform</h4>
                    {currentProject.platform}
                </div>
                <div className='duration'>
                    <h4>Duration</h4>
                    {currentProject.duration}
                </div>
            </div>
            <div className='project-desc'>
                <h4>Description</h4>
                <p>{currentProject.description}</p>
            </div>
            <div className='role'>
                <h4>Role & Responsibility</h4>
                {currentProject.role}
            </div>
            <div className='team-size'>
                <h4>Team Size</h4>
                {currentProject.teamSize}
            </div>
            <div className='tech-stack'>
                <h4>Tech Stack Used</h4>
                <ul>
                    {currentProject.techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='project-live-link'>
            <Link to={currentProject.liveLink} target='_blank' rel='noreferrer'>Visit Live</Link>
            <GoArrowUpRight />
        </div>
        <div className="next-project">
            <img src={nextProject.image} alt={nextProject.alt} />
            <Link to={`/projects/${nextProject.id}/${nextProject.slug}`}>Next Project - {nextProject.title}</Link>
        </div>
    </div>
  );
};

export default Project;
