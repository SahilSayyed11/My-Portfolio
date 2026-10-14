import { useState } from 'react';
import { Award, ExternalLink, Cloud, Code, BarChart3, CheckCircle2, X } from 'lucide-react';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';

interface CertificationsProps {
  onConfigNotice: (linkType: string) => void;
}

export default function Certifications({ onConfigNotice }: CertificationsProps) {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  const getFieldIcon = (field: string) => {
    switch (field) {
      case 'Cloud':
        return Cloud;
      case 'Frontend':
        return Code;
      case 'Data & AI':
        return BarChart3;
      default:
        return Award;
    }
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative border-t border-slate-900 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            06. Professional Verification
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            Certifications & Industry Credentials
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Recognized industry credentials and practical simulations across Cloud Computing, Data Analytics, and Modern Frontend Engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert) => {
            const Icon = getFieldIcon(cert.field);
            return (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 text-blue-400 border border-slate-700/60">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {cert.field}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-400 mt-1">
                    {cert.issuer}
                  </div>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* View Credential CTA */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setActiveCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      <span>Credential Details</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                  )}
                  <span className="text-[11px] font-mono text-emerald-400">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Credential Details Dialog */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
        >
          <div className="relative w-full max-w-lg bg-[#0d1321] border border-slate-700 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-bold text-white">Credential Record</span>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                aria-label="Close dialog"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-base font-bold text-white">{activeCert.title}</h4>
                <div className="text-xs text-blue-400 font-semibold">{activeCert.issuer}</div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {activeCert.description}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex items-center gap-2 text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified Resume Credential</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  As noted in the developer resume, this certification is completed. To connect a direct link to the digital certificate or badge (e.g. Credly or certificate URL), configure <code className="text-blue-400 font-mono">credentialUrl</code> in <code className="text-blue-400 font-mono">src/data/portfolioData.ts</code>.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  setActiveCert(null);
                  onConfigNotice('Credential URL');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors"
              >
                Configure Link
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
