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
    /* 關鍵：改為 md:grid-cols-4，gap 稍微調小一點點 (gap-x-8) */
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
      {displayProjects.map((project) => (
        <div 
          key={project.id} 
          className="group cursor-pointer" 
          onClick={() => onProjectClick(project)}
        >
          {/* 保持 4:3 比例 */}
          <div className="overflow-hidden bg-neutral-100 aspect-[4/3] mb-4">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
          </div>
          
          <div className="space-y-1">
            {/* 標題字級再縮小一點 (text-base)，以配合小圖比例 */}
            <h3 className="text-base font-light serif text-neutral-800 leading-tight">{project.title}</h3>
            <div className="flex justify-between items-center">
              <p className="text-[9px] tracking-[0.2em] uppercase text-neutral-400 font-medium">{project.category}</p>
              <span className="text-[9px] font-light text-neutral-300 italic">{project.year}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;