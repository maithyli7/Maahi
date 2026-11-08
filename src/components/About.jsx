import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F3EFEA]/45 border-t border-b border-[#E8E2D9]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#9E656B] font-semibold block mb-3">
            {ABOUT_CONTENT.sectionNum}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#22201D] font-normal tracking-tight max-w-2xl leading-tight">
            {ABOUT_CONTENT.heading}
          </h2>
        </div>

        {/* Narrative & Personal Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative Paragraphs */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-[#22201D] font-sans text-base sm:text-lg leading-relaxed font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            {ABOUT_CONTENT.paragraphs.map((para, idx) => (
              <p 
                key={idx} 
                className={idx === 0 ? "font-serif text-xl sm:text-2xl text-[#22201D] leading-snug italic font-normal" : "text-[#6B655E]"}
              >
                {para}
              </p>
            ))}
          </motion.div>

          {/* Personal Information Panel with subtle pastel rose accent */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#FFFFFF] p-8 sm:p-10 border border-[#E8E2D9] shadow-[0_4px_20px_rgba(34,32,29,0.02)]">
              <span className="font-sans text-[11px] tracking-[0.22em] uppercase text-[#9E656B] font-semibold block mb-6 pb-3 border-b border-[#E8E2D9]">
                OVERVIEW
              </span>

              <dl className="space-y-6 text-sm font-sans">
                <div>
                  <dt className="text-[11px] tracking-[0.16em] uppercase text-[#6B655E] mb-1">
                    Location
                  </dt>
                  <dd className="text-base text-[#22201D] font-medium">
                    {ABOUT_CONTENT.panel.location}
                  </dd>
                </div>

                <div className="pt-4 border-t border-[#E8E2D9]">
                  <dt className="text-[11px] tracking-[0.16em] uppercase text-[#6B655E] mb-1">
                    Education
                  </dt>
                  <dd className="text-base text-[#22201D] font-medium">
                    {ABOUT_CONTENT.panel.education}
                  </dd>
                </div>

                <div className="pt-4 border-t border-[#E8E2D9]">
                  <dt className="text-[11px] tracking-[0.16em] uppercase text-[#6B655E] mb-1">
                    Focus
                  </dt>
                  <dd className="text-base text-[#22201D] font-medium">
                    {ABOUT_CONTENT.panel.focus}
                  </dd>
                </div>

                <div className="pt-4 border-t border-[#E8E2D9]">
                  <dt className="text-[11px] tracking-[0.16em] uppercase text-[#6B655E] mb-1">
                    Interests
                  </dt>
                  <dd className="text-base text-[#22201D] font-medium">
                    {ABOUT_CONTENT.panel.interests}
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
