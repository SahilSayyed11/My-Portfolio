import { X, Copy, Check, Sliders, FileCode, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  focusedItem?: string;
}

export default function ConfigModal({ isOpen, onClose, focusedItem }: ConfigModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sampleSnippet = `// In src/data/portfolioData.ts
export const PORTFOLIO_DATA = {
  personal: {
    links: {
      github: "https://github.com/your-username",
      linkedin: "https://linkedin.com/in/your-profile",
      portfolio: "https://your-domain.dev",
      resumeUrl: "/resume.pdf", // Place resume.pdf in /public folder
    },
    ...
  }
};`;

  const copySnippet = () => {
    navigator.clipboard.writeText(sampleSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
    >
      <div 
        className="relative w-full max-w-xl bg-[#0c1220] border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                How to Customize Links & Profile Info
              </h3>
              <p className="text-xs text-slate-400">
                {focusedItem ? `Customizing: ${focusedItem}` : 'Centralized configuration guide'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Instructions */}
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="font-semibold text-blue-400 flex items-center gap-1.5">
              <FileCode className="w-4 h-4" />
              <span>Location: <code>src/data/portfolioData.ts</code></span>
            </div>
            <p className="text-slate-400">
              All portfolio contents, personal details, project descriptions, live demo URLs, repository links, and certifications are stored cleanly in a single file.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Social & Profile Links:</strong> Update <code className="text-blue-300">links.github</code> and <code className="text-blue-300">links.linkedin</code> with your real profile URLs.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Resume PDF:</strong> Save your resume file as <code className="text-blue-300">public/resume.pdf</code> and set <code className="text-blue-300">resumeUrl: "/resume.pdf"</code>.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Project Demos & Repos:</strong> Each item in the <code className="text-blue-300">projects</code> array has <code className="text-blue-300">liveDemoUrl</code> and <code className="text-blue-300">githubUrl</code>.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Certifications:</strong> Set <code className="text-blue-300">credentialUrl</code> for each certificate once you receive the digital URL from AWS, Microsoft, or Forage.
              </div>
            </div>
          </div>

          {/* Code block */}
          <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-3.5 font-mono text-[11px] text-slate-300">
            <button
              onClick={copySnippet}
              className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <pre className="overflow-x-auto">{sampleSnippet}</pre>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
