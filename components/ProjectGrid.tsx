
import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';

interface ProjectGridProps {
  onProjectClick: (project: Project) => void;
  limit?: number;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onProjectClick, limit }) => {
  const displayProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
      {displayProjects.map((project, index) => (
        <div 
          key={project.id} 
          className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
          onClick={() => onProjectClick(project)}
        >
          <div className="overflow-hidden bg-neutral-100 aspect-[4/5] mb-6">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-light serif mb-1">{project.title}</h3>
              <p className="text-xs tracking-widest uppercase text-neutral-400 font-medium">{project.category}</p>
            </div>
            <span className="text-xs font-light text-neutral-300 italic">{project.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
