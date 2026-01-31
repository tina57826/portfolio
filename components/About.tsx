import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto px-6">
    {/* 頂部標題區 */}
      <div className="mb-12 mt-12 space-y-2">
        <h1 className="text-4xl md:text-5xl font-light serif tracking-[0.1em] text-neutral-900">
          About <span className="text-xl font-light text-neutral-400 ml-2 italic">關於我</span>
        </h1>
        
        {/* 姓名區塊 - 無底線簡潔版 */}
        <div className="pt-2">
          <h2 className="text-2xl md:text-3xl font-normal tracking-[0.15em] text-neutral-800">
            莊淯婷 <span className="text-xl md:text-2xl font-light serif italic ml-2 text-neutral-500">Tina Chong</span>
          </h2>
          {/* 可選：職稱小標 */}
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mt-2">
            Architecture Designer
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* 左側：文字內容區 - 將整體垂直間距縮小 */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* 1. 設計哲學 */}
          <section className="space-y-6">
            <p className="text-xl text-neutral-800 font-light leading-relaxed serif italic border-l-2 border-neutral-200 pl-8">
              「建築是需求者與環境和諧共榮下的產物。藉由當代建築語彙找出機能與感知間的平衡，讓每一件作品都能在土地上自然生長。」
            </p>
            <div className="space-y-6 text-lg text-neutral-500 font-light leading-relaxed">
              <p>
                身為建築工程從業者，我認為建築實踐始於對基地環境的體察，在物理環境與使用者需求間尋求最精確的平衡。我堅持『少即是多』的構築哲學，致力於將複雜的技術規範與法規限制，轉譯為結構化且純粹的設計語言。設計應隱匿為生活的背景。透過嚴謹的跨專業整合與技術圖說產出，讓複雜的工程邏輯隱於無形。當設計退位，光影、空氣與人的律動，才能真正成為空間的主角，使建築回歸感知的本質。
              </p>
            </div>
          </section>

          {/* 2. 專業核心特質 - 縮短上邊距 pt-12 -> pt-8 */}
          <section className="pt-8 border-t border-neutral-100">
            <h3 className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-6 font-medium">Core Strengths 核心特質</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h4 className="text-neutral-900 font-medium">溝通協調</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">擅長與不同專業廠商與業主溝通，具備獨立完成專案經驗，能有效媒合跨領域需求。</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-neutral-900 font-medium">資訊轉譯</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">善於將複雜的建築技術規範與使用者需求，轉譯為清晰的結構化資訊與設計圖說。</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-neutral-900 font-medium">穩定產出</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">具備追求效益與樂於嘗試的特質，能在多工環境下維持高度精確且穩定的工作產出。</p>
              </div>
            </div>
          </section>

          {/* 3. 實務經驗 - 縮短上邊距 pt-12 -> pt-8 */}
          <section className="pt-8 border-t border-neutral-100 space-y-6">
            <h3 className="text-xs tracking-[0.4em] uppercase text-neutral-400 font-medium">Professional Experience 實務經驗</h3>
            <div className="text-neutral-600 font-light leading-relaxed space-y-4">
              <p>
                具備兩年建築師事務所實務經驗，專攻公共工程。在校舍與變電所專案中，主責 Revit 建模與圖說整合，具備從基本設計、都審至建照申請的全流程經驗。
              </p>
              
              <div className="bg-neutral-50 p-6 rounded-sm border-l-2 border-neutral-200">
                <h4 className="text-sm text-neutral-900 font-medium mb-4">專業工具 Professional Tools</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <span className="text-[12px] uppercase tracking-widest text-neutral-800 block">[3D建模與製圖]</span>
                    <p className="text-sm text-neutral-800 leading-relaxed">
                      Revit, AutoCAD, Rhino, SketchUp
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[12px] uppercase tracking-widest text-neutral-800 block">[排版與渲染]</span>
                    <p className="text-sm text-neutral-800 leading-relaxed">
                      Lumion, Twinmotion, Enscape, Adobe (Ps/Ai/Id), CorelDraw
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. 學歷教育 - 縮短上邊距 pt-12 -> pt-8 */}
          <section className="pt-8 border-t border-neutral-100">
            <h3 className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-4 font-medium">Education 學歷教育</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-baseline border-b border-neutral-50 pb-3">
                <span className="text-base tracking-wide text-neutral-800">國立台灣大學 - 建築與城鄉研究所</span>
                <span className="text-sm text-neutral-300 italic">Master</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-neutral-50 pb-3">
                <span className="text-base tracking-wide text-neutral-800">逢甲大學 - 建築學系</span>
                <span className="text-sm text-neutral-300 italic">Bachelor</span>
              </li>
            </ul>
          </section>
        </div>
        
        {/* 右側：照片區 (Sticky 固定) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="relative aspect-[3/4] overflow-hidden group shadow-2xl bg-neutral-100">
            <img 
              src="https://i.postimg.cc/d3jQ5BF8/2x3-24070276-3-0908109372xu-ok.jpg" 
              alt="Tina Chong Portrait" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700"></div>
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