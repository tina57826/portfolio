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
            {/* 1. 首頁標題區 - 移除 ml-20，回歸左側對齊 */}
            <section className="mb-20 mt-12 md:mt-0">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-light serif mb-16 leading-tight tracking-[0.05em] text-neutral-900">
                Architecture Portfolio <span className="text-xl md:text-2xl font-extralight text-neutral-500 ml-2">2014~2026</span>
                <br /> 
                <span className="not-italic text-neutral-600 block mt-4 text-3xl md:text-4xltracking-[0.2em]">
                  莊淯婷 <span className="not-italic text-2xl md:text-3xl tracking-[0.2em] ml-6 font-light text-neutral-400">
                    Tina Chong
                  </span>
                </span>
              </h1>

              {/* 2. 文案區 - 解放寬度，水平延伸 */}
              <div className="space-y-12">
                <div className="relative">
                  <p className="text-xl md:text-2xl lg:text-3xl font-light leading-snug text-neutral-800 serif italic border-l-2 border-neutral-200 pl-8 py-2">
                    "Space should be more than a cold vessel; it is an extension of life itself."
                  </p>
                </div>
                <div className="pl-8">
                  <p className="text-base md:text-lg lg:text-xl text-neutral-500 font-light leading-relaxed tracking-[0.12em] w-full max-w-none">
                    空間不應只是冰冷的容器，而是生活的延伸。透過重新定義室內外的界面，讓建築成為連結自然與心靈的橋樑，創造有溫度的日常風景。
                  </p>
                </div>
              </div>
            </section>

            {/* 3. 專案預覽區 - 同樣保持左對齊，鋪滿寬度 */}
            <div className="w-full mt-24">
              <div className="flex justify-between items-end mb-10">
                <h2 className="text-xs tracking-[0.4em] uppercase text-neutral-400">Selected Works / 精選作品</h2>
              </div>
              <ProjectGrid onProjectClick={navigateToProject} limit={2} />
              <div className="mt-16">
                <button 
                  onClick={() => setView('projects')}
                  className="text-[10px] tracking-[0.4em] uppercase border-b border-black pb-2 hover:text-neutral-400 hover:border-neutral-400 transition-all font-light"
                >
                  Explore All / 查看所有專案
                </button>
              </div>
            </div>
          </div>
        );

      case 'about':
        return <About />;
      
      case 'projects':
        return (
          <div className="animate-in fade-in duration-700">
            <h1 className="text-5xl font-light serif mb-16 border-b border-neutral-100 pb-8">工作專案</h1>
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
        {/* max-w-7xl 確保在大螢幕上有足夠寬度展開文字 */}
        <div className="max-w-7xl mx-auto w-full">
          {renderContent()}
        </div>
      </main>

      <footer className="md:ml-64 p-8 text-center text-[10px] text-neutral-300 tracking-[0.3em] uppercase border-t border-neutral-50">
        © 2024 ARCHI | TINA CHONG. Portfolio
      </footer>
    </div>
  );
};

export default App;