import React, { useState, useEffect } from "react";
import { Project } from "../types";
interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [insight, setInsight] = useState<string>("");
  const [loadingInsight, setLoadingInsight] = useState(false);

  useEffect(() => {
    const fetchInsight = async () => {
      setLoadingInsight(true);
      const text = await getArchitecturalInsight(
        project.title,
        project.description,
      );
      setInsight(text || "");
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
        <svg
          className="w-4 h-4 transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        返回列表
      </button>

      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-light serif mb-4">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-8 text-xs tracking-[0.2em] uppercase text-neutral-500 font-medium">
          <span>{project.category}</span>
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>
      </header>

      <div className="mb-20">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto aspect-video object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        <div className="md:col-span-2">
          <h2 className="text-sm tracking-[0.3em] uppercase mb-8 border-b border-neutral-100 pb-2">
            設計概念 Concept
          </h2>
          <p className="text-lg leading-relaxed text-neutral-700 font-light whitespace-pre-wrap">
            {project.description}
          </p>

          {/* AI Insight Section */}
          <div className="mt-12 p-8 bg-neutral-50 border border-neutral-100 italic">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-neutral-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              AI 建築洞察 Architectural Insight
            </h4>
            {loadingInsight ? (
              <div className="flex space-x-2">
                <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            ) : (
              <p className="text-neutral-600 text-sm leading-relaxed">
                {insight}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-sm tracking-[0.3em] uppercase mb-8 border-b border-neutral-100 pb-2">
              專案細節 Data
            </h2>
            <dl className="space-y-4">
              {project.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex justify-between border-b border-neutral-50 pb-2"
                >
                  <dt className="text-xs text-neutral-400 uppercase tracking-widest">
                    {stat.label}
                  </dt>
                  <dd className="text-xs font-medium">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

      {project.gallery.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              alt={`Gallery ${idx}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
