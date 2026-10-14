import { Briefcase, GitBranch, Layout, MonitorCheck, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Experience() {
  const { internshipExperience } = PORTFOLIO_DATA;

  const workflows = [
    {
      icon: Layout,
      title: "UI/UX & Mockup Translation",
      desc: "Converted design mockups into functional, pixel-accurate web pages with clean layout consistency."
    },
    {
      icon: GitBranch,
      title: "Version Control & Reviews",
      desc: "Managed branching workflows in Git, structured commit logs, and contributed to team code reviews."
    },
    {
      icon: MonitorCheck,
      title: "Cross-Device Compatibility",
      desc: "Thoroughly tested responsive layouts across modern browser engines and varying mobile screen viewports."
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t border-slate-900 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            04. Practical Engineering Experience
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            Internship Experience
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical development responsibilities and real-world frontend web production workflows from professional internship training.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/90 space-y-8">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {internshipExperience.roleTitle}
                  </h3>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {internshipExperience.tagline}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs font-mono text-emerald-400 font-medium">
                  Practical Industry Training
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Resume-Verified Responsibilities
                </div>
              </div>
            </div>

            {/* Resume Responsibilities List */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Key Responsibilities & Deliverables
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {internshipExperience.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/70 flex items-start gap-3 text-xs text-slate-300 leading-relaxed hover:border-slate-700/80 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Workflows */}
            <div className="pt-6 border-t border-slate-800/80 space-y-4">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Methodologies & Standards Applied
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {workflows.map((wf, idx) => {
                  const Icon = wf.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/70"
                    >
                      <Icon className="w-4 h-4 text-blue-400 mb-2" />
                      <div className="text-xs font-semibold text-slate-200">
                        {wf.title}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                        {wf.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skills Utilized */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider mr-1">
                Tools & Technologies:
              </span>
              {internshipExperience.skillsUtilized.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300 font-mono text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
