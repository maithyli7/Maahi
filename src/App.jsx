import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { BeyondCode } from './components/BeyondCode';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ArrowUp } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-300 selection:bg-purple-500/30 selection:text-purple-300 ${
      darkMode ? 'bg-[#0B0D12] text-[#F5F5F5]' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Scroll Progress Bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Custom dynamic cursor */}
      <CustomCursor />

      {/* Global Background Grid Pattern */}
      <div 
        className={`fixed inset-0 pointer-events-none transition-opacity duration-500 ${
          darkMode ? 'bg-grid-pattern opacity-60' : 'bg-grid-pattern-light opacity-70'
        }`} 
      />

      {/* Navigation */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <BeyondCode darkMode={darkMode} />
        <ResumeSection darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl border shadow-xl transition-all ${
            darkMode
              ? 'bg-[#171C27]/90 border-white/10 text-purple-400 hover:text-white hover:border-purple-500/50 hover:bg-[#1f2635]'
              : 'bg-white border-black/10 text-purple-600 hover:text-purple-800 hover:shadow-2xl'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
}

export default App;

