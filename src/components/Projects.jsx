import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';
import { BrandIcons } from './BrandIcons';
import { PROJECTS_DATA } from '../data/portfolioData';

// Tasteful Editorial Vector Illustration for Projects
const ProjectVisual = ({ type, title }) => {
  return (
    <div className="w-full h-full min-h-[280px] sm:min-h-[340px] bg-[#EFEAE1] border border-[#DDD6CB] flex flex-col items-center justify-center p-8 relative overflow-hidden group-hover:border-[#773B45] transition-colors duration-500">
      {/* Background Architectural Grid Lines */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #DDD6CB 1px, transparent 1px), linear-gradient(to bottom, #DDD6CB 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }}
      />

      {/* Decorative Editorial Border Stamp */}
      <div className="absolute top-4 left-4 font-sans text-[10px] tracking-[0.2em] uppercase text-[#77716A]">
        FIG. {type.toUpperCase()}
      </div>

      <div className="relative z-10 text-center max-w-xs">
        <div className="w-16 h-16 mx-auto mb-4 border border-[#773B45]/40 flex items-center justify-center bg-[#F8F5EF] text-[#773B45] font-serif italic text-2xl group-hover:scale-105 transition-transform duration-500">
          M
        </div>
        <span className="font-serif text-2xl text-[#29241F] block mb-1">
          {title}
        </span>
        <span className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#77716A] block">
          ENGINEERING PROTOTYPE
        </span>
      </div>

      <div className="absolute bottom-4 right-4 font-sans text-[10px] tracking-[0.2em] uppercase text-[#B58D8C]">
        2025&ndash;2026
      </div>
    </div>
  );
};

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="work" className="py-24 sm:py-36 bg-[#F8F5EF]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-20 sm:mb-28">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#773B45] font-medium block mb-3">
            04 / SELECTED WORK
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#29241F] font-normal tracking-tight leading-tight max-w-2xl">
            A selection of things I've built.
          </h2>
        </div>

        {/* Alternating Editorial Project Showcases */}
        <div className="space-y-24 sm:space-y-36">
          {PROJECTS_DATA.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Area (6 cols) */}
                <div className={`lg:col-span-6 group cursor-pointer ${isReversed ? 'lg:order-2' : 'lg:order-1'}`} onClick={() => setActiveProject(project)}>
                  <div className="relative overflow-hidden p-2 bg-[#FFFFFF] border border-[#DDD6CB] shadow-[0_4px_24px_rgba(41,36,31,0.03)] group-hover:shadow-[0_8px_32px_rgba(41,36,31,0.06)] transition-all duration-500">
                    <ProjectVisual type={project.illustration} title={project.title} />
                  </div>
                </div>

                {/* Details Area (6 cols) */}
                <div className={`lg:col-span-6 flex flex-col justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Category & Numbering */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-xs tracking-[0.22em] text-[#773B45] font-medium">
                      PROJECT {project.number}
                    </span>
                    <span className="text-[#DDD6CB]">&mdash;</span>
                    <span className="font-sans text-[11px] tracking-[0.16em] uppercase text-[#77716A]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#29241F] font-normal tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="font-serif italic text-lg text-[#77716A] mb-5">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base text-[#77716A] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Labels */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-sans text-[11px] tracking-[0.12em] uppercase px-3 py-1 bg-[#EFEAE1]/70 text-[#29241F] border border-[#DDD6CB]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-6 pt-4 border-t border-[#DDD6CB]">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="font-sans text-xs tracking-[0.16em] uppercase text-[#773B45] hover:text-[#29241F] font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-sans text-xs tracking-[0.16em] uppercase text-[#77716A] hover:text-[#29241F] font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <BrandIcons.Github className="w-3.5 h-3.5" />
                      <span>REPOSITORY</span>
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#29241F]/60 backdrop-blur-sm"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-2xl w-full bg-[#FFFFFF] border border-[#DDD6CB] p-8 sm:p-12 shadow-2xl relative max-h-[88vh] overflow-y-auto"
              >
                <button
                  onClick={() => setActiveProject(null)}
                  aria-label="Close details"
                  className="absolute top-6 right-6 p-2 text-[#77716A] hover:text-[#29241F] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#773B45] font-semibold block mb-2">
                  PROJECT {activeProject.number} &bull; {activeProject.category}
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#29241F] mb-1">
                  {activeProject.title}
                </h3>
                <p className="font-serif italic text-lg text-[#77716A] mb-6">
                  {activeProject.subtitle}
                </p>

                <div className="font-sans text-sm sm:text-base text-[#77716A] leading-relaxed mb-8">
                  <p>{activeProject.fullDetails}</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#29241F] font-semibold mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-sans text-xs tracking-[0.1em] uppercase px-3 py-1 bg-[#F8F5EF] text-[#29241F] border border-[#DDD6CB]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#DDD6CB] flex items-center justify-between">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#773B45] text-[#FFFFFF] font-sans text-xs tracking-[0.16em] uppercase hover:bg-[#29241F] transition-colors"
                  >
                    <BrandIcons.Github className="w-3.5 h-3.5 mr-2" />
                    <span>VIEW GITHUB REPO</span>
                  </a>

                  <span className="font-sans text-xs text-[#77716A]">
                    Source Code Available
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
