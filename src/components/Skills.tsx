import { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Shield, 
  Wrench, 
  Layers, 
  Cpu, 
  Sparkles, 
  Languages as LangIcon,
  CheckCircle2,
  Brain
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'security', label: 'Cyber & Systems' },
    { id: 'tools', label: 'Languages & Tools' },
  ];

  const getFilteredCategories = () => {
    if (selectedFilter === 'all') return PORTFOLIO_DATA.skillCategories;
    if (selectedFilter === 'frontend') {
      return PORTFOLIO_DATA.skillCategories.filter(c => c.title.includes('Frontend'));
    }
    if (selectedFilter === 'backend') {
      return PORTFOLIO_DATA.skillCategories.filter(c => c.title.includes('Backend') || c.title.includes('Databases'));
    }
    if (selectedFilter === 'security') {
      return PORTFOLIO_DATA.skillCategories.filter(c => c.title.includes('Cybersecurity'));
    }
    if (selectedFilter === 'tools') {
      return PORTFOLIO_DATA.skillCategories.filter(c => c.title.includes('Programming') || c.title.includes('Tools'));
    }
    return PORTFOLIO_DATA.skillCategories;
  };

  const getCategoryIcon = (title: string) => {
    if (title.includes('Programming')) return Cpu;
    if (title.includes('Frontend')) return Code2;
    if (title.includes('Backend')) return Layers;
    if (title.includes('Databases')) return Database;
    if (title.includes('Cybersecurity')) return Shield;
    if (title.includes('Tools')) return Wrench;
    return Terminal;
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-slate-900 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              02. Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Technical Skills & Tooling
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Core technologies, systems knowledge, and development workflows grounded in verified coursework, academic projects, and hands-on laboratory experience.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 ${
                  selectedFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredCategories().map((cat, idx) => {
            const Icon = getCategoryIcon(cat.title);
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 text-blue-400 border border-slate-700/60">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Skills List without Pill Clutter */}
                  <div className="space-y-2.5 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/50 flex items-start justify-between gap-2"
                      >
                        <div>
                          <div className="text-xs font-semibold text-slate-200">
                            {skill.name}
                          </div>
                          {skill.note && (
                            <div className="text-[11px] text-slate-400 mt-0.5">
                              {skill.note}
                            </div>
                          )}
                        </div>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500/80 shrink-0 mt-0.5" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills & Languages Sub-Sections */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 border-t border-slate-800/80">
          {/* Soft Skills */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-violet-400" />
              <h3 className="text-base font-bold text-white font-heading">
                Professional Soft Skills
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              Interpersonal and analytical strengths demonstrated during academic group initiatives, peer code reviews, and project delivery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {PORTFOLIO_DATA.softSkills.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/30 border border-slate-800/70 hover:border-slate-700/70 transition-colors"
                >
                  <div className="text-xs font-semibold text-slate-200">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <LangIcon className="w-4 h-4 text-cyan-400" />
              <h3 className="text-base font-bold text-white font-heading">
                Language Proficiencies
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              Multilingual fluency for cross-regional and international professional collaboration.
            </p>

            <div className="space-y-2.5 pt-1">
              {PORTFOLIO_DATA.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/30 border border-slate-800/70 flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-200">
                      {lang.language}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {lang.desc}
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium text-cyan-400 shrink-0">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
