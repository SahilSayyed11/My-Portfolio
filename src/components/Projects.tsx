import { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  FileSpreadsheet, 
  FileText, 
  Calendar, 
  UtensilsCrossed, 
  CheckSquare, 
  ArrowRight,
  Info
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

interface ProjectsProps {
  onConfigNotice: (linkType: string) => void;
}

export default function Projects({ onConfigNotice }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Render stylized abstract preview graphic for each project
  const renderProjectVisual = (projectId: string) => {
    if (projectId === 'project-portfolio') {
      return (
        <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 to-[#0a1128] border-b border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>viewport: responsive</span>
            <span className="text-blue-400">HTML · CSS · JS</span>
          </div>

          {/* Abstract Wireframe Cards */}
          <div className="space-y-2 py-2">
            <div className="h-6 w-3/4 rounded bg-blue-500/10 border border-blue-500/20 flex items-center px-2 text-[10px] text-blue-300 font-mono">
              &lt;header&gt; Sahil Sayyed · Developer Portfolio
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-14 rounded bg-slate-800/60 border border-slate-700/40 p-1.5 flex flex-col justify-between">
                <div className="w-1/2 h-2 rounded bg-slate-700" />
                <div className="w-full h-1.5 rounded bg-slate-800" />
                <span className="text-[9px] text-slate-400 font-mono">Projects</span>
              </div>
              <div className="h-14 rounded bg-slate-800/60 border border-slate-700/40 p-1.5 flex flex-col justify-between">
                <div className="w-1/2 h-2 rounded bg-slate-700" />
                <div className="w-full h-1.5 rounded bg-slate-800" />
                <span className="text-[9px] text-slate-400 font-mono">Skills</span>
              </div>
              <div className="h-14 rounded bg-slate-800/60 border border-slate-700/40 p-1.5 flex flex-col justify-between">
                <div className="w-1/2 h-2 rounded bg-slate-700" />
                <div className="w-full h-1.5 rounded bg-slate-800" />
                <span className="text-[9px] text-slate-400 font-mono">Contact</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>semantic html5</span>
            <span className="text-emerald-400">accessible ui</span>
          </div>
        </div>
      );
    }

    if (projectId === 'project-task-management') {
      return (
        <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 to-[#0e1626] border-b border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span className="flex items-center gap-1 text-slate-400">
              <CheckSquare className="w-3.5 h-3.5 text-blue-400" />
              CRUD & Reports
            </span>
            <span className="text-amber-400">Node · Express · MySQL</span>
          </div>

          {/* Interactive progress meters / report chips */}
          <div className="space-y-2 py-1">
            <div className="p-2 rounded bg-slate-800/70 border border-slate-700/60 flex items-center justify-between text-[11px]">
              <span className="text-slate-200 font-medium">Sprint Task Milestone</span>
              <span className="text-emerald-400 font-mono text-[10px]">COMPLETED</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 p-1.5 rounded bg-rose-950/30 border border-rose-800/30 flex items-center gap-1.5 text-[10px] text-rose-300">
                <FileText className="w-3 h-3 text-rose-400" />
                <span>PDF Audit Export</span>
              </div>
              <div className="flex-1 p-1.5 rounded bg-emerald-950/30 border border-emerald-800/30 flex items-center gap-1.5 text-[10px] text-emerald-300">
                <FileSpreadsheet className="w-3 h-3 text-emerald-400" />
                <span>Excel .XLSX Export</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>mysql schema</span>
            <span className="text-blue-400">deadline tracker</span>
          </div>
        </div>
      );
    }

    if (projectId === 'project-catering-management') {
      return (
        <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 to-[#141226] border-b border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span className="flex items-center gap-1 text-slate-400">
              <UtensilsCrossed className="w-3.5 h-3.5 text-violet-400" />
              Catering Operations
            </span>
            <span className="text-violet-400">MySQL · Express.js</span>
          </div>

          {/* Abstract Event Schedule nodes */}
          <div className="space-y-2 py-1">
            <div className="p-2 rounded bg-slate-800/70 border border-slate-700/60 flex items-center justify-between text-[11px]">
              <span className="text-slate-200 font-medium">Banquet & Event Booking</span>
              <span className="text-violet-400 font-mono text-[10px]">SCHEDULED</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-1.5 rounded bg-slate-950/70 border border-slate-800 flex items-center gap-1.5 text-slate-300">
                <Calendar className="w-3 h-3 text-blue-400" />
                <span>Date Reservation</span>
              </div>
              <div className="p-1.5 rounded bg-slate-950/70 border border-slate-800 flex items-center gap-1.5 text-slate-300">
                <Layers className="w-3 h-3 text-cyan-400" />
                <span>Menu Catalog & Orders</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>customer database</span>
            <span className="text-violet-400">event coordinator</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-slate-900 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            03. Practical Implementation
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Academic projects and web development builds highlighting full CRUD lifecycle architecture, database integration, reporting capabilities, and responsive UI engineering.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/40 group"
            >
              <div>
                {/* Visual Graphic Header */}
                {renderProjectVisual(project.id)}

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    {/* Category & Badge */}
                    <div className="text-xs font-mono text-blue-400 mb-1">
                      {project.category} · {project.badge}
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Clean unboxed technology stack with separator */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1.5">
                      Technologies
                    </div>
                    <div className="text-xs text-slate-300 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="flex items-center gap-2">
                          <span>{tech}</span>
                          {i < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-slate-600">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5 pt-1">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-blue-500 font-bold">›</span>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 rounded-lg flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                >
                  <Info className="w-3.5 h-3.5 text-blue-400" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.liveDemoUrl && project.liveDemoUrl !== '#' ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onConfigNotice('Live Demo')}
                      className="p-2 text-slate-500 hover:text-slate-300 rounded-lg hover:bg-slate-800/60 transition-colors text-xs font-mono"
                      title="Live Demo URL placeholder"
                    >
                      Demo
                    </button>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                      title="Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onConfigNotice('Source Code')}
                      className="p-2 text-slate-500 hover:text-slate-300 rounded-lg hover:bg-slate-800/60 transition-colors text-xs font-mono"
                      title="Source Code URL placeholder"
                    >
                      Code
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConfigNotice={onConfigNotice}
      />
    </section>
  );
}
