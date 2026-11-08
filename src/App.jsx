import React from 'react';
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

function App() {
  // Editorial Scroll Progress Indicator (subtle hairline bar at the very top)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#29241F] font-sans relative selection:bg-[#773B45]/15 selection:text-[#773B45]">
      
      {/* Editorial Scroll Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#773B45] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Editorial Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <BeyondCode />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
