import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../data/portfolioData';

// Distinct pleasant pastel badge accents
const categoryColors = [
  { bg: 'bg-[#EEF3EF]', text: 'text-[#7A9283]', border: 'border-[#7A9283]/25' }, // Pastel sage
  { bg: 'bg-[#F7EEF0]', text: 'text-[#9E656B]', border: 'border-[#9E656B]/25' }, // Pastel rose
  { bg: 'bg-[#EFF3F6]', text: 'text-[#5F7D8E]', border: 'border-[#5F7D8E]/25' }, // Pastel slate blue
  { bg: 'bg-[#FAF1EC]', text: 'text-[#B37D64]', border: 'border-[#B37D64]/25' }, // Pastel terracotta
  { bg: 'bg-[#EEF3EF]', text: 'text-[#7A9283]', border: 'border-[#7A9283]/25' }, // Pastel sage
  { bg: 'bg-[#EFF3F6]', text: 'text-[#5F7D8E]', border: 'border-[#5F7D8E]/25' }, // Pastel slate blue
  { bg: 'bg-[#F7EEF0]', text: 'text-[#9E656B]', border: 'border-[#9E656B]/25' }, // Pastel rose
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#9E656B] font-semibold block mb-3">
            02 / EXPERTISE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#22201D] font-normal tracking-tight leading-tight max-w-2xl">
            Tools, technologies & things I work with.
          </h2>
        </div>

        {/* Editorial Skill Rows */}
        <div className="divide-y divide-[#E8E2D9] border-t border-b border-[#E8E2D9]">
          {SKILLS_DATA.map((item, idx) => {
            const style = categoryColors[idx % categoryColors.length];

            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.04 }}
                className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group hover:bg-[#F3EFEA]/40 transition-colors px-2 sm:px-4"
              >
                {/* Category Title with pastel badge */}
                <div className="md:col-span-4 flex items-center gap-3">
                  <span className={`font-sans text-[11px] tracking-[0.16em] px-2 py-0.5 rounded ${style.bg} ${style.text} ${style.border} border font-medium`}>
                    0{idx + 1}
                  </span>
                  <h3 className="font-sans text-xs sm:text-sm tracking-[0.16em] uppercase text-[#22201D] font-medium group-hover:text-[#9E656B] transition-colors">
                    {item.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="md:col-span-8 flex flex-wrap gap-x-6 gap-y-2.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={skill}
                      className="font-serif text-lg sm:text-xl text-[#6B655E] group-hover:text-[#22201D] transition-colors"
                    >
                      {skill}
                      {sIdx < item.skills.length - 1 && (
                        <span className="text-[#E8E2D9] ml-6 font-sans text-sm select-none">&bull;</span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
