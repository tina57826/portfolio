import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto px-6">
      {/* 頂部標題 */}
      <h1 className="text-4xl md:text-5xl font-light serif mb-16 tracking-[0.1em] text-neutral-900 mt-12">
        About <span className="text-xl font-light text-neutral-400 ml-4">關於我</span>
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* 左側文字欄 (佔 7 格) */}
        <div className="lg:col-span-7 space-y-12">
          <p className="text-2xl text-neutral-600 font-light leading-relaxed italic border-l-2 border-neutral-200 pl-8">
            「建築不是關於解決問題，而是關於創造一個新的、有意義的實體，使其與人類的靈魂共鳴。」
          </p>
          
          <div className="space-y-6 text-lg text-neutral-500 font-light leading-relaxed">
            <p>
              我是莊淯婷，我認為建築設計師的任務是重構人與自然的界面。我的設計實踐始於對基地細微變化的觀察，透過對材料的純粹運用，讓空間回歸居住的本質。
            </p>
            <p>
              核心哲學源於對「少即是多」的堅持，我相信好的設計不應喧賓奪主，而應成為生活的背景，讓光影、空氣與人的活動成為空間的主角。
            </p>
          </div>
          
          {/* 學歷區塊 */}
          <div className="pt-12 border-t border-neutral-100">
            <h3 className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-8 font-medium">Education 學歷教育</h3>
            <ul className="space-y-8">
              <li className="flex justify-between items-baseline border-b border-neutral-50 pb-4">
                <span className="text-xl tracking-wide text-neutral-800">國立台灣大學 - 建築與城鄉研究所</span>
                <span className="text-sm text-neutral-300 italic ml-4">Master</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-neutral-50 pb-4">
                <span className="text-xl tracking-wide text-neutral-800">逢甲大學 - 建築學系</span>
                <span className="text-sm text-neutral-300 italic ml-4">Bachelor</span>
              </li>
            </ul>
          </div>
        </div>
        
       {/* 右側照片欄 (佔 5 格) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="relative aspect-[3/4] overflow-hidden group shadow-2xl bg-neutral-100">
            <img 
              src="https://i.postimg.cc/hGt7w7QP/24070276-3-0908109372-ok.jpg" 
              alt="Tina Chong Portrait" 
              /* 移除了 grayscale，現在預設就是彩色 */
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800";
              }}
            />
            {/* 稍微降低遮罩感，讓彩色照片色彩更鮮明 */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-700"></div>
            
            {/* 名字標籤 */}
            <div className="absolute bottom-10 right-10 text-white text-right drop-shadow-lg">
              <span className="text-[11px] tracking-[0.3em] uppercase block mb-2 opacity-90 font-medium">
                Architecture Designer
              </span>
              <span className="serif italic text-3xl block">
                TINA CHONG <span className="not-italic text-base ml-2 font-light">莊淯婷</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;