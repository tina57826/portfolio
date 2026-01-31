import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { GoogleGenAI } from "@google/genai";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const getArchitecturalInsight = async (title: string, description: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `作為一名專業建築評論家，請針對以下建築專案提供一段簡短（約 150 字）且具深度的設計洞察，使用繁體中文。
      專案標題：${title}
      專案描述：${description}
      請從空間邏輯、材料性、光影或人文關懷等角度進行評論。口吻應優雅、專業且具啟發性。`,
    });
    return response.text || "無法生成洞察。";
  } catch (error) {
    console.error("AI Insight Error:", error);
    return "暫時無法連接 AI 建築分析。";
  }
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [insight, setInsight] = useState<string>('');
  const [loadingInsight, setLoadingInsight] = useState(false);

  useEffect(() => {
    const fetchInsight = async () => {
      setLoadingInsight(true);
      const text = await getArchitecturalInsight(project.title, project.description);
      setInsight(text);
      setLoadingInsight(false);
    };
    fetchInsight();
  }, [project]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <button 
        onClick={onBack}
        className="mb-12 text-xs tracking-widest uppercase text-neutral-400 hover:text-black flex items-center gap-2 group transition-colors"
      >
        <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
        返回列表 Back to List
      </button>

      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-light serif mb-6 text-neutral-900">{project.title}</h1>
        <div className="flex flex-wrap gap-8 text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-medium">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-neutral-300 rounded-full" />
            {project.category}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-neutral-300 rounded-full" />
            {project.location}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-neutral-300 rounded-full" />
            {project.year}
          </span>
        </div>
      </header>

      <div className="mb-20 overflow-hidden bg-neutral-100">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-auto aspect-video object-cover hover:scale-105 transition-transform duration-[2s]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-[10px] tracking-[0.4em] uppercase mb-8 border-b border-neutral-100 pb-2 text-neutral-400 font-medium">
              設計概念 Concept
            </h2>
            <p className="text-lg leading-relaxed text-neutral-700 font-light whitespace-pre-wrap serif italic">
              {project.description}
            </p>
          </section>
          
          {/* AI Insight Section */}
          <div className="p-10 bg-white border border-neutral-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-50 -mr-16 -mt-16 rotate-45 pointer-events-none" />
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-neutral-400 mb-6 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-600"></span>
              </span>
              AI 建築分析 ARCHITECTURAL INSIGHT
            </h4>
            {loadingInsight ? (
              <div className="flex space-x-2 py-4">
                <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            ) : (
              <p className="text-neutral-600 text-[15px] leading-relaxed serif font-light">
                {insight}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-[10px] tracking-[0.4em] uppercase mb-8 border-b border-neutral-100 pb-2 text-neutral-400 font-medium">
              專案細節 Data
            </h2>
            <dl className="space-y-6">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1 border-b border-neutral-50 pb-4">
                  <dt className="text-[9px] text-neutral-300 uppercase tracking-[0.2em] font-medium">{stat.label}</dt>
                  <dd className="text-sm font-light text-neutral-800">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

      {project.gallery.length > 0 && (
        <section>
          <h2 className="text-[10px] tracking-[0.4em] uppercase mb-12 text-center text-neutral-300 font-medium">
            Gallery / 影像紀錄
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="overflow-hidden bg-neutral-100">
                <img 
                  src={img} 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
                  alt={`Gallery ${idx}`} 
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
