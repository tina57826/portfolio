
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <h1 className="text-6xl font-light serif mb-16">關於我</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div className="space-y-8">
          <p className="text-xl text-neutral-600 font-light leading-relaxed italic">
            「建築不是關於解決問題，而是關於創造一個新的、有意義的實體，使其與人類的靈魂共鳴。」
          </p>
          <div className="space-y-4 text-neutral-500 font-light leading-relaxed">
            <p>
              我是 TINA CHONG。我認為建築師的任務是重構人與自然的界面。我的設計實踐始於對基地細微變化的觀察，透過對材料的純粹運用，讓空間回歸居住的本質，創造出能與使用者產生情感共鳴的日常場景。
            </p>
            <p>
              核心哲學源於對「少即是多」的堅持，以及對環境敏感度的深刻理解。我相信好的設計不應喧賓奪主，而應成為生活的背景，讓光影、空氣與人的活動成為空間的主角。
            </p>
          </div>
          
          <div className="pt-8">
            <h3 className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-6">學歷教育 Education</h3>
            <ul className="space-y-4 text-sm font-light">
              <li>國立台灣大學 - 建築與城鄉研究所 碩士</li>
              <li>逢甲大學 - 建築學系 學士</li>
            </ul>
          </div>
        </div>
        
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dee62?auto=format&fit=crop&q=80&w=800" 
            alt="Designer Portrait" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute bottom-8 right-8 text-white text-right">
            <span className="text-[10px] tracking-widest uppercase block mb-1">Architect / Designer</span>
            <span className="serif italic text-lg">TINA CHONG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
