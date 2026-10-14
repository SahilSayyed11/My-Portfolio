/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConfigModal from './components/ConfigModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [configModalOpen, setConfigModalOpen] = useState<boolean>(false);
  const [configFocusItem, setConfigFocusItem] = useState<string>('General Configuration');

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'skills',
      'projects',
      'experience',
      'education',
      'certifications',
      'achievements',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for Escape key to dismiss modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setConfigModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openConfigNotice = (itemTitle: string) => {
    setConfigFocusItem(itemTitle);
    setConfigModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* Skip to Content for keyboard navigation */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero onOpenResumeNotice={() => openConfigNotice('Resume Download URL')} />
        <About />
        <Skills />
        <Projects onConfigNotice={openConfigNotice} />
        <Experience />
        <Education />
        <Certifications onConfigNotice={openConfigNotice} />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenConfigModal={() => openConfigNotice('Social & Profile URLs')} />

      {/* Central Configuration & Customization Modal */}
      <ConfigModal
        isOpen={configModalOpen}
        onClose={() => setConfigModalOpen(false)}
        focusedItem={configFocusItem}
      />
    </div>
  );
}
