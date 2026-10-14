import { Trophy, Award, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Achievements() {
  const icons = [Award, Trophy, Sparkles, Terminal];

  return (
    <section id="achievements" className="py-20 lg:py-28 relative border-t border-slate-900 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            07. Milestones & Accolades
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            Key Achievements
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified academic entrance achievements, industry certifications, workshop completions, and hackathon prototypes.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PORTFOLIO_DATA.achievements.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700/80 transition-all flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-slate-800/80 text-blue-400 border border-slate-700/60 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
