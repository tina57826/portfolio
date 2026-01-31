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

  const renderPlaceholder = (title: string, message: string = "內容正在整理中，敬請期待。") => (
    <div className="animate-in fade-in duration-700 h-[60vh] flex flex-col justify-center">
      <h1 className="text-5xl font-light serif mb-8">{title}</h1>
      <div className="w-12 h-px bg-neutral-200 mb-8"></div>
      <p className="text-neutral-400 tracking-widest uppercase text-xs">{message}</p>
    </div>
  );

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-1000">
            {/* 1. 頂部區塊：包含標題（左）與設計哲學（右） */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-16 mt-12 gap-8">
              {/* 左側：姓名標題區 */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-light serif tracking-[0.1em] text-neutral-900">
                  Portfolio <span className="text-xl font-light text-neutral-400 ml-2 italic">作品集</span>
                </h1>
                <div className="pt-2">
                  <h2 className="text-2xl md:text-3xl font-normal tracking-[0.15em] text-neutral-800">
                    莊淯婷 <span className="text-xl md:text-2xl font-light serif italic ml-2 text-neutral-500">Tina Chong</span>
                  </h2>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mt-2">
                    Architecture Portfolio 2014—2026
                  </p>
                </div>
              </div>

              {/* 右側：右上角縮小版設計哲學 */}
              <div className="max-w-xs text-right space-y-4 lg:mt-4">
                <p className="text-sm md:text-base text-neutral-800 font-light leading-relaxed serif italic border-r border-neutral-200 pr-4">
                  "Space should be more than a cold vessel; it is an extension of life itself."
                </p>
                <div className="text-[11px] text-neutral-400 font-light leading-relaxed pr-4">
                  <p>
                    空間不應只是冰冷的容器，而是生活的延伸。<br />
                    透過重新定義室內外的界面，創造有溫度的日常風景。
                  </p>
                </div>
              </div>
            </div>

            {/* 2. 精選作品區 - 圖片會因為上方區塊併排而自動上移 */}
            <section className="pt-8 border-t border-neutral-100">
              <div className="flex justify-between items-end mb-10">
                <div className="space-y-1">
                  <h3 className="text-[16px] tracking-[0.4em] uppercase text-neutral-400 font-medium">Selected Works</h3>
                  <p className="text-[11px] text-neutral-300 tracking-[0.1em]">精選作品</p>
                </div>
                
                <button 
                  onClick={() => setView('projects')}
                  className="text-[11px] tracking-[0.3em] uppercase border-b border-neutral-300 pb-1 hover:text-black hover:border-black transition-all font-light flex items-center gap-2"
                >
                  Explore All <span className="text-[9px] italic text-neutral-400">查看所有專案</span>
                </button>
              </div>

              <div className="w-full">
                <ProjectGrid onProjectClick={navigateToProject} limit={4} />
              </div>
            </section>
          </div>
        );

      case 'about':
        return <About />;
      
      case 'projects':
        return (
          <div className="animate-in fade-in duration-700">
            <h1 className="text-5xl font-light serif mb-16 border-b border-neutral-100 pb-8">工作專案集</h1>
            <ProjectGrid onProjectClick={navigateToProject} />
          </div>
        );

      case 'student':
        return (
          <div className="animate-in fade-in duration-700">
            <h1 className="text-5xl font-light serif mb-16 border-b border-neutral-100 pb-8">學生作品</h1>
            <p className="text-neutral-500 font-light mb-12">展示了我在學期間的設計探索與學術專案。</p>
            <ProjectGrid onProjectClick={navigateToProject} />
          </div>
        );

      case 'research':
        return (
          <div className="animate-in fade-in duration-700">
            <h1 className="text-5xl font-light serif mb-16 border-b border-neutral-100 pb-8">論文研究</h1>
            <div className="space-y-12">
              <article className="border-b border-neutral-100 pb-12">
                <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 block mb-4">Master Thesis | 2024</span>
                <h3 className="text-2xl font-light serif mb-4">城市縫隙：後疫情時代的公共空間重構</h3>
                <p className="text-neutral-600 font-light leading-relaxed max-w-2xl">
                  探討高密度都市環境中，如何透過微型介入策略改善居民的心理健康與社交距離。
                </p>
              </article>
            </div>
          </div>
        );

      case 'awards':
        return renderPlaceholder('競賽獎項');
      
      case 'certs':
        return renderPlaceholder('專業證照');

      case 'contact':
        return <Contact />;

      case 'project-detail':
        return selectedProject ? (
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => setView('projects')} 
          />
        ) : null;

      default:
        return null;
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

      <main className="flex-1 px-8 py-12 md:px-16 md:py-24 md:ml-64 transition-all duration-300">
        <div className="max-w-7xl mx-auto w-full">
          {renderContent()}
        </div>
      </main>

      <footer className="md:ml-64 p-8 text-center text-[10px] text-neutral-300 tracking-[0.3em] uppercase border-t border-neutral-50">
        © 2026 ARCHI | TINA CHONG. Portfolio
      </footer>
    </div>
  );
};

export default App;