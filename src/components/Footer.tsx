import { ArrowUp, Github, Linkedin, Mail, Heart, Sliders } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenConfigModal: () => void;
}

export default function Footer({ onOpenConfigModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-slate-900 bg-[#05070c] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand lockup */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center font-bold text-white text-xs">
                {PORTFOLIO_DATA.personal.initials}
              </div>
              <span className="text-base font-bold text-white tracking-tight font-heading">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              {PORTFOLIO_DATA.personal.headline} · Latur, Maharashtra, India
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.links.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-1 text-xs"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConfigModal}
              className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Sliders className="w-3 h-3" />
              <span>Customize URLs & Profile Config</span>
            </button>
            <span aria-hidden="true">·</span>
            <span>Built with React & Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
