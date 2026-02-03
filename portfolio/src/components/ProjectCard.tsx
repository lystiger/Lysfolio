import React, { useState } from 'react';
import type { Project } from '../data/projects';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number; // Add index prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setMousePosition({ x, y });
  };

  const placeholderColors = [
    'bg-obsidian-light',
    'bg-obsidian-dark',
    'bg-obsidian-extra-light',
    'bg-obsidian-extra-dark',
  ];

  const currentPlaceholderColor = placeholderColors[index % placeholderColors.length];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        if (project.link) {
          window.open(project.link, '_blank', 'noopener,noreferrer');
        }
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          if (project.link) {
            window.open(project.link, '_blank', 'noopener,noreferrer');
          }
        }
      }}
      role="link"
      tabIndex={0}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white/5 rounded-lg shadow-lg overflow-hidden group cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {/* Spotlight Effect */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${
              mousePosition.y * 100
            }%, rgba(100, 100, 255, 0.15), transparent 80%)`,
          }}
        />
      )}

      {/* Image Placeholder */}
      <div className={`w-full h-48 ${currentPlaceholderColor} flex items-center justify-center text-slate-400 text-xl`}>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-white/10 text-indigo-neon px-2 py-1 rounded-full text-sm font-mono">
              {tech}
            </span>
          ))}
        </div>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-neon hover:text-indigo-400 transition-colors duration-300 flex items-center space-x-2 mt-4"
            onClick={(e) => e.stopPropagation()} // Prevent card animation when clicking link
          >
            <Github size={20} />
            <span>View on GitHub</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
