import { ArrowDown, Github, Linkedin, Mail, ExternalLink, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import TechVisual from './TechVisual';

interface HeroProps {
  onOpenResumeNotice: () => void;
}

export default function Hero({ onOpenResumeNotice }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient light */}
      <div className="ambient-glow top-20 left-1/4 w-96 h-96 bg-blue-600/10" />
      <div className="ambient-glow top-1/3 right-1/4 w-96 h-96 bg-violet-600/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status / Location Meta */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-blue-400 font-semibold">{PORTFOLIO_DATA.personal.location}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">BCA 2024–2027</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400">Available for Opportunities</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Hello, I'm <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                  {PORTFOLIO_DATA.personal.name}
                </span>
              </h1>

              <div className="text-lg sm:text-xl font-medium text-slate-300 font-sans tracking-tight">
                {PORTFOLIO_DATA.personal.headline}
              </div>
            </div>

            {/* Intro Lead Text */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl text-pretty">
              {PORTFOLIO_DATA.personal.introLead}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Explore My Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                Contact Me
              </a>

              <button
                onClick={onOpenResumeNotice}
                className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                title="View or Configure Resume"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Secondary Social Links & Quick Contact */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="font-mono text-slate-500 uppercase tracking-wider text-[11px]">Connect:</span>

              <a
                href={PORTFOLIO_DATA.personal.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
              >
                <Mail className="w-4 h-4" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Visual Terminal */}
          <div className="lg:col-span-5 flex justify-center">
            <TechVisual />
          </div>
        </div>

        {/* Full-width Metrics & Highlights Row (Below the Hero Split) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {PORTFOLIO_DATA.highlights.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight tabular-nums">
                    {item.metric}
                  </span>
                  {item.unit && (
                    <span className="text-xs text-blue-400 font-mono font-medium">
                      {item.unit}
                    </span>
                  )}
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors focus-visible:outline-none"
            aria-label="Scroll to About Section"
          >
            <span>EXPLORE PROFILE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
