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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
      {displayProjects.map((project) => (
        <div 
          key={project.id} 
          className="group cursor-pointer" 
          onClick={() => onProjectClick(project)}
        >
          {/* 圖片區域 */}
          <div className="overflow-hidden bg-neutral-100 aspect-[3/2] mb-6">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out 
                         grayscale hover:grayscale-0 scale-105 hover:scale-100" 
            />
          </div>
          
          {/* 文字資訊區 */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-[16px] font-normal serif text-neutral-800 leading-tight group-hover:text-black transition-colors">
              {project.title}
            </h3>

            {/* 職責標籤區域 - 修正顏色以確保清晰可見 */}
            <div className="flex flex-wrap gap-2 py-1">
              {project.roles?.map((role, index) => (
                <span 
                  key={index}
                  className="px-2 py-0.5 text-[10px] md:text-[11px] tracking-wider bg-neutral-100 text-neutral-500 rounded-sm border border-neutral-200"
                >
                  {role}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center border-t border-neutral-100 pt-3">
              <p className="text-[12px] md:text-[14px] tracking-[0.2em] uppercase text-neutral-500 font-medium">
                {project.category}
              </p>
              <span className="text-[12px] md:text-[14px] font-light text-neutral-500 italic">
                {project.year}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;