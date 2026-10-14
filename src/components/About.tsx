import { GraduationCap, Award, ShieldCheck, Code, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function About() {
  const cards = [
    {
      icon: GraduationCap,
      title: "BCA Student (2024–2027)",
      desc: "College of Computer Science & Information Technology, Latur (Affiliated with SRTMU, Nanded)",
      accent: "text-blue-400"
    },
    {
      icon: Award,
      title: "72.09 Percentile — MHT BCA CET",
      desc: "Competitive entrance examination score listed in education records",
      accent: "text-amber-400"
    },
    {
      icon: ShieldCheck,
      title: "4+ Industry Certifications",
      desc: "Credentials from AWS, Microsoft Azure, Deloitte, Tata / Forage & Simplilearn",
      accent: "text-emerald-400"
    },
    {
      icon: Code,
      title: "Full Stack & Cybersecurity",
      desc: "Hands-on web engineering coupled with ongoing studies in Linux CLI, networking & AI tools",
      accent: "text-violet-400"
    }
  ];

  const focusPoints = [
    "Full-Stack Web Development (HTML, CSS, JS, React.js, Node.js)",
    "Relational Database modeling & CRUD operations with MySQL",
    "Version Control workflows & collaborative Git / GitHub practices",
    "Translating design mockups into pixel-accurate, cross-browser interfaces",
    "Systems, TCP/IP networking, and Linux command-line essentials",
    "AI Tools integration for enhanced productivity and debugging"
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-slate-900 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            01. Background & Profile
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            About Sahil Sayyed
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Motivated developer blending modern web engineering with an active focus on cybersecurity fundamentals, cloud concepts, and artificial intelligence.
          </p>
        </div>

        {/* 2-Column Split: Detailed Story + Key Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story & Professional Goal */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/90 leading-relaxed text-slate-300 space-y-4">
              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                {PORTFOLIO_DATA.personal.aboutSummary}
              </p>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Professional Goal</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed italic">
                  "{PORTFOLIO_DATA.personal.professionalGoal}"
                </p>
              </div>
            </div>

            {/* Quick Fact Sheet Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                  <MapPin className="w-3 h-3 text-blue-400" />
                  <span>Location</span>
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-1">Latur, Maharashtra</div>
                <div className="text-[10px] text-slate-500">India</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-[11px] text-slate-500 font-mono">Primary Degree</div>
                <div className="text-xs font-semibold text-slate-200 mt-1">BCA (2024–2027)</div>
                <div className="text-[10px] text-emerald-400">Currently Pursuing</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 col-span-2 sm:col-span-1">
                <div className="text-[11px] text-slate-500 font-mono">Core Focus</div>
                <div className="text-xs font-semibold text-slate-200 mt-1">Full Stack & Cyber</div>
                <div className="text-[10px] text-violet-400">Web, Systems & AI</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Compact Highlight Cards & Capabilities List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Key Highlights
            </div>

            <div className="space-y-3">
              {cards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-slate-800/80 shrink-0 mt-0.5">
                      <IconComponent className={`w-4 h-4 ${card.accent}`} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-100">
                        {card.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {card.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Core Competencies Checklist */}
            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 space-y-2.5">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Technical Execution Highlights
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {focusPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
