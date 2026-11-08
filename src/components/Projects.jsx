import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Layers, Cpu, Database, Radio, Sun } from 'lucide-react';
import { BrandIcons } from './BrandIcons';
import { PROJECTS_DATA } from '../data/portfolioData';

// Balanced pleasant pastel styling per project card
const projectAccents = [
  {
    theme: 'rose',
    badgeBg: 'bg-[#F7EEF0]',
    badgeText: 'text-[#9E656B]',
    badgeBorder: 'border-[#9E656B]/25',
    accentText: 'text-[#9E656B]',
    borderHover: 'hover:border-[#9E656B]/60',
    number: '01',
    icon: Radio,
  },
  {
    theme: 'blue',
    badgeBg: 'bg-[#EFF3F6]',
    badgeText: 'text-[#5F7D8E]',
    badgeBorder: 'border-[#5F7D8E]/25',
    accentText: 'text-[#5F7D8E]',
    borderHover: 'hover:border-[#5F7D8E]/60',
    number: '02',
    icon: Layers,
  },
  {
    theme: 'sage',
    badgeBg: 'bg-[#EEF3EF]',
    badgeText: 'text-[#7A9283]',
    badgeBorder: 'border-[#7A9283]/25',
    accentText: 'text-[#7A9283]',
    borderHover: 'hover:border-[#7A9283]/60',
    number: '03',
    icon: Database,
  },
  {
    theme: 'clay',
    badgeBg: 'bg-[#FAF1EC]',
    badgeText: 'text-[#B37D64]',
    badgeBorder: 'border-[#B37D64]/25',
    accentText: 'text-[#B37D64]',
    borderHover: 'hover:border-[#B37D64]/60',
    number: '04',
    icon: Cpu,
  },
  {
    theme: 'rose',
    badgeBg: 'bg-[#F7EEF0]',
    badgeText: 'text-[#9E656B]',
    badgeBorder: 'border-[#9E656B]/25',
    accentText: 'text-[#9E656B]',
    borderHover: 'hover:border-[#9E656B]/60',
    number: '05',
    icon: Sun,
  },
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="work" className="py-24 sm:py-36 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#E8E2D9]">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#9E656B] font-semibold block mb-3">
              04 / SELECTED WORK
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#22201D] font-normal tracking-tight leading-tight max-w-2xl">
              A selection of things I've built.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#6B655E] max-w-xs leading-relaxed">
            Practical software applications and embedded hardware systems built with clean architecture and real-world utility.
          </p>
        </div>

        {/* Professional Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => {
            const accent = projectAccents[idx % projectAccents.length];
            const Icon = accent.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`bg-[#FFFFFF] border border-[#E8E2D9] ${accent.borderHover} transition-all duration-300 flex flex-col justify-between p-8 shadow-[0_4px_24px_rgba(34,32,29,0.02)] hover:shadow-[0_8px_32px_rgba(34,32,29,0.06)] group`}
              >
                <div>
                  {/* Card Header: Icon + Category Badge */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-lg ${accent.badgeBg} ${accent.badgeBorder} border flex items-center justify-center ${accent.accentText}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-sans text-[10px] tracking-[0.16em] uppercase px-2.5 py-1 rounded ${accent.badgeBg} ${accent.badgeText} ${accent.badgeBorder} border font-medium`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Project Number + Title */}
                  <span className="font-sans text-xs tracking-[0.2em] text-[#989086] block mb-2">
                    PROJECT {project.number}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#22201D] font-normal tracking-tight mb-2 group-hover:text-[#9E656B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-serif italic text-sm text-[#6B655E] mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#6B655E] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#E8E2D9]/70">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-sans text-[11px] tracking-[0.08em] uppercase px-2.5 py-1 bg-[#FAF8F5] text-[#22201D] border border-[#E8E2D9] rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D9]">
                    <button
                      onClick={() => setActiveProject(project)}
                      className={`font-sans text-xs tracking-[0.14em] uppercase ${accent.accentText} hover:text-[#22201D] font-medium flex items-center gap-1 transition-colors cursor-pointer`}
                    >
                      <span>DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-sans text-xs tracking-[0.14em] uppercase text-[#6B655E] hover:text-[#22201D] font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <BrandIcons.Github className="w-3.5 h-3.5" />
                      <span>CODE</span>
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
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#22201D]/60 backdrop-blur-sm"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-2xl w-full bg-[#FFFFFF] border border-[#E8E2D9] p-8 sm:p-12 shadow-2xl relative max-h-[88vh] overflow-y-auto"
              >
                <button
                  onClick={() => setActiveProject(null)}
                  aria-label="Close details"
                  className="absolute top-6 right-6 p-2 text-[#6B655E] hover:text-[#22201D] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="inline-block px-3 py-1 rounded bg-[#F7EEF0] border border-[#9E656B]/25 text-[#9E656B] text-[11px] font-sans tracking-[0.16em] uppercase font-semibold mb-3">
                  PROJECT {activeProject.number} &bull; {activeProject.category}
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#22201D] mb-1">
                  {activeProject.title}
                </h3>
                <p className="font-serif italic text-lg text-[#6B655E] mb-6">
                  {activeProject.subtitle}
                </p>

                <div className="font-sans text-sm sm:text-base text-[#6B655E] leading-relaxed mb-8">
                  <p>{activeProject.fullDetails}</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#22201D] font-semibold mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-sans text-xs tracking-[0.1em] uppercase px-3 py-1 bg-[#FAF8F5] text-[#22201D] border border-[#E8E2D9]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E8E2D9] flex items-center justify-between">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#9E656B] text-[#FFFFFF] font-sans text-xs tracking-[0.16em] uppercase hover:bg-[#22201D] transition-colors"
                  >
                    <BrandIcons.Github className="w-3.5 h-3.5 mr-2" />
                    <span>VIEW GITHUB REPO</span>
                  </a>

                  <span className="font-sans text-xs text-[#6B655E]">
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
