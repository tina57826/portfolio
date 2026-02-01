import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 自動置頂
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return null;

  // 合併主圖與所有圖庫照片供上方輪播使用
  const allImages = [project.imageUrl, ...(project.gallery || [])];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* 1. 返回按鈕 */}
      <button 
        onClick={onBack}
        className="mb-12 group flex items-center text-[10px] tracking-[0.3em] uppercase text-neutral-400 hover:text-black transition-colors"
      >
        <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
        Back to Projects
      </button>

      {/* 2. 標題區 */}
      <header className="mb-16">
        <p className="text-[10px] tracking-[0.4em] uppercase text-neutral-400 mb-4 font-medium">
          {project.category} / {project.year}
        </p>
        <h1 className="text-4xl md:text-6xl font-light serif text-neutral-900 leading-tight">
          {project.title}
        </h1>
      </header>

      {/* 3. 上方主圖：可點擊切換功能 */}
      <div className="group relative aspect-[21/9] w-full overflow-hidden bg-neutral-100 mb-24 cursor-pointer">
        <img 
          src={allImages[activeImageIndex]} 
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
        
        {/* 左右切換按鈕 */}
        <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={prevImage}
            className="w-10 h-10 flex items-center justify-center bg-white/90 rounded-full shadow-sm hover:bg-black hover:text-white transition-all"
          >
            ←
          </button>
          <button 
            onClick={nextImage}
            className="w-10 h-10 flex items-center justify-center bg-white/90 rounded-full shadow-sm hover:bg-black hover:text-white transition-all"
          >
            →
          </button>
        </div>

        {/* 頁碼指示器 */}
        <div className="absolute bottom-6 right-8 text-[9px] tracking-[0.3em] text-white bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full">
          {activeImageIndex + 1} / {allImages.length}
        </div>
      </div>

      {/* 4. 內容資訊 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
        <div className="lg:col-span-7 space-y-20">
          <section>
            <h2 className="text-[11px] tracking-[0.4em] uppercase text-neutral-300 mb-8 font-medium border-b border-neutral-100 pb-3">關於專案 About</h2>
            <p className="text-lg font-light text-neutral-600 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </section>

          <section>
            <h2 className="text-[11px] tracking-[0.4em] uppercase text-neutral-300 mb-8 font-medium border-b border-neutral-100 pb-3">我的角色 Role</h2>
            <div className="flex flex-wrap gap-3">
              {(project.roles || []).map((role, index) => (
                <span 
                  key={index}
                  className="px-6 py-2 text-[10px] tracking-[0.2em] bg-white border border-neutral-200 text-neutral-500 rounded-full hover:border-black hover:text-black transition-all cursor-default"
                >
                  {role}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-neutral-50 p-10 md:p-14 sticky top-12 border border-neutral-100">
            <h2 className="text-[10px] tracking-[0.5em] uppercase text-neutral-400 mb-12 text-center font-bold">Project Stats</h2>
            <div className="space-y-8">
              {(project.stats || []).map((stat, index) => (
                <div key={index} className="flex flex-col border-b border-neutral-200/60 pb-5 last:border-0">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-neutral-400 mb-2">{stat.label}</span>
                  <span className="text-[15px] font-normal text-neutral-800 tracking-wide">{stat.value}</span>
                </div>
              ))}
              <div className="flex flex-col pt-4">
                <span className="text-[9px] tracking-[0.2em] uppercase text-neutral-400 mb-2">地點 Location</span>
                <span className="text-[15px] font-normal text-neutral-800 italic">{project.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. 下方圖庫：左右橫向滑動 */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="border-t border-neutral-100 pt-24 mb-32">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
            <div className="space-y-2">
              <h2 className="text-[11px] tracking-[0.5em] uppercase text-neutral-400">影像紀錄</h2>
              <h3 className="text-3xl font-light serif text-neutral-800 italic">Gallery / Records</h3>
            </div>
            <p className="text-[10px] tracking-[0.2em] text-neutral-300 animate-pulse">
              SHIFT + SCROLL TO EXPLORE →
            </p>
          </div>
          
          {/* 橫向捲動容器 */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-neutral-200 scrollbar-track-transparent cursor-grab active:cursor-grabbing"
          >
            {project.gallery.map((url, index) => (
              <div 
                key={index} 
                className="flex-none w-[80vw] md:w-[50vw] lg:w-[40vw] snap-center aspect-[3/2] overflow-hidden bg-neutral-100 group shadow-sm"
              >
                <img 
                  src={url} 
                  alt={`${project.title} gallery ${index}`} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;