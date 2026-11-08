import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#EFEAE1]/40 border-t border-b border-[#DDD6CB]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#773B45] font-medium block mb-3">
            03 / EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#29241F] font-normal tracking-tight leading-tight max-w-2xl">
            Where learning meets practice.
          </h2>
        </div>

        {/* Editorial Timeline */}
        <div className="relative border-l border-[#DDD6CB] ml-3 sm:ml-6 pl-8 sm:pl-12 space-y-16">
          {EXPERIENCE_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Minimal Timeline Marker */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-2.5 h-2.5 bg-[#773B45] border-2 border-[#F8F5EF]" />

              <div className="bg-[#FFFFFF] p-8 sm:p-10 border border-[#DDD6CB] shadow-[0_2px_12px_rgba(41,36,31,0.02)]">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-4 border-b border-[#DDD6CB]/70">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#29241F] font-normal">
                    {item.role}
                  </h3>
                  <span className="font-sans text-xs tracking-[0.2em] text-[#773B45] uppercase font-medium">
                    EXPERIENCE {item.number}
                  </span>
                </div>

                <ul className="space-y-3.5 mb-8 font-sans text-sm sm:text-base text-[#77716A] leading-relaxed">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3">
                      <span className="text-[#773B45] mt-1.5 text-xs select-none">&mdash;</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#DDD6CB]/50">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-sans text-[11px] tracking-[0.12em] uppercase px-3 py-1 bg-[#F8F5EF] text-[#29241F] border border-[#DDD6CB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
