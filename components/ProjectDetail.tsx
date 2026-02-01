import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  // 燈箱開啟時鎖定捲軸
  useEffect(() => {
    document.body.style.overflow = isLightboxOpen ? 'hidden' : 'unset';
  }, [isLightboxOpen]);

  if (!project) return null;

  const allImages = [project.imageUrl, ...(project.gallery || [])];

  const nextMainImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevMainImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* 燈箱：全螢幕檢視 */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white text-3xl font-light transition-all">✕</button>
          <img 
            src={allImages[activeImageIndex]} 
            alt="Full view"
            className="max-w-[95vw] max-h-[90vh] object-contain shadow-2xl transition-transform duration-500"
          />
        </div>
      )}

      {/* 1. 返回按鈕 */}
      <button 
        onClick={onBack}
        className="mb-8 group flex items-center text-[10px] tracking-[0.3em] uppercase text-neutral-400 hover:text-black transition-colors"
      >
        <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
        Back to Projects
      </button>

      {/* 2. 標題區 */}
      <header className="mb-10 text-left">
        <p className="text-[12px] tracking-[0.4em] uppercase text-neutral-400 mb-2 font-medium">
          {project.category} / {project.year}
        </p>
        <h1 className="text-2xl md:text-3xl font-light serif text-neutral-900 leading-tight">
          {project.title}
        </h1>
      </header>

     {/* 3. 主圖輪播 */}
<div className="group relative aspect-video w-full max-w-6xl mx-auto overflow-hidden bg-neutral-100 mb-16 shadow-sm">
  {/* 圖片層 */}
  <img 
    src={allImages[activeImageIndex]} 
    alt={project.title}
    className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-[1.03]"
  />

  {/* 修正後的按鈕控制層 */}
  {/* 1. 移除父層的 pointer-events-none，直接讓按鈕絕對定位 */}
  <button 
    type="button"
    onClick={prevMainImage} 
    className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/90 text-neutral-800 rounded-full hover:bg-black hover:text-white transition-all shadow-xl z-20 opacity-0 group-hover:opacity-100 cursor-pointer"
    aria-label="Previous image"
  >
    ←
  </button>
  
  <button 
    type="button"
    onClick={nextMainImage} 
    className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/90 text-neutral-800 rounded-full hover:bg-black hover:text-white transition-all shadow-xl z-20 opacity-0 group-hover:opacity-100 cursor-pointer"
    aria-label="Next image"
  >
    →
  </button>
  
  {/* 頁碼指示 */}
  <div className="absolute bottom-8 right-8 text-[11px] tracking-[0.3em] text-white bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 pointer-events-none">
    {activeImageIndex + 1} / {allImages.length}
  </div>
</div>

      {/* 4. 內容資訊區 (維持你調整過的大字體) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 border-b border-neutral-100 pb-16">
        <div className="lg:col-span-8 space-y-14">
          <section>
            <h2 className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-6 font-bold pb-2 border-b border-neutral-50">
              Description
            </h2>
            <p className="text-xl md:text-2xl font-light text-neutral-900 leading-loose whitespace-pre-line tracking-wide">
              {project.description}
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-6 font-bold pb-2 border-b border-neutral-50">
              Role
            </h2>
            <div className="flex flex-wrap gap-3">
              {(project.roles || []).map((role, index) => (
                <span key={index} className="px-5 py-2 text-sm tracking-[0.1em] bg-neutral-100/50 text-neutral-700 rounded-sm font-medium">
                  {role}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-neutral-50/80 p-10 border border-neutral-100/50 sticky top-8">
            <h2 className="text-xs tracking-[0.5em] uppercase text-neutral-400 mb-10 text-center font-bold">Project Stats</h2>
            <div className="space-y-8">
              {(project.stats || []).map((stat, index) => (
                <div key={index} className="flex flex-col border-b border-neutral-200/50 pb-5 last:border-0">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-2">{stat.label}</span>
                  <span className="text-lg font-normal text-neutral-800 tracking-wide">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Gallery (3:2 比例與主圖呼應) */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="relative group/gallery mb-32">
          <div className="flex items-center justify-between mb-8 px-2">
            <h3 className="text-[12px] tracking-[0.5em] uppercase text-neutral-400 font-bold italic">Gallery Records</h3>
            <div className="flex gap-4">
              <button onClick={() => scrollGallery('left')} className="text-neutral-400 hover:text-black transition-colors text-lg p-2">←</button>
              <button onClick={() => scrollGallery('right')} className="text-neutral-400 hover:text-black transition-colors text-lg p-2">→</button>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden snap-x snap-mandatory scroll-smooth">
            {project.gallery.map((url, index) => (
              <div 
                key={index} 
                className="flex-none w-[85vw] md:w-[45vw] lg:w-[31%] snap-start aspect-[3/2] overflow-hidden bg-neutral-100 cursor-zoom-in group/item shadow-sm"
                onClick={() => {
                  setActiveImageIndex(index + 1);
                  setIsLightboxOpen(true);
                }}
              >
                <img 
                  src={url} 
                  alt={`gallery-${index}`} 
                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-1000" 
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