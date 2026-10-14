import { GraduationCap, Award, Calendar, School, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative border-t border-slate-900 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            05. Academic Qualifications
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            Education Timeline
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal computer applications foundation, higher secondary pre-university studies, and high school academic achievements.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {PORTFOLIO_DATA.education.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700/80 transition-all space-y-4"
            >
              {/* Top row: Degree & Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-blue-400 border border-slate-700/60">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.degree}
                    </h3>
                    <div className="text-xs text-slate-400 font-medium">
                      {item.institution}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.period}</span>
                  </span>
                  <span className="text-emerald-400 font-semibold px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-800/40">
                    {item.scoreOrStatus}
                  </span>
                </div>
              </div>

              {/* Board / University */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Building2 className="w-3.5 h-3.5 text-slate-500" />
                <span>Affiliation: {item.boardOrUniversity}</span>
              </div>

              {/* Entrance Examination highlight if present */}
              {item.entranceExam && (
                <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-800/30 flex items-center justify-between text-xs">
                  <span className="text-blue-300 font-medium flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-blue-400" />
                    Entrance Examination
                  </span>
                  <span className="font-mono text-blue-300 font-semibold">
                    {item.entranceExam}
                  </span>
                </div>
              )}

              {/* Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-slate-600 font-bold">›</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
