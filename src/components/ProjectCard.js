import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Tecnologias:</strong> {project.technologies.join(', ')}</p>
      <a href={project.link}>Ver Repositório</a>
    </div>
  );
}

export default ProjectCard;
