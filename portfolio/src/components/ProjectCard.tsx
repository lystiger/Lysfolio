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

  const statusStyles: Record<string, { dot: string; pill: string }> = {
    ongoing: {
      dot: 'bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.9)]',
      pill: 'text-red-200 border-red-400/40',
    },
    prototype: {
      dot: 'bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.9)]',
      pill: 'text-orange-200 border-orange-400/40',
    },
    completed: {
      dot: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]',
      pill: 'text-emerald-200 border-emerald-400/40',
    },
    active: {
      dot: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]',
      pill: 'text-emerald-200 border-emerald-400/40',
    },
  };

  const stateKey = project.currentState.toLowerCase();
  const stateStyle = statusStyles[stateKey] ?? {
    dot: 'bg-slate-300 shadow-[0_0_8px_rgba(226,232,240,0.7)]',
    pill: 'text-slate-200 border-white/20',
  };

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

      {/* Project Image */}
      <div className={`w-full h-48 ${currentPlaceholderColor} overflow-hidden`}>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition duration-300 blur-md group-hover:blur-0 group-hover:contrast-110 group-hover:saturate-110 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="mb-4">
          <span
            className={`inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-mono tracking-wide border ${stateStyle.pill}`}
          >
            <span className={`h-2 w-2 rounded-full ${stateStyle.dot}`} />
            Current State: {project.currentState}
          </span>
        </div>
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
