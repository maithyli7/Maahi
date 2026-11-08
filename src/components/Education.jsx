import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-24 sm:py-32 bg-[#EFEAE1]/40 border-t border-b border-[#DDD6CB]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#773B45] font-medium block mb-3">
            05 / EDUCATION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#29241F] font-normal tracking-tight leading-tight max-w-2xl">
            The academic foundation.
          </h2>
        </div>

        {/* Editorial Education Timeline */}
        <div className="border-t border-[#DDD6CB] divide-y divide-[#DDD6CB]">
          {EDUCATION_DATA.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-[#FFFFFF]/40 transition-colors px-2 sm:px-4"
            >
              {/* Period & Status */}
              <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start items-baseline gap-1">
                <span className="font-serif text-xl sm:text-2xl text-[#773B45] font-normal">
                  {item.period}
                </span>
                <span className="font-sans text-xs tracking-[0.14em] uppercase text-[#77716A]">
                  {item.status}
                </span>
              </div>

              {/* Institution & Degree */}
              <div className="md:col-span-5">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#29241F] font-normal tracking-tight mb-1">
                  {item.degree}
                </h3>
                <p className="font-sans text-xs sm:text-sm tracking-[0.1em] uppercase text-[#77716A]">
                  {item.institution}
                </p>
              </div>

              {/* Score / Highlights */}
              <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end text-left md:text-right pt-2 md:pt-0">
                {item.gpa && (
                  <span className="font-sans text-xs font-semibold tracking-[0.16em] uppercase px-3 py-1 bg-[#F8F5EF] border border-[#DDD6CB] text-[#29241F] mb-2">
                    {item.gpa}
                  </span>
                )}
                <p className="font-sans text-xs text-[#77716A] leading-relaxed max-w-xs">
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
