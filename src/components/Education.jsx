import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-24 sm:py-32 bg-[#F3EFEA]/45 border-t border-b border-[#E8E2D9]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#9E656B] font-semibold block mb-3">
            05 / EDUCATION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#22201D] font-normal tracking-tight leading-tight max-w-2xl">
            The academic foundation.
          </h2>
        </div>

        {/* Editorial Education Timeline */}
        <div className="border-t border-[#E8E2D9] divide-y divide-[#E8E2D9]">
          {EDUCATION_DATA.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-[#FFFFFF]/50 transition-colors px-2 sm:px-4"
            >
              {/* Period & Status with pleasant pastel badge */}
              <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start items-baseline gap-2">
                <span className="font-serif text-xl sm:text-2xl text-[#9E656B] font-normal">
                  {item.period}
                </span>
                <span className="font-sans text-[11px] tracking-[0.14em] uppercase px-2.5 py-0.5 rounded bg-[#EEF3EF] text-[#7A9283] border border-[#7A9283]/25 font-medium">
                  {item.status}
                </span>
              </div>

              {/* Institution & Degree */}
              <div className="md:col-span-5">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#22201D] font-normal tracking-tight mb-1">
                  {item.degree}
                </h3>
                <p className="font-sans text-xs sm:text-sm tracking-[0.1em] uppercase text-[#6B655E]">
                  {item.institution}
                </p>
              </div>

              {/* Score / Highlights */}
              <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end text-left md:text-right pt-2 md:pt-0">
                {item.gpa && (
                  <span className="font-sans text-xs font-semibold tracking-[0.16em] uppercase px-3 py-1 bg-[#F7EEF0] border border-[#9E656B]/25 text-[#9E656B] rounded mb-2">
                    {item.gpa}
                  </span>
                )}
                <p className="font-sans text-xs text-[#6B655E] leading-relaxed max-w-xs">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
