
import React from 'react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const menuItems: { id: ViewState; label: string }[] = [
    { id: 'home', label: '首頁' },
    { id: 'about', label: '關於我' },
    { id: 'projects', label: '工作專案' },
    { id: 'student', label: '學生作品' },
    { id: 'research', label: '論文研究' },
    { id: 'awards', label: '競賽獎項' },
    { id: 'certs', label: '專業證照' },
    { id: 'contact', label: '聯繫方式' },
  ];

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#fafafa]/80 backdrop-blur-sm z-50 flex items-center justify-between px-6 border-b border-neutral-100">
        <div className="flex flex-col">
          <span className="serif font-bold text-xl tracking-tighter leading-none">ARCHI</span>
          <span className="text-[8px] tracking-[0.2em] uppercase text-neutral-500 font-medium">TINA CHONG</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col space-y-6 overflow-y-auto animate-in slide-in-from-top duration-300">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`text-xl font-light text-left py-2 ${currentView === item.id ? 'text-black' : 'text-neutral-400'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col justify-between py-16 px-12 border-r border-neutral-100 z-30">
        <div className="overflow-y-auto no-scrollbar">
          <div className="mb-16">
            <h1 className="serif font-bold text-3xl tracking-tighter leading-none">ARCHI</h1>
            <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-medium mt-1">TINA CHONG</p>
            <p className="text-[8px] tracking-[0.3em] uppercase text-neutral-300 font-medium mt-4">Portfolio 2024</p>
          </div>

          <ul className="space-y-5">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setView(item.id)}
                  className={`group relative text-xs tracking-widest uppercase transition-colors duration-300 ${
                    currentView === item.id || (currentView === 'project-detail' && (item.id === 'projects' || item.id === 'student'))
                      ? 'text-black'
                      : 'text-neutral-400 hover:text-neutral-800'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black transition-transform duration-300 ${
                    currentView === item.id
                      ? 'scale-100'
                      : 'scale-0'
                  }`} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="text-neutral-400 hover:text-black transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="text-neutral-400 hover:text-black transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
          <p className="text-[10px] text-neutral-400 tracking-widest leading-relaxed">
            台北市信義區忠孝東路五段100號<br />
            +886 2 2345 6789
          </p>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
