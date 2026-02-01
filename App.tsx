import React, { useState } from 'react';
import { Project, ViewState } from './types';
import Sidebar from './components/Sidebar';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateToProject = (project: Project) => {
    setSelectedProject(project);
    setView('project-detail');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-1000">
            {/* 1. 標題與哲學區 - 縮小標題字體 */}
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 mt-8 gap-12">
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-light serif tracking-[0.2em] text-neutral-900 uppercase">
                  Architecture Portfolio
                </h1>
                <div className="h-px w-12 bg-neutral-900 my-6"></div>
                <h2 className="text-3xl md:text-4xl font-normal tracking-[0.1em] text-neutral-800">
                  莊淯婷 <span className="text-xl md:text-2xl font-light serif italic ml-2 text-neutral-400 font-serif">Tina Chong</span>
                </h2>
              </div>

              {/* 設計哲學區 */}
              <div className="max-w-md text-right space-y-4">
                <p className="text-[14px] md:text-[15px] text-neutral-400 font-light leading-relaxed serif italic border-r border-neutral-300 pr-6">
                  "Architecture should be more than a cold vessel; <br className="hidden md:block" />
                  it is an extension of life itself."
                </p>
                <p className="text-[13px] md:text-[14px] text-neutral-500 pr-6 leading-loose tracking-[0.1em] font-light">
                  建築不應只是冰冷的容器，而是生活的延伸。
                </p>
              </div>
            </div>

            {/* 2. 作品區 - 加大標題與網格間距 */}
            <section className="pt-12 border-t border-neutral-100">
              <div className="mb-12 flex items-center justify-between">
                <h3 className="text-[18px] md:text-[20px] tracking-[0.3em] uppercase text-neutral-800 font-light">Selected Works</h3>
                <span className="text-[12px] text-neutral-300 tracking-widest uppercase hidden md:block">精選作品</span>
              </div>
              
              {/* 這裡可以透過 CSS 或容器微調讓內容看起來更大 */}
              <div className="scale-[1.02] origin-left transition-transform">
                <ProjectGrid onProjectClick={navigateToProject} limit={4} />
              </div>

              {/* 3. 左對齊按鈕 */}
              <div className="mt-20 flex justify-start">
                <button 
                  onClick={() => setView('projects')} 
                  className="group flex items-center gap-6 transition-all"
                >
                  <div className="flex flex-col items-start">
                    <span className="text-[14px] tracking-[0.3em] uppercase text-neutral-600 group-hover:text-black transition-colors">
                      Explore All
                    </span>
                    <span className="text-[12px] italic text-neutral-400 group-hover:text-neutral-600 transition-colors mt-1">
                      查看所有專案
                    </span>
                  </div>
                  <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
                </button>
              </div>
            </section>
          </div>
        );

      case 'about': return <About />;
      case 'projects': return (
        <div className="pt-8">
          <h1 className="text-3xl font-light mb-12 tracking-widest uppercase">工作專案</h1>
          <ProjectGrid onProjectClick={navigateToProject} />
        </div>
      );
      case 'contact': return <Contact />;
      case 'project-detail':
        return selectedProject ? <ProjectDetail project={selectedProject} onBack={() => setView('home')} /> : null;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#fafafa]">
      <Sidebar 
        currentView={view} 
        setView={(v) => { setView(v); setIsMobileMenuOpen(false); }} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="flex-1 px-8 py-12 md:px-16 md:py-20 md:ml-64">
        <div className="max-w-[1400px] mx-auto w-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;