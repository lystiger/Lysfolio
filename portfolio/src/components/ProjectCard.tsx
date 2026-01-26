import React from 'react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-slate-800 text-indigo-400 px-2 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <a href={project.link} className="text-indigo-500 hover:text-indigo-400 font-bold">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
