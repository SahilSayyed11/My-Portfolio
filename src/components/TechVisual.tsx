import { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, Code2, Server, Database, CheckCircle2, Play } from 'lucide-react';

export default function TechVisual() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'security' | 'stack'>('terminal');
  const [commandIndex, setCommandIndex] = useState(0);

  const commandLogs = [
    { cmd: "whoami", out: "sahil_sayyed@latur ~ full_stack_dev & security_enthusiast" },
    { cmd: "fetch --profile", out: "BCA Student (2024-2027) | SRTMU Nanded | 72.09%ile CET" },
    { cmd: "sys.status", out: "Active: Building responsive web apps, learning Linux & AI" },
    { cmd: "git status", out: "On branch main. All systems operational. Ready to collaborate." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCommandIndex((prev) => (prev + 1) % commandLogs.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [commandLogs.length]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Ambient background glows */}
      <div className="ambient-glow -top-12 -left-12 w-64 h-64 bg-blue-600" />
      <div className="ambient-glow -bottom-12 -right-12 w-64 h-64 bg-violet-600" />

      {/* Main Container */}
      <div className="relative rounded-2xl border border-slate-800 bg-[#0c1220]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400">sahil-dev-core</span>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center gap-1 p-0.5 bg-slate-950/80 rounded-lg border border-slate-800/60">
            <button
              onClick={() => setActiveTab('terminal')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                activeTab === 'terminal'
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>CLI</span>
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                activeTab === 'security'
                  ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Shield className="w-3 h-3" />
              <span>Cyber</span>
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                activeTab === 'stack'
                  ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3 h-3" />
              <span>Stack</span>
            </button>
          </div>
        </div>

        {/* Tab Body */}
        <div className="p-5 min-h-[310px]">
          {activeTab === 'terminal' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-800/60">
                <span>OS: Linux x86_64 / Bash</span>
                <span>Session: Active</span>
              </div>

              {commandLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-300 ${
                    idx === commandIndex ? 'opacity-100 translate-x-0' : 'opacity-40'
                  }`}
                >
                  <div className="flex items-center gap-2 text-blue-400">
                    <span className="text-slate-600">$</span>
                    <span className="font-semibold">{log.cmd}</span>
                    {idx === commandIndex && (
                      <span className="w-2 h-4 bg-blue-400 animate-pulse ml-0.5" />
                    )}
                  </div>
                  <div className="mt-1 pl-4 text-slate-300 text-[11px] leading-relaxed">
                    {log.out}
                  </div>
                </div>
              ))}

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Play className="w-3 h-3 text-blue-400" />
                  Auto-executing diagnostic loop
                </span>
                <span className="tabular-nums">{(commandIndex + 1)}/4</span>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-violet-400" />
                  <span className="text-xs font-semibold text-slate-200">Cybersecurity & Systems Foundation</span>
                </div>
                <span className="text-[11px] text-violet-400/90 font-mono">TCP/IP · Linux CLI</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Networking Stack</div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">TCP/IP, HTTP/S, DNS</div>
                  <div className="text-[10px] text-slate-500 mt-1">Protocol suites & subnetting</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Operating System</div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">Linux Environment</div>
                  <div className="text-[10px] text-slate-500 mt-1">Shell scripting, file permissions</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Core Defenses</div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">Security Concepts</div>
                  <div className="text-[10px] text-slate-500 mt-1">Authentication, hashing, threats</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Cloud & Architecture</div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">AWS & Azure Certified</div>
                  <div className="text-[10px] text-slate-500 mt-1">Solutions Architect & Cloud basics</div>
                </div>
              </div>

              <div className="mt-3 p-2 rounded-lg bg-violet-950/20 border border-violet-800/30 flex items-center justify-between text-xs text-violet-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                  Continuous practical labs & CTF exploration
                </span>
                <span className="text-[10px] font-mono text-violet-400">ACTIVE</span>
              </div>
            </div>
          )}

          {activeTab === 'stack' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-slate-200">Full Stack Engineering Stack</span>
                </div>
                <span className="text-[11px] text-blue-400 font-mono">React · Node · MySQL</span>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-xs font-medium text-slate-200">Frontend Tier</div>
                      <div className="text-[11px] text-slate-400">React.js, JavaScript, HTML5, CSS3, Bootstrap</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono">Responsive</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <Server className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-xs font-medium text-slate-200">Backend Tier</div>
                      <div className="text-[11px] text-slate-400">Node.js, Express.js, RESTful APIs, Server Logic</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono">REST</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <Database className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-xs font-medium text-slate-200">Data Tier</div>
                      <div className="text-[11px] text-slate-400">MySQL, Relational CRUD, Schema Management</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono">Relational</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer strip */}
        <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span className="font-mono">Location: Latur, Maharashtra</span>
          <span className="font-mono text-blue-400">BCA 2024-2027</span>
        </div>
      </div>
    </div>
  );
}
