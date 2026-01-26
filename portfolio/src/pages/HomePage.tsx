import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">Lystiger's Portfolio</h1>
        <p className="text-center text-xl mb-12">Welcome to my portfolio. I am a software engineer specializing in building modern web applications.</p>
        
        <hr className="border-t border-slate-800 my-12" />

        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
