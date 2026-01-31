
import React, { useState, useEffect } from 'react';
import { PROJECTS } from './constants';
import { Project, ViewState } from './types';
import Sidebar from './components/Sidebar';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';

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
          <div className="animate-in fade-in duration-700">
            <section className="mb-20">
              <h1 className="text-6xl md:text-8xl font-light serif mb-8 leading-tight">
                構造空間 <br /> 
                <span className="italic text-neutral-400">思維本質</span>
              </h1>
              <p className="max-w-xl text-lg text-neutral-600 leading-relaxed font-light">
                透過純粹的材料語言與精確的光影控制，我們致力於創造能夠觸動心靈的永恆空間。
                在這裡，建築不只是結構，更是與自然、光影、以及人的對話。
              </p>
            </section>
            <ProjectGrid onProjectClick={navigateToProject} limit={2} />
            <div className="mt-12">
              <button 
                onClick={() => setView('projects')}
                className="text-sm tracking-[0.2em] uppercase border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-all"
              >
                查看所有專案
              </button>
            </div>
          </div>
        );
      case 'about':
        return <About />;
      case 'projects':
        return (
          <div className="animate-in fade-in duration-700">
            <h1 className="text-6xl font-light serif mb-16">工作專案</h1>
            <ProjectGrid onProjectClick={navigateToProject} />
          </div>
        );
      case 'student':
        return (
          <div className="animate-in fade-in duration-700">
            <h1 className="text-6xl font-light serif mb-16">學生作品</h1>
            <p className="text-neutral-500 font-light mb-12">這裡展示了我在學期間的設計探索與學術專案。</p>
            <ProjectGrid onProjectClick={navigateToProject} />
          </div>
        );
      case 'research':
        return (
          <div className="animate-in fade-in duration-700">
            <h1 className="text-6xl font-light serif mb-16">論文研究</h1>
            <div className="space-y-12">
              <article className="border-b border-neutral-100 pb-12">
                <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 block mb-4">Master Thesis | 2024</span>
                <h3 className="text-2xl font-light serif mb-4">城市縫隙：後疫情時代的公共空間重構</h3>
                <p className="text-neutral-600 font-light leading-relaxed max-w-2xl mb-6">
                  探討高密度都市環境中，如何透過微型介入策略改善居民的心理健康與社交距離...
                </p>
                <button className="text-xs border-b border-black pb-1 tracking-widest uppercase">閱讀摘要</button>
              </article>
              <article className="border-b border-neutral-100 pb-12">
                <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 block mb-4">Journal Paper | 2023</span>
                <h3 className="text-2xl font-light serif mb-4">生成式人工智慧在初期建築平面配置之應用</h3>
                <p className="text-neutral-600 font-light leading-relaxed max-w-2xl mb-6">
                  研究機器學習模型如何協助建築師在概念階段優化動線與採光...
                </p>
                <button className="text-xs border-b border-black pb-1 tracking-widest uppercase">閱讀全文</button>
              </article>
            </div>
          </div>
        );
      case 'awards':
        return (
          <div className="animate-in fade-in duration-700">
            <h1 className="text-6xl font-light serif mb-16">競賽獎項</h1>
            <div className="space-y-8">
              {[
                { year: '2023', name: '台灣建築獎 TADA - 住宅類金獎', project: '光影之境' },
                { year: '2022', name: 'iF Design Award - 概念設計獎', project: '未來棲居' },
                { year: '2021', name: '金點設計獎 Golden Pin - 年度最佳設計', project: '森之隱居' },
              ].map((award, i) => (
                <div key={i} className="flex justify-between items-baseline border-b border-neutral-100 pb-6">
                  <div>
                    <h3 className="text-xl font-light">{award.name}</h3>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">專案：{award.project}</p>
                  </div>
                  <span className="serif italic text-neutral-300">{award.year}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'certs':
        return (
          <div className="animate-in fade-in duration-700">
            <h1 className="text-6xl font-light serif mb-16">專業證照</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                '中華民國註冊建築師 (RA)',
                'LEED AP BD+C 綠建築認證專員',
                'PMP 國際專案管理師',
                'Autodesk Certified Professional: Revit',
              ].map((cert, i) => (
                <div key={i} className="p-8 bg-neutral-50 flex items-center gap-6">
                  <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-lg font-light">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'contact':
        return <Contact />;
      case 'project-detail':
        return selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={() => setView('projects')} />
        ) : null;
      default:
        return <div>404 Not Found</div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#fafafa]">
      {/* Sidebar for desktop, Top bar for mobile */}
      <Sidebar 
        currentView={view} 
        setView={(v) => { setView(v); setIsMobileMenuOpen(false); }} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 px-6 py-12 md:px-20 md:py-20 md:ml-64 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>

      {/* Persistent AI Assistant Toggle */}
      <AIAssistant />

      {/* Footer (Minimal) */}
      <footer className="md:ml-64 p-8 text-center text-xs text-neutral-400 tracking-widest uppercase border-t border-neutral-100">
        © 2024 ARCHI | TINA CHONG Portfolio. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
