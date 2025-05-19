import React from 'react';
import './TechSkill.css';

const TechSkills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Python",
    "WordPress",
    "Shopify",
    "Tailwindcss",
    "Git",
    "GitHub",
    "Streamlit"
  ];

  return (
    <div className="tech-skill-list">
      {skills.map((skill, index) => (
        <div className="tech-skill" key={index}>
          {skill}
        </div>
      ))}
    </div>
  );
};

export default TechSkills;
