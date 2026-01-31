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
            {/* 1. 標題與哲學區 */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-16 mt-8 gap-12">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-light serif tracking-[0.1em] text-neutral-900">
                  Architecture Portfolio <span className="text-xl font-light text-neutral-400 ml-2 italic">2014—2026</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-normal tracking-[0.15em] text-neutral-800 mt-6">
                  莊淯婷 <span className="text-xl md:text-2xl font-light serif italic ml-2 text-neutral-500">Tina Chong</span>
                </h2>
              </div>

              {/* 優化後的設計哲學區 */}
              <div className="max-w-md text-right space-y-6">
                <p className="text-[10px] md:text-[14px] text-neutral-800 font-light leading-snug serif italic border-r-2 border-neutral-900 pr-6">
                  Architecture should be more than a cold vessel; <br className="hidden md:block" />
                  it is an extension of life itself."
                </p>
                <p className="text-[10px] md:text-[13px] text-neutral-800 pr-6 leading-loose tracking-[0.05em] font-light">
                  建築不應只是冰冷的容器，而是生活的延伸。
                </p>
              </div>
            </div>

            {/* 2. 作品區 */}
            <section className="pt-8 border-t border-neutral-100">
              <div className="mb-10">
                <h3 className="text-[16px] tracking-[0.4em] uppercase text-neutral-400 font-medium">Selected Works</h3>
              </div>
              
              <ProjectGrid onProjectClick={navigateToProject} limit={4} />

              {/* 3. 左對齊按鈕 */}
              <div className="mt-12 flex justify-start">
                <button 
                  onClick={() => setView('projects')} 
                  className="group flex flex-col items-start transition-all"
                >
                  <span className="text-[14px] tracking-[0.3em] uppercase text-neutral-500 group-hover:text-black transition-colors">
                    Explore All
                  </span>
                  <span className="text-[13px] italic text-neutral-400 group-hover:text-neutral-600 transition-colors border-b border-neutral-200 pb-0.5 mt-1">
                    查看所有專案
                  </span>
                </button>
              </div>
            </section>
          </div>
        );

      case 'about': return <About />;
      case 'projects': return (
        <div className="pt-8">
          <h1 className="text-3xl font-light mb-12">工作專案</h1>
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
      <main className="flex-1 px-8 py-12 md:ml-64">
        <div className="max-w-[1440px] mx-auto w-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;