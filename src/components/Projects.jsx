import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Layers, 
  Sparkles, 
  Cpu, 
  Database, 
  CheckCircle2, 
  X,
  ExternalLink,
  Code2
} from 'lucide-react';
import { BrandIcons } from './BrandIcons';
import { PROJECTS } from '../data/portfolioData';

export const Projects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute left-1/3 top-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-cyan-400 font-semibold mb-2 flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-cyan-400"></span>
            SECTION 05
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Things I've </span>
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Built
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A selection of practical engineering projects spanning IoT embedded systems, Django full-stack portals, and relational database management.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl border flex flex-col justify-between overflow-hidden transition-all duration-300 group ${
                darkMode 
                  ? 'bg-[#121620] border-white/10 hover:border-purple-500/50 hover:bg-[#161c29]' 
                  : 'bg-white border-black/10 hover:border-purple-400 hover:shadow-xl'
              }`}
            >
              {/* Project Card Graphic / Header */}
              <div className={`p-6 border-b relative ${
                darkMode ? 'border-white/5 bg-[#171C27]' : 'border-black/5 bg-gray-50'
              }`}>
                {/* Visual Graphic Representation */}
                <div className="h-32 w-full rounded-xl bg-gradient-to-tr from-purple-950/40 via-[#161f33] to-cyan-950/40 border border-white/5 flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:border-purple-400/30 transition-colors">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  
                  {project.hasHardware ? (
                    <Cpu className="w-10 h-10 text-cyan-400 mb-2 transition-transform group-hover:scale-110" />
                  ) : (
                    <Code2 className="w-10 h-10 text-purple-400 mb-2 transition-transform group-hover:scale-110" />
                  )}
                  
                  <span className="text-[11px] font-mono tracking-widest uppercase text-gray-300 z-10 font-medium">
                    {project.badge}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-purple-500/15 text-purple-300 border border-purple-500/25">
                    {project.category}
                  </span>
                  {project.category.includes('SIH') && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      National Hackathon
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`font-heading font-bold text-lg sm:text-xl mb-3 group-hover:text-purple-400 transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                          darkMode ? 'bg-[#1e2536] text-gray-300' : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        title="Repository Placeholder"
                        className={`p-2 rounded-lg border transition-colors ${
                          darkMode 
                            ? 'border-white/10 hover:border-purple-400 text-gray-300 hover:text-white' 
                            : 'border-black/10 hover:border-purple-500 text-gray-700 hover:text-purple-600'
                        }`}
                      >
                        <BrandIcons.Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for View Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`max-w-2xl w-full rounded-2xl border p-6 sm:p-8 max-h-[85vh] overflow-y-auto relative ${
                  darkMode ? 'bg-[#121620] border-white/15 text-white' : 'bg-white border-black/15 text-gray-900 shadow-2xl'
                }`}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-4">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl mb-3">
                  {selectedProject.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedProject.fullDescription}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3">
                    Key Architectural Features
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-3">
                    Technologies Interfaced
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className={`text-xs font-mono px-3 py-1 rounded-md ${
                          darkMode ? 'bg-[#1b2231] text-gray-200 border border-white/5' : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-2 transition-colors"
                  >
                    <BrandIcons.Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>

                  <span className="text-xs font-mono text-gray-400">
                    Active Codebase
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
