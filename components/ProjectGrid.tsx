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
              alt={project.title.replace('\n', ' ')} // 替代文字不換行
              className="w-full h-full object-cover transition-all duration-700 ease-in-out 
                         grayscale hover:grayscale-0 scale-105 hover:scale-100" 
            />
          </div>
          
          {/* 文字資訊區 */}
          <div className="space-y-3">
            {/* 標題：加入 whitespace-pre-line 支援 \n 換行 */}
            <h3 className="text-lg md:text-[16px] font-normal serif text-neutral-800 leading-snug group-hover:text-black transition-colors min-h-[3.5rem] whitespace-pre-line">
              {project.title}
            </h3>

            {/* 標籤顯示邏輯 - 只抓第一個標籤 (例如：獨立專案) */}
            <div className="flex flex-wrap gap-2 py-1">
              {project.roles && project.roles.length > 0 && (
                <span className="px-2.5 py-1 text-[10px] md:text-[11px] tracking-[0.2em] bg-neutral-100 text-neutral-500 rounded-sm font-medium border border-neutral-200/50 uppercase">
                  {project.roles[0]}
                </span>
              )}
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