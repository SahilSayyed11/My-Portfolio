import { X, ExternalLink, Github, CheckCircle2, Server, Database, Code2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onConfigNotice: (linkType: string) => void;
}

export default function ProjectModal({ project, onClose, onConfigNotice }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0d1321] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-900/60">
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
              {project.category} · {project.badge || 'Academic Project'}
            </div>
            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white mt-1">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Subtitle & Full Description */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-1">
              {project.subtitle}
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Tech Stack Unboxed */}
          <div>
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Technology Stack
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-slate-900 border border-slate-800 rounded-md text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Functional Features & Capabilities
            </div>
            <div className="space-y-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2 rounded-lg bg-slate-950/40 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-800/30 text-xs text-slate-300 space-y-1">
              <div className="font-semibold text-blue-400 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" />
                <span>Architecture & Implementation Notes</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {project.architectureNotes}
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-950/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500 font-mono">
            Configurable repository & demo links
          </div>

          <div className="flex items-center gap-3">
            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center gap-1.5 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                onClick={() => onConfigNotice('Live Demo')}
                className="px-4 py-2 text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 rounded-xl hover:text-slate-200 transition-colors"
              >
                Live Demo (Placeholder)
              </button>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            ) : (
              <button
                onClick={() => onConfigNotice('Source Code')}
                className="px-4 py-2 text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 rounded-xl hover:text-slate-200 transition-colors"
              >
                Source Code (Placeholder)
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
